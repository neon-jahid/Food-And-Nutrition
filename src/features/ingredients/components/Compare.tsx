"use client";

/* Side-by-side comparison. The URL holds the selection (?items=a,b), so a comparison can be shared. */
import { useEffect, useMemo, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { ENTRIES, VOCAB, loadDetails } from "../lib/repository.client";
import { Link, useLang, useSearchParams } from "../lib/site";
import { STRINGS } from "../strings";
import type { DetailEntry, SearchEntry } from "../types";
import type { AdiPoint } from "./AdiChart";
import { SearchBar } from "./Interactive";
import { CodeChip, EvidenceTags, StatusBadge, formatAdi } from "./Parts";

const MAX = 4;
const AdiChart = dynamic(() => import("./AdiChart"), { ssr: false, loading: () => <div className="h-full animate-pulse rounded-xl bg-stone-100 dark:bg-forest-900" /> });

function Row({ title, items, render }: { title: string; items: SearchEntry[]; render: (e: SearchEntry) => ReactNode }) {
  return (
    <tr className="border-t border-stone-200 align-top dark:border-forest-800">
      <th scope="row" className="sticky left-0 z-10 w-28 bg-paper py-4 pr-3 text-left text-sm font-semibold text-forest-900 sm:w-40 dark:bg-paper-dark dark:text-white">{title}</th>
      {items.map(e => <td key={e.id} className="min-w-56 px-3 py-4 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{render(e)}</td>)}
    </tr>
  );
}

export default function CompareTool() {
  const { lang } = useLang();
  const s = STRINGS[lang];
  const [params, setParams] = useSearchParams();
  const [details, setDetails] = useState<Map<string, DetailEntry> | null>(null);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const raw = params.get("items") ?? "";
  const ids = useMemo(() => [...new Set(raw.split(",").filter(id => ENTRIES.some(e => e.id === id)))].slice(0, MAX), [raw]);
  const items = useMemo(() => ids.map(id => ENTRIES.find(e => e.id === id)!), [ids]);

  useEffect(() => {
    if (ids.length === 0) return;
    let alive = true;
    setFailed(false);
    loadDetails().then(d => { if (alive) setDetails(d); }, () => { if (alive) setFailed(true); });
    return () => { alive = false; };
  }, [ids.length, attempt]);

  const setIds = (next: string[]) => setParams(next.length ? { items: next.join(",") } : {}, { replace: true });
  const detail = (e: SearchEntry) => details?.get(e.id);

  const chart = useMemo(() => {
    const points: AdiPoint[] = [];
    for (const e of items) for (const r of detail(e)?.regulatory ?? []) {
      if (r.adi?.type === "numeric") points.push({ label: `${e.name[lang]} (${r.authority})`, value: r.adi.value });
    }
    return points;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, details, lang]);

  const presets = s.presetList.filter(([, list]) => list.every(id => ENTRIES.some(e => e.id === id)));

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="rounded-3xl border border-stone-200 bg-white p-4 sm:p-6 dark:border-forest-800 dark:bg-forest-950">
        {ids.length < MAX ? <SearchBar label={s.addIngredient} exclude={ids} onPick={e => setIds([...ids, e.id])} /> : <p className="text-sm text-stone-700 dark:text-stone-300">{s.maxReached}</p>}
        <ul className="mt-4 flex flex-wrap gap-2">
          <AnimatePresence initial={false}>
            {items.map(e => (
              <motion.li key={e.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="flex items-center gap-2 rounded-full bg-forest-800 py-1.5 pr-1.5 pl-3 text-sm font-medium text-white dark:bg-forest-200 dark:text-forest-950">
                {e.name[lang]}
                <button type="button" aria-label={`${s.remove}: ${e.name[lang]}`} onClick={() => setIds(ids.filter(x => x !== e.id))} className="rounded-full p-0.5 hover:bg-white/20 dark:hover:bg-black/10"><X className="h-3.5 w-3.5" aria-hidden="true" /></button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        <div className="mt-4">
          <p className="text-sm text-stone-600 dark:text-stone-400">{s.presets}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {presets.map(([name, list]) => (
              <button key={name} type="button" onClick={() => setIds(list)} className="rounded-full border border-stone-300 px-3 py-1.5 text-sm text-forest-800 transition hover:border-forest-500 hover:bg-forest-50 dark:border-forest-700 dark:text-stone-200 dark:hover:bg-forest-900">{name}</button>
            ))}
          </div>
        </div>
      </div>

      {ids.length < 2 && <p className="mt-8 rounded-2xl border border-dashed border-stone-300 p-8 text-center text-stone-700 dark:border-forest-700 dark:text-stone-300">{ids.length === 1 ? s.needMore : s.compareEmpty}</p>}
      {failed && <p role="alert" className="mt-6 text-sm text-ember-800 dark:text-ember-300">{s.loadFailed} <button type="button" className="font-semibold underline" onClick={() => setAttempt(a => a + 1)}>{s.retry}</button></p>}

      {ids.length >= 2 && details && (
        <div className="mt-8">
          <div className="overflow-x-auto" role="region" aria-label={s.compareTitle} tabIndex={0}>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <td className="sticky left-0 z-10 bg-paper dark:bg-paper-dark" />
                  {items.map(e => (
                    <th key={e.id} scope="col" className="min-w-56 px-3 pb-4 text-left align-bottom">
                      <Link to={`/ingredients/${e.id}`} className="font-display text-xl font-semibold text-forest-900 hover:underline dark:text-white">{e.name[lang]}</Link>
                      {e.eNumber && <span className="mt-1 block"><CodeChip>{e.eNumber}</CodeChip></span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <Row title={s.rowStructure} items={items} render={e => e.structure ? <img src={e.structure.svg} alt={`${s.structureAlt}: ${e.name[lang]}`} loading="lazy" className="aspect-[4/3] w-full rounded-xl bg-white object-contain" /> : s.structureNoneShort} />
                <Row title={s.rows.purpose} items={items} render={e => detail(e)?.whyUsed[lang]} />
                <Row title={s.rows.origin} items={items} render={e => VOCAB.origins[e.origin][lang]} />
                <Row title={s.rows.applications} items={items} render={e => e.applications.map(a => VOCAB.applications[a][lang]).join(", ")} />
                <Row title={s.rows.properties} items={items} render={e => <ul className="list-disc space-y-1 pl-4">{detail(e)?.properties.map(p => <li key={p.en}>{p[lang]}</li>)}</ul>} />
                <Row title={s.rows.safety} items={items} render={e => <div className="space-y-2"><div className="flex flex-wrap gap-1.5">{e.statusLabels.map(l => <StatusBadge key={l} id={l} lang={lang} />)}</div><p>{detail(e)?.riskContext[lang]}</p></div>} />
                <Row title={s.rows.adi} items={items} render={e => {
                  const list = detail(e)?.regulatory.filter(r => r.adi) ?? [];
                  return list.length ? <ul className="space-y-1">{list.map((r, i) => <li key={i}><span className="font-medium">{r.authority}</span> ({r.date}): {formatAdi(r.adi!, lang)}</li>)}</ul> : s.notApplicable;
                }} />
                <Row title={s.rows.regulatory} items={items} render={e => <ul className="space-y-2">{detail(e)?.regulatory.map((r, i) => <li key={i}><span className="font-medium">{r.authority} · {r.jurisdiction[lang]} · {r.date}</span><br />{r.status[lang]}</li>)}</ul>} />
                <Row title={s.rows.evidence} items={items} render={e => {
                  const risks = detail(e)?.risks ?? [];
                  return risks.length ? <ul className="space-y-3">{risks.map((r, i) => <li key={i} className="space-y-1"><EvidenceTags evidence={r.evidence} strength={r.strength} lang={lang} /><p>{r.text[lang]}</p></li>)}</ul> : s.noRisks;
                }} />
              </tbody>
            </table>
          </div>

          <section className="mt-8 rounded-3xl border border-stone-200 bg-white p-4 sm:p-6 dark:border-forest-800 dark:bg-forest-950">
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-white">{s.chartTitle}</h2>
            <p className="mt-1 text-sm text-stone-700 dark:text-stone-300">{s.chartNote} {chart.length > 0 && <span className="text-stone-600 dark:text-stone-400">({s.logScale}; {s.adiUnit})</span>}</p>
            {chart.length ? <div className="mt-4" style={{ height: Math.max(180, chart.length * 44 + 50) }}><AdiChart data={chart} lang={lang} unit={s.adiUnit} /></div> : <p className="mt-3 text-sm text-stone-700 dark:text-stone-300">{s.noNumericAdi}</p>}
          </section>
        </div>
      )}
    </div>
  );
}
