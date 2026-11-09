/*
 * Author-time tool: downloads each ingredient's real structure from PubChem and draws it.
 *   node scripts/fetch-structures.mjs
 * Reads  src/features/ingredients/data/structure-map.json  (ingredient → PubChem CID, curated by hand).
 * Writes src/features/ingredients/data/generated/structures.json and public/images/ingredients/structures/<id>.svg
 *
 * The drawing comes straight from PubChem's atom coordinates, bond orders, stereo wedges and
 * charges. Nothing about the molecule is invented here. Results are committed, so builds need no network.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const DATA = resolve("src/features/ingredients/data");
const PUG = "https://pubchem.ncbi.nlm.nih.gov/rest/pug";
const OUT_SVG = resolve("public/images/ingredients/structures");
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function get(url, json) {
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url);
    if (res.status === 404) return null;
    if (res.status === 503 || res.status === 429) { await sleep(2500 * (attempt + 1)); continue; }
    if (!res.ok) return null;
    return json ? res.json() : res.text();
  }
  return null;
}

/** Parses a V2000 molfile record. Bond stereo: 1 wedge (towards viewer), 6 hash (away). */
export function parseSdf(sdf) {
  const lines = sdf.split(/\r?\n/);
  const counts = lines[3];
  const na = parseInt(counts.slice(0, 3), 10);
  const nb = parseInt(counts.slice(3, 6), 10);
  const atoms = [];
  for (let i = 0; i < na; i++) {
    const l = lines[4 + i];
    atoms.push({ x: parseFloat(l.slice(0, 10)), y: parseFloat(l.slice(10, 20)), z: parseFloat(l.slice(20, 30)), el: l.slice(31, 34).trim(), charge: 0 });
  }
  const bonds = [];
  for (let i = 0; i < nb; i++) {
    const l = lines[4 + na + i];
    bonds.push({ a: parseInt(l.slice(0, 3), 10) - 1, b: parseInt(l.slice(3, 6), 10) - 1, order: parseInt(l.slice(6, 9), 10), stereo: parseInt(l.slice(9, 12), 10) || 0 });
  }
  for (const l of lines.slice(4 + na + nb)) {
    if (l.startsWith("M  CHG")) {
      const n = parseInt(l.slice(6, 9), 10);
      for (let i = 0; i < n; i++) atoms[parseInt(l.slice(10 + 8 * i, 13 + 8 * i), 10) - 1].charge = parseInt(l.slice(14 + 8 * i, 17 + 8 * i), 10);
    }
    if (l.startsWith("M  END")) break;
  }
  return { atoms, bonds };
}

const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const COLOR = { O: "#c0262d", N: "#2348b5", S: "#a06a00", P: "#b5500f", Cl: "#1a7a33", F: "#1a7a33", Br: "#8a2b12", I: "#6a1f9c", Na: "#5b3aa8", K: "#5b3aa8", Ca: "#2b6a4f", Fe: "#a4471c", Zn: "#5b6470", Mg: "#2b6a4f", Si: "#7a5a2f", Ti: "#5b6470" };

/** Heavy atoms and bonds, with hydrogens folded into their parent's count (carbon hydrogens are implied). */
function heavy(mol) {
  const keep = mol.atoms.map((a, i) => (a.el === "H" && !isLoneH(mol, i) ? -1 : i));
  const hOn = new Map();
  for (const b of mol.bonds) {
    for (const [h, other] of [[b.a, b.b], [b.b, b.a]]) if (keep[h] === -1 && mol.atoms[h].el === "H") hOn.set(other, (hOn.get(other) ?? 0) + 1);
  }
  const bonds = mol.bonds.filter(b => keep[b.a] !== -1 && keep[b.b] !== -1);
  const atoms = mol.atoms.map((a, i) => ({ ...a, i, h: hOn.get(i) ?? 0 })).filter(a => keep[a.i] !== -1);
  return { atoms, bonds };
}
const isLoneH = (mol, i) => !mol.bonds.some(b => b.a === i || b.b === i);

/** A skeletal formula as SVG: carbons at line junctions, heteroatoms labelled, wedges for stereo. */
export function drawSvg(mol, title) {
  const { atoms, bonds } = heavy(mol);
  if (!atoms.length) return null;
  const xs = atoms.map(a => a.x), ys = atoms.map(a => a.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);

  // scale so a bond is ~38 units, but keep big molecules within a sensible canvas
  const lens = bonds.map(b => Math.hypot(atomAt(atoms, b.a).x - atomAt(atoms, b.b).x, atomAt(atoms, b.a).y - atomAt(atoms, b.b).y));
  const avg = lens.length ? lens.reduce((s, v) => s + v, 0) / lens.length : 1;
  let scale = 38 / (avg || 1);
  const maxSpan = Math.max(maxX - minX, maxY - minY) || 1;
  if (maxSpan * scale > 860) scale = 860 / maxSpan;
  const pad = 46;
  const w = Math.max(220, (maxX - minX) * scale + pad * 2);
  const h = Math.max(170, (maxY - minY) * scale + pad * 2);
  const ox = (w - (maxX - minX) * scale) / 2, oy = (h - (maxY - minY) * scale) / 2;
  const px = a => [(a.x - minX) * scale + ox, (maxY - a.y) * scale + oy]; // molfile y points up

  const deg = new Map();
  for (const b of bonds) for (const k of [b.a, b.b]) deg.set(k, (deg.get(k) ?? 0) + 1);
  const labelled = a => a.el !== "C" || a.charge !== 0 || (deg.get(a.i) ?? 0) === 0;
  const size = Math.max(11, Math.min(17, scale * 0.42));
  const gapFor = a => (labelled(a) ? size * 0.72 : 0);
  const stroke = Math.max(1.1, Math.min(2, scale * 0.05));
  const parts = [];

  for (const b of bonds) {
    const A = atomAt(atoms, b.a), B = atomAt(atoms, b.b);
    let [x1, y1] = px(A), [x2, y2] = px(B);
    const len = Math.hypot(x2 - x1, y2 - y1) || 1;
    const ux = (x2 - x1) / len, uy = (y2 - y1) / len;
    const ga = gapFor(A), gb = gapFor(B);
    x1 += ux * ga; y1 += uy * ga; x2 -= ux * gb; y2 -= uy * gb;
    const nx = -uy, ny = ux;
    const line = (dx, dy, shrink = 0) => `<line x1="${(x1 + ux * shrink + dx).toFixed(1)}" y1="${(y1 + uy * shrink + dy).toFixed(1)}" x2="${(x2 - ux * shrink + dx).toFixed(1)}" y2="${(y2 - uy * shrink + dy).toFixed(1)}"/>`;

    if (b.stereo === 1 && b.order === 1) {
      const wid = scale * 0.13;
      parts.push(`<polygon points="${x1.toFixed(1)},${y1.toFixed(1)} ${(x2 + nx * wid).toFixed(1)},${(y2 + ny * wid).toFixed(1)} ${(x2 - nx * wid).toFixed(1)},${(y2 - ny * wid).toFixed(1)}" fill="#1c2521" stroke="none"/>`);
    } else if (b.stereo === 6 && b.order === 1) {
      const n = 6;
      for (let i = 1; i <= n; i++) {
        const t = i / n, wid = scale * 0.13 * t;
        const cx = x1 + (x2 - x1) * t, cy = y1 + (y2 - y1) * t;
        parts.push(`<line x1="${(cx + nx * wid).toFixed(1)}" y1="${(cy + ny * wid).toFixed(1)}" x2="${(cx - nx * wid).toFixed(1)}" y2="${(cy - ny * wid).toFixed(1)}"/>`);
      }
    } else if (b.order === 1) parts.push(line(0, 0));
    else if (b.order === 2) {
      const off = scale * 0.09;
      // inside a ring or at a junction: main line plus a shorter inner line; otherwise symmetric
      const side = ringSide(A, B, atoms, bonds, px);
      if (side === 0) parts.push(line(nx * off, ny * off), line(-nx * off, -ny * off));
      else parts.push(line(0, 0), line(nx * off * 2 * side, ny * off * 2 * side, scale * 0.12));
    } else if (b.order === 3) {
      const off = scale * 0.12;
      parts.push(line(0, 0), line(nx * off, ny * off, scale * 0.08), line(-nx * off, -ny * off, scale * 0.08));
    }
  }

  const labels = [];
  for (const a of atoms) {
    if (!labelled(a)) continue;
    const [x, y] = px(a);
    const fill = COLOR[a.el] ?? "#1c2521";
    // put hydrogens on the side away from the bonds
    let sx = 0;
    for (const b of bonds) {
      if (b.a !== a.i && b.b !== a.i) continue;
      const o = atomAt(atoms, b.a === a.i ? b.b : b.a);
      sx += px(o)[0] - x;
    }
    const left = a.h > 0 && sx > 0.5;
    const hPart = a.h ? `<tspan>H</tspan>${a.h > 1 ? `<tspan baseline-shift="sub" font-size="${(size * 0.72).toFixed(1)}">${a.h}</tspan>` : ""}` : "";
    const sign = a.charge ? `<tspan baseline-shift="super" font-size="${(size * 0.72).toFixed(1)}">${Math.abs(a.charge) > 1 ? Math.abs(a.charge) : ""}${a.charge > 0 ? "+" : "−"}</tspan>` : "";
    const el = `<tspan>${a.el}</tspan>`;
    const anchor = a.h ? (left ? "end" : "start") : "middle";
    const dx = a.h ? (left ? size * 0.42 : -size * 0.42) : 0;
    labels.push(`<text x="${(x + dx).toFixed(1)}" y="${(y + size * 0.36).toFixed(1)}" text-anchor="${anchor}" fill="${fill}">${left ? hPart + el + sign : el + hPart + sign}</text>`);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w.toFixed(0)} ${h.toFixed(0)}" width="${w.toFixed(0)}" height="${h.toFixed(0)}" role="img"><title>${esc(title)}</title><rect width="100%" height="100%" fill="#ffffff"/><g stroke="#1c2521" stroke-width="${stroke.toFixed(2)}" stroke-linecap="round">${parts.join("")}</g><g font-family="Arial, Helvetica, sans-serif" font-size="${size.toFixed(1)}" font-weight="600">${labels.join("")}</g></svg>\n`;
}

const atomAt = (atoms, i) => atoms.find(a => a.i === i);

/** Which side of the bond a ring lies on: +1, -1, or 0 if the bond is not in a ring and is terminal. */
function ringSide(A, B, atoms, bonds, px) {
  const neighbours = (i, skip) => bonds.filter(b => (b.a === i || b.b === i)).map(b => (b.a === i ? b.b : b.a)).filter(k => k !== skip);
  const nA = neighbours(A.i, B.i), nB = neighbours(B.i, A.i);
  if (!nA.length || !nB.length) return 0;
  const [x1, y1] = px(A), [x2, y2] = px(B);
  const len = Math.hypot(x2 - x1, y2 - y1) || 1;
  const nx = -(y2 - y1) / len, ny = (x2 - x1) / len;
  let sum = 0;
  for (const k of [...nA, ...nB]) {
    const [x, y] = px(atomAt(atoms, k));
    sum += Math.sign((x - x1) * nx + (y - y1) * ny);
  }
  return sum === 0 ? 1 : Math.sign(sum);
}

/** Functional groups found by walking the real bond graph. */
export function functionalGroups(mol) {
  const { atoms, bonds } = heavy(mol);
  const at = i => atomAt(atoms, i);
  const nbrs = i => bonds.filter(b => b.a === i || b.b === i).map(b => ({ o: b.a === i ? b.b : b.a, order: b.order }));
  const found = new Set();
  // carbonates, bicarbonates and mineral salts have no organic functional groups to speak of
  const organic = atoms.some(a => a.el === "C" && (a.h > 0 || nbrs(a.i).some(x => at(x.o).el === "C")));
  if (!organic) return [];
  const { aromatic: aromaticAtoms, conjugated } = ringInfo(atoms, bonds);
  if (aromaticAtoms.size) found.add("aromatic-ring");
  for (const a of atoms) {
    const n = nbrs(a.i).map(x => ({ ...x, atom: at(x.o) }));
    if (a.el === "C") {
      const dblO = n.filter(x => x.order === 2 && x.atom.el === "O");
      const singleO = n.filter(x => x.order === 1 && x.atom.el === "O");
      const singleN = n.filter(x => x.order === 1 && x.atom.el === "N");
      if (dblO.length === 1) {
        const carboxyl = singleO.find(x => nbrs(x.o).length === 1);
        const ester = singleO.find(x => nbrs(x.o).length === 2);
        if (carboxyl) found.add(carboxyl.atom.charge < 0 ? "carboxylate" : "carboxylic-acid");
        else if (ester) found.add("ester");
        else if (singleN.length) found.add("amide");
        else if (n.filter(x => x.atom.el === "C").length === 2) found.add("ketone");
        else found.add("aldehyde");
      }
      if (n.some(x => x.order === 2 && x.atom.el === "C") && !conjugated.has(a.i)) found.add("alkene");
      if (n.some(x => x.order === 3 && x.atom.el === "N")) found.add("nitrile");
      if (n.some(x => ["F", "Cl", "Br", "I"].includes(x.atom.el))) found.add("halide");
    }
    if (a.el === "O" && n.length === 1 && n[0].order === 1 && a.charge === 0 && a.h > 0) {
      const c = n[0].atom;
      const isAcid = nbrs(c.i).some(x => x.order === 2 && at(x.o).el === "O");
      if (c.el === "C" && !isAcid) found.add(aromaticAtoms.has(c.i) ? "phenol" : "hydroxyl");
    }
    if (a.el === "O" && n.length === 2 && n.every(x => x.atom.el === "C" && x.order === 1)) {
      const carbonyl = n.some(x => nbrs(x.o).some(y => y.order === 2 && at(y.o).el === "O"));
      if (!carbonyl) found.add("ether");
    }
    if (a.el === "N") {
      const carbonyl = n.some(x => x.atom.el === "C" && nbrs(x.o).some(y => y.order === 2 && at(y.o).el === "O"));
      if (n.some(x => x.atom.el === "N" && x.order === 2)) found.add("azo");
      else if (a.charge > 0 && n.length === 4) found.add("quaternary-ammonium");
      else if (!carbonyl && !conjugated.has(a.i) && n.every(x => x.order === 1) && !n.some(x => x.atom.el !== "C")) found.add("amine");
    }
    if (a.el === "S") {
      const dbl = n.filter(x => x.atom.el === "O" && x.order === 2).length;
      const singleO = n.some(x => x.atom.el === "O" && x.order === 1);
      const toN = n.some(x => x.atom.el === "N");
      const toC = n.some(x => x.atom.el === "C");
      if (dbl >= 2 && singleO && toN) found.add("sulfamate");
      else if (dbl >= 2 && toN) found.add("sulfonamide");
      else if (dbl >= 2 && singleO && toC) found.add("sulfonate");
    }
    if (a.el === "P" && n.filter(x => x.atom.el === "O").length >= 3) found.add("phosphate");
  }
  return [...found].sort();
}

/**
 * Finds rings of up to six atoms, then which are fully conjugated. Works across fused rings
 * (naphthalene, purines), which a simple alternating-bond test misses.
 *   aromatic: every ring atom has a double bond inside the ring system, or is N/O/S with a lone pair.
 *   conjugated: the same, but carbonyl carbons are allowed (pyridone, quinone, hypoxanthine rings).
 */
function ringInfo(atoms, bonds) {
  const nbr = new Map(atoms.map(a => [a.i, []]));
  for (const b of bonds) { nbr.get(b.a).push({ o: b.b, order: b.order }); nbr.get(b.b).push({ o: b.a, order: b.order }); }
  const rings = new Map();
  const walk = (start, cur, path) => {
    for (const { o } of nbr.get(cur)) {
      if (o === start && path.length >= 5) rings.set([...path].sort((x, y) => x - y).join(","), [...path]);
      else if (!path.includes(o) && path.length < 6 && o > start) walk(start, o, [...path, o]);
    }
  };
  for (const a of atoms) walk(a.i, a.i, [a.i]);
  const list = [...rings.values()];
  const inRing = new Set(list.flat());
  const el = i => atomAt(atoms, i).el;
  const ringDouble = i => nbr.get(i).some(n => n.order === 2 && inRing.has(n.o));
  const exoCarbonyl = i => el(i) === "C" && nbr.get(i).some(n => n.order === 2 && el(n.o) === "O" && !inRing.has(n.o));
  const lone = i => ["N", "O", "S"].includes(el(i));
  const aromatic = new Set(), conjugated = new Set();
  for (const r of list) {
    if (r.every(i => ringDouble(i) || lone(i)) && r.some(ringDouble)) r.forEach(i => { aromatic.add(i); conjugated.add(i); });
    else if (r.every(i => ringDouble(i) || lone(i) || exoCarbonyl(i)) && r.some(ringDouble)) r.forEach(i => conjugated.add(i));
  }
  return { aromatic, conjugated };
}

async function main() {
  const map = JSON.parse(readFileSync(resolve(DATA, "structure-map.json"), "utf8"));
  mkdirSync(OUT_SVG, { recursive: true });
  const out = {};
  for (const [id, m] of Object.entries(map)) {
    if (m.kind === "none") { out[id] = { kind: "none" }; continue; }
    const props = await get(`${PUG}/compound/cid/${m.cid}/property/MolecularFormula,MolecularWeight,IUPACName,InChIKey,XLogP,TPSA,HBondDonorCount,HBondAcceptorCount,Charge/JSON`, true);
    const sdf2 = await get(`${PUG}/compound/cid/${m.cid}/SDF?record_type=2d`);
    if (!props || !sdf2) { console.log(`FAIL ${id}: no PubChem record for ${m.cid}`); continue; }
    const p = props.PropertyTable.Properties[0];
    const mol = parseSdf(sdf2);
    const name = m.shows?.en ?? id;
    const svg = drawSvg(mol, `2D structure, PubChem CID ${m.cid}`);
    writeFileSync(resolve(OUT_SVG, `${id}.svg`), svg);

    // salts and mixtures have no conformer of their own: use the parent compound, and say so
    let model = null, modelCid = m.model3d ?? m.cid;
    if (m.model3d !== null) {
      let sdf3 = await get(`${PUG}/compound/cid/${modelCid}/SDF?record_type=3d`);
      if (!sdf3 && !m.model3d) {
        const parent = await get(`${PUG}/compound/cid/${m.cid}/cids/JSON?cids_type=parent`, true);
        const pid = parent?.IdentifierList?.CID?.[0];
        if (pid && pid !== m.cid) { modelCid = pid; sdf3 = await get(`${PUG}/compound/cid/${pid}/SDF?record_type=3d`); }
      }
      if (sdf3) {
        const mol3 = parseSdf(sdf3);
        if (mol3.atoms.length <= 200) model = { cid: modelCid, sameAsStructure: modelCid === m.cid, atoms: mol3.atoms.map(a => [a.el, +a.x.toFixed(2), +a.y.toFixed(2), +a.z.toFixed(2)]), bonds: mol3.bonds.map(b => [b.a, b.b, b.order]) };
      }
    }
    out[id] = {
      kind: m.kind, cid: m.cid, ...(m.shows ? { shows: m.shows } : {}), svg: `/images/ingredients/structures/${id}.svg`,
      formula: p.MolecularFormula, weight: Number(p.MolecularWeight), iupac: p.IUPACName, inchiKey: p.InChIKey,
      ...(p.XLogP !== undefined ? { xlogp: p.XLogP } : {}), tpsa: p.TPSA, hbd: p.HBondDonorCount, hba: p.HBondAcceptorCount, charge: p.Charge,
      groups: functionalGroups(mol), model,
    };
    console.log(`ok   ${id.padEnd(36)} CID ${String(m.cid).padEnd(10)} ${p.MolecularFormula.padEnd(16)} ${name === id ? "" : name} 3D:${model ? (model.sameAsStructure ? "own" : `parent ${model.cid}`) : "none"} [${out[id].groups.join(",")}]`);
    await sleep(260);
  }
  writeFileSync(resolve(DATA, "generated/structures.json"), JSON.stringify(out) + "\n");
}

if (process.argv[1]?.endsWith("fetch-structures.mjs")) await main();
