/* Scientific Identity panel, chemical formulas and labelled concept diagrams. Server components. */
import type { ReactNode } from "react";
import { ArrowUpRight, BadgeCheck, Layers, PencilRuler, Shapes } from "lucide-react";
import { digits } from "../lib/site";
import { STRINGS } from "../strings";
import type { CategoryId, ImageAsset, Ingredient, Lang, Structure, StructureKind } from "../types";
import { Photo } from "./Figure";
import MoleculeViewer from "./MoleculeViewer";
import { VOCAB } from "./Parts";

/** Chemical formula with real subscripts: C7H5NaO2, FeSO4·7H2O. A multiplier after "·" stays full size. */
export function Formula({ value }: { value: string }) {
  const out: ReactNode[] = [];
  value.split(/(\d+)/).forEach((part, i, all) => {
    if (!part) return;
    const isMultiplier = /^\d+$/.test(part) && (i === 0 || /[·.]$/.test(all[i - 1]));
    out.push(/^\d+$/.test(part) && !isMultiplier ? <sub key={i}>{part}</sub> : <span key={i}>{part}</span>);
  });
  return <span className="font-mono">{out}</span>;
}

/** Credit under a photograph: what it shows, who made it, under what licence. */
export function Credit({ image, lang, kindNote = true }: { image: ImageAsset; lang: Lang; kindNote?: boolean }) {
  const s = STRINGS[lang];
  return (
    <figcaption className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">
      {kindNote && <span className="mr-1 rounded bg-stone-100 px-1 py-0.5 font-semibold text-stone-800 dark:bg-forest-800 dark:text-stone-100">{s.subjects[image.subject]}</span>}
      {image.caption[lang]}{" "}
      <span className="break-words">{s.imageBy}: {image.author} · {image.license} · <a href={image.page} target="_blank" rel="noopener noreferrer" className="underline">Wikimedia Commons</a></span>
    </figcaption>
  );
}

const KIND_ICON: Record<StructureKind, typeof BadgeCheck> = { exact: BadgeCheck, representative: Shapes, "formula-unit": Layers, none: Shapes };

function Stat({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="min-w-0 border-b border-stone-100 py-2 sm:grid sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-3 dark:border-forest-900">
      <dt className="text-sm text-stone-600 dark:text-stone-400">{label}</dt>
      <dd className="text-sm font-medium break-words text-forest-950 dark:text-stone-100">{children}</dd>
    </div>
  );
}

const panel = "rounded-2xl border border-stone-200 bg-white p-4 dark:border-forest-800 dark:bg-forest-950";

export function ScientificIdentity({ item, structure, polymer, lang }: { item: Ingredient; structure?: Structure; polymer?: ImageAsset; lang: Lang }) {
  const s = STRINGS[lang];
  const has = structure && structure.kind !== "none";

  if (!has) {
    return (
      <div className="space-y-4">
        {item.formula && <dl><Stat label={s.formula}><Formula value={item.formula} /></Stat></dl>}
        {item.chemicalName && <dl><Stat label={s.chemicalName}>{item.chemicalName}</Stat></dl>}
        {polymer ? (
          <figure className={panel}>
            <p className="mb-2 inline-flex items-center gap-1.5 rounded-lg border border-ember-300 bg-ember-50 px-2 py-1 text-xs font-semibold text-ember-800 dark:border-ember-800 dark:bg-forest-900 dark:text-ember-300"><PencilRuler className="h-3.5 w-3.5" aria-hidden="true" />{s.structurePolymer}</p>
            <div className="overflow-hidden rounded-xl bg-white p-3"><Photo image={polymer} lang={lang} sizes="(min-width: 1024px) 50vw, 100vw" className="mx-auto h-auto max-h-96 w-auto max-w-full object-contain" /></div>
            <Credit image={polymer} lang={lang} kindNote={false} />
          </figure>
        ) : <p className={`${panel} text-sm leading-relaxed text-stone-700 dark:text-stone-300`}>{s.structureNone}</p>}
      </div>
    );
  }

  const Icon = KIND_ICON[structure.kind];
  const kindText = structure.kind === "exact" ? s.structureExact : structure.kind === "representative" ? s.structureRepresentative : s.structureFormulaUnit;
  const alt = `${s.structureAlt}: ${item.name[lang]}, ${structure.formula}`;
  const pubchem = `https://pubchem.ncbi.nlm.nih.gov/compound/${structure.cid}`;
  const fromParent = structure.model && !structure.model.sameAsStructure;

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <figure className={`min-w-0 ${panel}`}>
          <p className="mb-2 inline-flex items-center gap-1.5 rounded-lg border border-forest-200 bg-forest-50 px-2 py-1 text-xs font-semibold text-forest-800 dark:border-forest-700 dark:bg-forest-900 dark:text-forest-100"><Icon className="h-3.5 w-3.5" aria-hidden="true" />{kindText}</p>
          <div className="overflow-hidden rounded-xl bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={structure.svg} alt={alt} width={480} height={360} loading="lazy" className="aspect-[4/3] w-full object-contain" />
          </div>
          <figcaption className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">
            {structure.shows && <span className="block font-medium text-stone-800 dark:text-stone-200">{structure.shows[lang]}</span>}
            {s.structureSource} <a href={pubchem} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 font-semibold underline">PubChem CID {structure.cid}<ArrowUpRight className="h-3 w-3" aria-hidden="true" /></a>
          </figcaption>
        </figure>
        {structure.model ? (
          <figure className={`min-w-0 ${panel}`}>
            <p className="mb-2 inline-flex items-center gap-1.5 rounded-lg border border-forest-200 bg-forest-50 px-2 py-1 text-xs font-semibold text-forest-800 dark:border-forest-700 dark:bg-forest-900 dark:text-forest-100">{s.model3d}</p>
            <MoleculeViewer model={structure.model} lang={lang} label={`${s.model3dLabel}: ${item.name[lang]}`} />
            <figcaption className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">
              {fromParent ? `${s.model3dParent} (PubChem CID ${structure.model.cid}). ` : ""}{s.model3dNote}
            </figcaption>
          </figure>
        ) : <p className={`${panel} text-sm leading-relaxed text-stone-700 dark:text-stone-300`}>{s.model3dNone}</p>}
      </div>
      <dl>
        <Stat label={s.molecularFormula}><Formula value={structure.formula} /></Stat>
        <Stat label={s.molecularWeight}>{digits(structure.weight, lang)} g/mol</Stat>
        {structure.iupac && <Stat label={s.iupacName}>{structure.iupac}</Stat>}
        <Stat label="InChIKey"><span className="font-mono text-xs">{structure.inchiKey}</span></Stat>
        {structure.xlogp !== undefined && <Stat label={s.xlogp}>{digits(structure.xlogp, lang)}</Stat>}
        <Stat label={s.hBonds}>{digits(structure.hbd, lang)} / {digits(structure.hba, lang)}</Stat>
        <Stat label={s.tpsa}>{digits(structure.tpsa, lang)} Å²</Stat>
      </dl>
      <p className="text-xs text-stone-600 dark:text-stone-400">{s.propertiesNote}</p>
      {structure.groups.length > 0 && (
        <div>
          <h3 className="font-semibold text-forest-900 dark:text-white">{s.functionalGroups}</h3>
          <ul className="mt-2 flex flex-wrap gap-2">{structure.groups.map(g => <li key={g} className="rounded-full border border-stone-300 bg-white px-3 py-1 text-sm text-forest-800 dark:border-forest-700 dark:bg-forest-950 dark:text-stone-200">{VOCAB.groups[g]?.[lang] ?? g}</li>)}</ul>
          <p className="mt-2 text-xs text-stone-600 dark:text-stone-400">{s.groupsNote}</p>
        </div>
      )}
    </div>
  );
}

/* ----- Concept diagrams: explain a mechanism, always labelled as schematic. ----- */

const W = 620, H = 260;
const Txt = ({ x, y, children, anchor = "middle", weight = 500 }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end"; weight?: number }) => <text x={x} y={y} textAnchor={anchor} fontSize="14" fontWeight={weight} fill="#163027">{children}</text>;

function Emulsion({ t }: { t: Record<string, string> }) {
  const heads = Array.from({ length: 16 }, (_, i) => (i / 16) * Math.PI * 2);
  return (
    <>
      <rect width={W} height={H} fill="#e6f0f4" />
      <circle cx="300" cy="130" r="74" fill="#f6d67a" />
      <Txt x={300} y={134} weight={700}>{t.oil}</Txt>
      {heads.map(a => (
        <g key={a}>
          <line x1={300 + Math.cos(a) * 74} y1={130 + Math.sin(a) * 74} x2={300 + Math.cos(a) * 54} y2={130 + Math.sin(a) * 54} stroke="#8a380f" strokeWidth="3" />
          <circle cx={300 + Math.cos(a) * 80} cy={130 + Math.sin(a) * 80} r="7" fill="#2a5b46" />
        </g>
      ))}
      <Txt x={90} y={50} anchor="start" weight={700}>{t.water}</Txt>
      <circle cx="470" cy="60" r="7" fill="#2a5b46" /><Txt x={484} y={65} anchor="start">{t.head}</Txt>
      <line x1="463" y1="100" x2="477" y2="100" stroke="#8a380f" strokeWidth="3" /><Txt x={484} y={105} anchor="start">{t.tail}</Txt>
    </>
  );
}

function Network({ t }: { t: Record<string, string> }) {
  const paths = ["M20 60C140 10 220 150 340 90S520 40 600 110", "M20 170C120 240 240 90 360 180S520 230 600 160", "M90 20C60 120 200 160 170 250", "M300 15C260 110 380 150 330 250", "M480 15C440 120 560 150 510 250", "M20 115C180 60 300 200 600 70"];
  const water = [[80, 90], [230, 60], [420, 70], [120, 200], [290, 130], [460, 190], [560, 140], [240, 220], [380, 120]];
  return (
    <>
      <rect width={W} height={H} fill="#eff6f1" />
      {paths.map(d => <path key={d} d={d} fill="none" stroke="#2a5b46" strokeWidth="4" strokeLinecap="round" />)}
      {water.map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="6" fill="#5aa6c8" />)}
      <rect x="14" y="222" width="260" height="30" rx="8" fill="#fff" opacity="0.92" /><circle cx="30" cy="237" r="6" fill="#5aa6c8" /><Txt x={44} y={242} anchor="start">{t.water}</Txt><line x1="110" y1="237" x2="134" y2="237" stroke="#2a5b46" strokeWidth="4" /><Txt x={142} y={242} anchor="start">{t.chains}</Txt>
    </>
  );
}

function Leavening({ t }: { t: Record<string, string> }) {
  const bubbles = [[370, 120, 20], [430, 90, 28], [500, 140, 22], [445, 165, 16], [555, 95, 18], [400, 190, 13], [530, 195, 15]];
  return (
    <>
      <rect width={W} height={H} fill="#fff6ed" />
      <rect x="30" y="140" width="210" height="80" rx="24" fill="#e8c992" /><Txt x={135} y={185} weight={700}>{t.dough}</Txt>
      <Txt x={135} y={100}>{t.heatAcid}</Txt>
      <path d="M262 130h46m-12-10 12 10-12 10" fill="none" stroke="#ad460b" strokeWidth="3" />
      <rect x="330" y="50" width="260" height="175" rx="60" fill="#e8c992" />
      {bubbles.map(([x, y, r]) => <circle key={x} cx={x} cy={y} r={r} fill="#fff6ed" stroke="#ad460b" strokeWidth="1.5" />)}
      <Txt x={460} y={35} weight={700}>{t.gas}</Txt>
    </>
  );
}

function PhScale({ t }: { t: Record<string, string> }) {
  const step = 40;
  return (
    <>
      <rect width={W} height={H} fill="#faf8f3" />
      <defs><linearGradient id="ph" x1="0" x2="1"><stop offset="0" stopColor="#d15a0b" /><stop offset="0.5" stopColor="#d9e9df" /><stop offset="1" stopColor="#3a7359" /></linearGradient></defs>
      <rect x="30" y="100" width={step * 14} height="44" rx="8" fill="url(#ph)" />
      {Array.from({ length: 15 }, (_, i) => <g key={i}><line x1={30 + i * step} y1="144" x2={30 + i * step} y2="154" stroke="#163027" /><Txt x={30 + i * step} y={172}>{t[`n${i}`] ?? String(i)}</Txt></g>)}
      <Txt x={30} y={84} anchor="start" weight={700}>{t.acidic}</Txt>
      <Txt x={310} y={84} weight={700}>{t.neutral}</Txt>
      <Txt x={590} y={84} anchor="end" weight={700}>{t.alkaline}</Txt>
      <Txt x={310} y={220}>{t.phNote}</Txt>
    </>
  );
}

function AntioxidantDiagram({ t }: { t: Record<string, string> }) {
  const box = (x: number, label: string, fill: string) => <g><rect x={x} y="96" width="150" height="64" rx="14" fill={fill} /><Txt x={x + 75} y={133} weight={600}>{label}</Txt></g>;
  return (
    <>
      <rect width={W} height={H} fill="#faf8f3" />
      {box(14, t.fat, "#f6d67a")}
      <path d="M170 128h34m-10-8 10 8-10 8" fill="none" stroke="#ad460b" strokeWidth="3" />
      {box(210, t.radical, "#ffe9d2")}
      <path d="M366 128h34m-10-8 10 8-10 8" fill="none" stroke="#ad460b" strokeWidth="3" />
      {box(406, t.rancid, "#e7e1d6")}
      <path d="M285 200v-34m-8 10 8-10 8 10" fill="none" stroke="#2a5b46" strokeWidth="3" />
      <rect x="170" y="204" width="230" height="40" rx="12" fill="#2a5b46" /><text x="285" y="229" textAnchor="middle" fontSize="14" fontWeight="600" fill="#fff">{t.antioxidant}</text>
      <Txt x={14} y={60} anchor="start">{t.oxygen}</Txt>
    </>
  );
}

const DIAGRAMS: Partial<Record<CategoryId, { Draw: (p: { t: Record<string, string> }) => ReactNode; alt: string }>> = {
  emulsifiers: { Draw: Emulsion, alt: "altEmulsion" },
  stabilizers: { Draw: Network, alt: "altNetwork" },
  thickeners: { Draw: Network, alt: "altNetwork" },
  "leavening-agents": { Draw: Leavening, alt: "altLeavening" },
  "acidity-regulators": { Draw: PhScale, alt: "altPh" },
  antioxidants: { Draw: AntioxidantDiagram, alt: "altAntioxidant" },
};

export function ConceptDiagram({ category, lang }: { category: CategoryId; lang: Lang }) {
  const d = DIAGRAMS[category];
  if (!d) return null;
  const s = STRINGS[lang];
  const t = s.diagram as Record<string, string>;
  return (
    <figure className="min-w-0">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={t[d.alt]} className="h-auto w-full overflow-hidden rounded-xl"><d.Draw t={t} /></svg>
      <figcaption className="mt-2 text-xs text-stone-600 dark:text-stone-400"><span className="mr-1 rounded bg-ember-100 px-1 py-0.5 font-semibold text-ember-800 dark:bg-ember-800 dark:text-ember-50">{s.conceptual}</span>{t[d.alt]}</figcaption>
    </figure>
  );
}
