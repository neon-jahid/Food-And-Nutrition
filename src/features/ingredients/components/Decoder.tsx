"use client";

/* Food Label Decoder. Everything runs in the browser; the pasted text is never sent anywhere. */
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CircleHelp, Eraser, Hash, Info, ScanText, Tag, TriangleAlert, Wheat } from "lucide-react";
import { Decoder, type DecodeResult, type Row, type RowKind } from "../lib/decoder";
import { ENTRIES, VOCAB, loadBasics, loadDetails } from "../lib/repository.client";
import { Link, useLang } from "../lib/site";
import { STRINGS } from "../strings";
import type { DetailEntry } from "../types";
import { CodeChip, EvidenceTags } from "./Parts";

const KIND_ICON: Record<RowKind, typeof Tag> = { additive: ScanText, basic: Wheat, "code-only": Hash, "class-only": Tag, unknown: CircleHelp };
const KIND_STYLE: Record<RowKind, string> = {
  additive: "bg-forest-800 text-white dark:bg-forest-200 dark:text-forest-950",
  basic: "bg-stone-100 text-stone-800 dark:bg-forest-800 dark:text-stone-100",
  "code-only": "bg-stone-100 text-stone-800 dark:bg-forest-800 dark:text-stone-100",
  "class-only": "bg-stone-100 text-stone-800 dark:bg-forest-800 dark:text-stone-100",
  unknown: "bg-ember-100 text-ember-800 dark:bg-ember-800 dark:text-ember-50",
};

function RowCard({ row, details, nested = false }: { row: Row; details: Map<string, DetailEntry> | null; nested?: boolean }) {
  const { lang, num } = useLang();
  const s = STRINGS[lang];
  const Icon = KIND_ICON[row.kind];
  const detail = row.entry ? details?.get(row.entry.id) : undefined;
  const title = row.entry ? row.entry.name[lang] : row.basic ? row.basic.name[lang] : row.kind === "class-only" && row.classId ? s.classes[row.classId] : row.raw;
  const concerns = detail?.risks.filter(r => r.kind !== "uncertainty" || r.strength !== "established") ?? [];

  return (
    <motion.li layout="position" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={`min-w-0 rounded-2xl border border-stone-200 bg-white dark:border-forest-800 dark:bg-forest-950 ${nested ? "p-3" : "p-4"}`}>
      <div className="flex flex-wrap items-center gap-2">
        <span className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-semibold ${KIND_STYLE[row.kind]}`}><Icon className="h-3 w-3" aria-hidden="true" />{s.kind[row.kind]}</span>
        {row.classId && row.kind !== "class-only" && <span className="text-xs text-stone-600 dark:text-stone-400">{s.classes[row.classId]}</span>}
        {row.entry?.eNumber && <CodeChip>{row.entry.eNumber}</CodeChip>}
        {row.kind === "code-only" && row.code && <CodeChip>{num(row.code)}</CodeChip>}
      </div>
      <p className="mt-2 font-semibold break-words text-forest-950 dark:text-white">{title}</p>
      {row.entry && row.raw.trim().toLowerCase() !== title.toLowerCase() && <p className="text-xs break-words text-stone-600 dark:text-stone-400">{row.raw}</p>}

      {row.basic && <p className="mt-1 text-sm text-stone-700 dark:text-stone-300"><span className="font-medium">{s.purpose}:</span> {row.basic.purpose[lang]}</p>}
      {row.kind === "code-only" && <p className="mt-1 text-sm text-stone-700 dark:text-stone-300">{s.codeNoProfile}</p>}
      {row.kind === "unknown" && (
        <p className="mt-1 text-sm text-stone-700 dark:text-stone-300">
          {s.unknownHelp}
          {row.suggestion && <> {s.didYouMean} <Link to={`/ingredients/${row.suggestion.id}`} className="font-semibold text-forest-700 underline dark:text-forest-200">{row.suggestion.name[lang]}</Link>?</>}
        </p>
      )}

      {row.entry && (
        <div className="mt-2 space-y-2 text-sm text-stone-700 dark:text-stone-300">
          {detail && <p><span className="font-medium">{s.purpose}:</span> {detail.whyUsed[lang]}</p>}
          {detail && (
            <div>
              <p className="font-medium">{s.concerns}:</p>
              {concerns.length ? (
                <ul className="mt-1 space-y-2">
                  {concerns.map((r, i) => <li key={i} className="space-y-1"><EvidenceTags evidence={r.evidence} strength={r.strength} lang={lang} /><p>{r.text[lang]}</p></li>)}
                </ul>
              ) : <p>{s.noConcerns}</p>}
              <p className="mt-2 border-l-2 border-ember-400 pl-3 text-stone-700 dark:text-stone-300">{detail.riskContext[lang]}</p>
            </div>
          )}
          <Link to={`/ingredients/${row.entry.id}`} className="inline-flex items-center gap-1 font-semibold text-forest-700 hover:underline dark:text-forest-200">{s.viewProfile}<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
        </div>
      )}

      {row.children.length > 0 && <ul className="mt-3 space-y-2">{row.children.map((c, i) => <RowCard key={i} row={c} details={details} nested />)}</ul>}
    </motion.li>
  );
}

export default function DecoderTool() {
  const { lang, num } = useLang();
  const s = STRINGS[lang];
  const [text, setText] = useState("");
  const [result, setResult] = useState<DecodeResult | null>(null);
  const [decoder, setDecoder] = useState<Decoder | null>(null);
  const [details, setDetails] = useState<Map<string, DetailEntry> | null>(null);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let alive = true;
    setFailed(false);
    Promise.all([loadBasics(), loadDetails()]).then(
      ([basics, d]) => { if (alive) { setDecoder(new Decoder(ENTRIES, basics)); setDetails(d); } },
      () => { if (alive) setFailed(true); },
    );
    return () => { alive = false; };
  }, [attempt]);

  const run = (value: string) => {
    if (!decoder) return;
    setResult(decoder.decode(value));
    requestAnimationFrame(() => resultsRef.current?.focus({ preventScroll: true }));
  };

  const stats = useMemo(() => result && ([[s.additivesFound, result.counts.additive], [s.basicFound, result.counts.basic], [s.codeOnly, result.counts["code-only"]], [s.unknownFound, result.counts.unknown]] as const), [result, s]);

  return (
    <div className="mx-auto max-w-6xl px-4">
      <form onSubmit={e => { e.preventDefault(); run(text); }} className="rounded-3xl border border-stone-200 bg-white p-4 sm:p-6 dark:border-forest-800 dark:bg-forest-950">
        <label htmlFor="label-text" className="font-semibold text-forest-900 dark:text-white">{s.decoderField}</label>
        <textarea
          id="label-text" rows={5} value={text} onChange={e => setText(e.target.value)} placeholder={s.decoderPlaceholder}
          className="mt-2 w-full resize-y rounded-2xl border border-stone-300 bg-paper p-4 text-base leading-relaxed text-forest-950 outline-none placeholder:text-stone-500 focus:border-forest-600 focus:ring-4 focus:ring-forest-600/15 dark:border-forest-700 dark:bg-forest-900 dark:text-white dark:placeholder:text-stone-400"
        />
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <motion.button whileTap={{ scale: 0.97 }} type="submit" disabled={!decoder || !text.trim()} className="inline-flex items-center gap-2 rounded-xl bg-forest-800 px-5 py-2.5 font-semibold text-white transition hover:bg-forest-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-forest-200 dark:text-forest-950 dark:hover:bg-forest-100">
            <ScanText className="h-4 w-4" aria-hidden="true" />{s.decode}
          </motion.button>
          {(text || result) && <button type="button" onClick={() => { setText(""); setResult(null); }} className="inline-flex items-center gap-1 text-sm font-semibold text-forest-700 hover:underline dark:text-forest-200"><Eraser className="h-3.5 w-3.5" aria-hidden="true" />{s.clear}</button>}
        </div>
        <div className="mt-4">
          <p className="text-sm text-stone-600 dark:text-stone-400">{s.samplesLabel}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {s.samples.map(([name, sample]) => (
              <button key={name} type="button" onClick={() => { setText(sample); run(sample); }} disabled={!decoder} className="rounded-full border border-stone-300 px-3 py-1.5 text-sm text-forest-800 transition hover:border-forest-500 hover:bg-forest-50 disabled:opacity-60 dark:border-forest-700 dark:text-stone-200 dark:hover:bg-forest-900">{name}</button>
            ))}
          </div>
        </div>
        {failed && <p role="alert" className="mt-4 text-sm text-ember-800 dark:text-ember-300">{s.loadFailed} <button type="button" className="font-semibold underline" onClick={() => setAttempt(a => a + 1)}>{s.retry}</button></p>}
      </form>

      <p className="mt-4 flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300"><Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /><span>{s.noQuantity} {s.orderNote}</span></p>

      <div ref={resultsRef} tabIndex={-1} className="outline-none">
        <AnimatePresence mode="wait">
          {result && (
            <motion.section key="r" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-label={s.breakdown} className="mt-8">
              {result.flat.length === 0 ? (
                <p className="rounded-2xl border border-dashed border-stone-300 p-8 text-center font-medium text-forest-900 dark:border-forest-700 dark:text-white">{s.nothingToDecode}</p>
              ) : (
                <>
                  <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {stats?.map(([label, n]) => (
                      <div key={label} className="rounded-2xl border border-stone-200 bg-white p-4 dark:border-forest-800 dark:bg-forest-950">
                        <dt className="text-xs text-stone-600 dark:text-stone-400">{label}</dt>
                        <dd className="font-display text-3xl font-semibold text-forest-900 dark:text-white">{num(n)}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
                    <div className="min-w-0">
                      <h2 className="font-display text-2xl font-semibold text-forest-900 dark:text-white">{s.breakdown}</h2>
                      <ul className="mt-3 space-y-3">{result.rows.map((r, i) => <RowCard key={i} row={r} details={details} />)}</ul>
                    </div>
                    <aside className="min-w-0 space-y-4 lg:sticky lg:top-24 lg:self-start">
                      <div className="rounded-2xl border border-ember-300 bg-ember-50 p-4 dark:border-ember-800 dark:bg-forest-950">
                        <h3 className="flex items-center gap-2 font-semibold text-forest-950 dark:text-white"><TriangleAlert className="h-4 w-4 text-ember-700 dark:text-ember-400" aria-hidden="true" />{s.allergensTitle}</h3>
                        {result.allergens.length ? (
                          <ul className="mt-2 space-y-1.5 text-sm text-forest-950 dark:text-stone-200">
                            {result.allergens.map(a => <li key={a.id + a.source}><span className="font-semibold">{VOCAB.allergens[a.id]?.[lang] ?? a.id}</span> <span className="text-xs text-stone-700 dark:text-stone-400">({a.source === "ingredient" ? s.fromIngredient : a.source === "contains" ? s.fromContains : s.fromMayContain})</span></li>)}
                          </ul>
                        ) : <p className="mt-2 text-sm text-stone-800 dark:text-stone-300">{s.allergensNone}</p>}
                      </div>
                      <div className="rounded-2xl border border-stone-200 bg-white p-4 dark:border-forest-800 dark:bg-forest-950">
                        <h3 className="font-semibold text-forest-950 dark:text-white">{s.warningsTitle}</h3>
                        {result.flags.length ? (
                          <ul className="mt-2 space-y-2 text-sm text-stone-700 dark:text-stone-300">
                            {result.flags.map(f => <li key={f.id}><p>{VOCAB.flags[f.id][lang]}</p><p className="text-xs text-stone-600 dark:text-stone-400">{f.entries.map(e => e.name[lang]).join(", ")}</p></li>)}
                          </ul>
                        ) : <p className="mt-2 text-sm text-stone-700 dark:text-stone-300">{s.warningsNone}</p>}
                      </div>
                    </aside>
                  </div>
                </>
              )}
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
