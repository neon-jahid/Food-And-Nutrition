"use client";

/* Ball-and-stick view of PubChem's 3D conformer. Drag or use the arrow keys to turn it. No 3D library needed. */
import { useMemo, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import type { Lang, Model3d } from "../types";
import { STRINGS } from "../strings";

const CPK: Record<string, string> = { H: "#e8e8e4", C: "#3a3f3c", N: "#3058d8", O: "#d8343c", S: "#e0b020", P: "#ee8a1e", Cl: "#2fae4a", F: "#6fcf6f", Br: "#9a3a1c", I: "#7b2fb0", Na: "#8a5fd6", K: "#8a5fd6", Ca: "#49a37c" };
const RADIUS: Record<string, number> = { H: 0.26, C: 0.42, N: 0.42, O: 0.42, S: 0.56, P: 0.56, Cl: 0.54, F: 0.38, Br: 0.6, I: 0.68 };

type Rot = { yaw: number; pitch: number };
const START: Rot = { yaw: 0.5, pitch: -0.35 };

export default function MoleculeViewer({ model, lang, label }: { model: Model3d; lang: Lang; label: string }) {
  const s = STRINGS[lang];
  const [rot, setRot] = useState<Rot>(START);
  const drag = useRef<{ x: number; y: number; start: Rot } | null>(null);

  const centred = useMemo(() => {
    const n = model.atoms.length;
    const c = model.atoms.reduce((p, a) => [p[0] + a[1] / n, p[1] + a[2] / n, p[2] + a[3] / n], [0, 0, 0]);
    return model.atoms.map(a => ({ el: a[0], x: a[1] - c[0], y: a[2] - c[1], z: a[3] - c[2] }));
  }, [model]);
  const span = useMemo(() => Math.max(3, ...centred.map(a => Math.hypot(a.x, a.y, a.z))), [centred]);
  const elements = useMemo(() => [...new Set(model.atoms.map(a => a[0]))].sort(), [model]);

  const scene = useMemo(() => {
    const [cy, sy, cp, sp] = [Math.cos(rot.yaw), Math.sin(rot.yaw), Math.cos(rot.pitch), Math.sin(rot.pitch)];
    const pts = centred.map(a => {
      const x = a.x * cy + a.z * sy;
      const z0 = -a.x * sy + a.z * cy;
      const y = a.y * cp - z0 * sp;
      const z = a.y * sp + z0 * cp;
      return { el: a.el, x, y: -y, z };
    });
    type Item = { z: number; key: string; node: "atom" | "bond"; i: number; j?: number; order?: number };
    const items: Item[] = [
      ...pts.map((p, i) => ({ z: p.z, key: `a${i}`, node: "atom" as const, i })),
      ...model.bonds.map(([a, b, order], i) => ({ z: (pts[a].z + pts[b].z) / 2 - 0.05, key: `b${i}`, node: "bond" as const, i: a, j: b, order })),
    ];
    return { pts, items: items.sort((a, b) => a.z - b.z) };
  }, [centred, rot, model]);

  const vb = span * 2 + 2;
  const turn = (yaw: number, pitch: number) => setRot(r => ({ yaw: r.yaw + yaw, pitch: Math.max(-1.5, Math.min(1.5, r.pitch + pitch)) }));

  return (
    <div>
      <svg
        viewBox={`${-vb / 2} ${-vb / 2} ${vb} ${vb}`} role="application" aria-label={label} tabIndex={0}
        className="aspect-square w-full touch-none rounded-2xl bg-white outline-none select-none focus-visible:ring-4 focus-visible:ring-forest-600/30 cursor-grab active:cursor-grabbing"
        onPointerDown={e => { e.currentTarget.setPointerCapture(e.pointerId); drag.current = { x: e.clientX, y: e.clientY, start: rot }; }}
        onPointerMove={e => {
          const d = drag.current;
          if (d) setRot({ yaw: d.start.yaw + (e.clientX - d.x) * 0.012, pitch: Math.max(-1.5, Math.min(1.5, d.start.pitch + (e.clientY - d.y) * 0.012)) });
        }}
        onPointerUp={() => { drag.current = null; }}
        onKeyDown={e => {
          const k: Record<string, [number, number]> = { ArrowLeft: [-0.2, 0], ArrowRight: [0.2, 0], ArrowUp: [0, -0.2], ArrowDown: [0, 0.2] };
          if (k[e.key]) { e.preventDefault(); turn(...k[e.key]); }
        }}
      >
        {scene.items.map(item => {
          if (item.node === "bond") {
            const a = scene.pts[item.i], b = scene.pts[item.j!];
            const depth = 0.55 + 0.45 * ((item.z + span) / (2 * span));
            if (item.order === 1) return <line key={item.key} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#7b827d" strokeWidth={0.13} strokeLinecap="round" opacity={depth} />;
            // double and triple bonds are drawn as parallel sticks
            const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
            const nx = -(b.y - a.y) / len, ny = (b.x - a.x) / len;
            const offs = item.order === 2 ? [-0.11, 0.11] : [-0.16, 0, 0.16];
            return <g key={item.key} opacity={depth}>{offs.map(o => <line key={o} x1={a.x + nx * o} y1={a.y + ny * o} x2={b.x + nx * o} y2={b.y + ny * o} stroke="#7b827d" strokeWidth={0.08} strokeLinecap="round" />)}</g>;
          }
          const p = scene.pts[item.i];
          const r = (RADIUS[p.el] ?? 0.55) * (0.85 + 0.15 * ((p.z + span) / (2 * span)));
          return (
            <g key={item.key}>
              <circle cx={p.x} cy={p.y} r={r} fill={CPK[p.el] ?? "#a37c5b"} stroke="#ffffff" strokeWidth={0.04} />
              <circle cx={p.x - r * 0.3} cy={p.y - r * 0.35} r={r * 0.25} fill="#ffffff" opacity={p.el === "H" ? 0.8 : 0.35} />
            </g>
          );
        })}
      </svg>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
        <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-stone-700 dark:text-stone-300">
          {elements.map(el => <li key={el} className="flex items-center gap-1"><span className="inline-block h-3 w-3 rounded-full border border-stone-300" style={{ background: CPK[el] ?? "#a37c5b" }} aria-hidden="true" />{el}</li>)}
        </ul>
        <button type="button" onClick={() => setRot(START)} className="inline-flex items-center gap-1 text-xs font-semibold text-forest-700 hover:underline dark:text-forest-200"><RotateCcw className="h-3 w-3" aria-hidden="true" />{s.resetView}</button>
      </div>
      <p className="mt-1 text-xs text-stone-600 dark:text-stone-400">{s.dragHint}</p>
    </div>
  );
}
