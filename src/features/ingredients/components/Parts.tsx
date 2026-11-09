/* Small shared pieces. Safe in server components and client components alike. */
import type { ReactNode } from "react";
import { ChevronRight, CircleAlert, FlaskConical, Gavel, Hourglass, Scale, ShieldCheck, Stamp, Info } from "lucide-react";
import type { Adi, CategoryId, ImageAsset, Lang, Localized, Origin, StatusId, StructureKind } from "../types";
import { STRINGS } from "../strings";
import { Link, digits } from "../lib/site";
import vocab from "../data/vocab.json";
import labels from "../data/labels.json";
import { Photo } from "./Figure";

export const VOCAB = vocab as unknown as Record<string, Record<string, Localized>>;

/** Neutral icon set: status labels deliberately avoid a green-is-good, red-is-bad scale. */
const STATUS_ICON = {
  "gras-conditions": ShieldCheck, "approved-specific": Stamp, "within-limits": Scale,
  "evidence-developing": Hourglass, "known-adverse": CircleAlert, "restricted-some": Gavel,
} as const;

export function StatusBadge({ id, lang, size = "sm" }: { id: StatusId; lang: Lang; size?: "sm" | "md" }) {
  const Icon = STATUS_ICON[id];
  const label = (labels as { id: string; name: Localized }[]).find(l => l.id === id)!;
  return (
    <span className={`inline-flex items-start gap-1.5 rounded-lg border border-forest-200 bg-forest-50 font-medium text-forest-800 dark:border-forest-700 dark:bg-forest-900 dark:text-forest-100 ${size === "sm" ? "px-2 py-1 text-[11px] leading-tight" : "px-3 py-2 text-sm"}`}>
      <Icon className={`${size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} mt-px shrink-0`} aria-hidden="true" />
      <span>{label.name[lang]}</span>
    </span>
  );
}

export function CodeChip({ children }: { children: ReactNode }) {
  return <span className="rounded-md bg-forest-800 px-1.5 py-0.5 font-mono text-[11px] font-semibold tracking-wide text-white dark:bg-forest-200 dark:text-forest-950">{children}</span>;
}

export function OriginTag({ origin, lang }: { origin: Origin; lang: Lang }) {
  return <span className="text-xs text-stone-600 dark:text-stone-400">{VOCAB.origins[origin][lang]}</span>;
}

export interface CardData {
  id: string;
  name: Localized;
  eNumber?: string;
  category: CategoryId;
  origin: Origin;
  summary: Localized;
  statusLabels: StatusId[];
  photo?: Pick<ImageAsset, "src" | "sm" | "w" | "h" | "alt" | "subject">;
  structure?: { svg: string; kind: StructureKind };
}

export function IngredientCard({ item, lang, showSummary = true }: { item: CardData; lang: Lang; showSummary?: boolean }) {
  return (
    <Link
      to={`/ingredients/${item.id}`}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-forest-400 hover:shadow-lg hover:shadow-forest-900/5 dark:border-forest-800 dark:bg-forest-950 dark:hover:border-forest-500"
    >
      <span className="relative block aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-forest-900">
        {item.photo ? <Photo image={item.photo} lang={lang} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full transition duration-300 group-hover:scale-[1.03]" /> : item.structure ? <img src={item.structure.svg} alt="" loading="lazy" className="h-full w-full bg-white object-contain p-3" /> : null}
        {item.eNumber && <span className="absolute right-2.5 bottom-2"><CodeChip>{item.eNumber}</CodeChip></span>}
      </span>
      <span className="flex flex-1 flex-col gap-2 p-4">
        <span className="font-display text-lg leading-snug font-semibold text-forest-900 dark:text-white">{item.name[lang]}</span>
        <OriginTag origin={item.origin} lang={lang} />
        {showSummary && <span className="line-clamp-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{item.summary[lang]}</span>}
        <span className="mt-auto pt-1"><StatusBadge id={item.statusLabels[0]} lang={lang} /></span>
      </span>
    </Link>
  );
}

export function Breadcrumbs({ lang, trail }: { lang: Lang; trail: [string, string?][] }) {
  return (
    <nav aria-label={STRINGS[lang].breadcrumb} className="flex min-w-0 flex-wrap items-center gap-1 text-sm text-stone-600 dark:text-stone-400">
      {trail.map(([label, to], i) => (
        <span key={label} className="flex min-w-0 items-center gap-1">
          {i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
          {to ? <Link to={to} className="hover:text-forest-700 hover:underline dark:hover:text-forest-200">{label}</Link> : <span aria-current="page" className="min-w-0 text-forest-900 dark:text-stone-200">{label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function Notice({ lang, checkedOn }: { lang: Lang; checkedOn?: string }) {
  const s = STRINGS[lang];
  return (
    <aside className="rounded-2xl border border-stone-200 bg-white p-4 text-sm leading-relaxed text-stone-700 dark:border-forest-800 dark:bg-forest-950 dark:text-stone-300">
      <p className="flex items-center gap-2 font-semibold text-forest-900 dark:text-white"><Info className="h-4 w-4 shrink-0" aria-hidden="true" />{s.noticeTitle}</p>
      <p className="mt-1.5">{s.notice}</p>
      {checkedOn && <p className="mt-1.5 text-xs text-stone-600 dark:text-stone-400">{s.lastChecked}: {digits(checkedOn, lang)}</p>}
    </aside>
  );
}

export function SectionTitle({ title, sub, action }: { title: string; sub?: string; action?: ReactNode }) {
  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
      <div>
        <h2 className="font-display text-2xl font-semibold text-forest-900 sm:text-3xl dark:text-white">{title}</h2>
        {sub && <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{sub}</p>}
      </div>
      {action}
    </div>
  );
}

export function PageIntro({ eyebrow, title, sub, children }: { eyebrow?: ReactNode; title: string; sub: string; children?: ReactNode }) {
  return (
    <header className="mx-auto max-w-6xl px-4 pt-8 pb-6 sm:pt-12">
      {eyebrow && <div className="mb-3">{eyebrow}</div>}
      <h1 className="font-display text-3xl font-semibold text-balance text-forest-900 sm:text-5xl dark:text-white">{title}</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-700 sm:text-lg dark:text-stone-300">{sub}</p>
      {children}
    </header>
  );
}

export function formatAdi(adi: Adi, lang: Lang): string {
  const s = STRINGS[lang];
  if (adi.type === "numeric") {
    const low = adi.low ?? 0;
    return `${digits(low, lang)}–${digits(adi.value, lang)} ${s.adiUnit}`;
  }
  return adi.type === "not-specified" ? s.adiNotSpecified : adi.type === "withdrawn" ? s.adiWithdrawn : s.adiNone;
}

export const EvidenceIcon = FlaskConical;

export function EvidenceTags({ evidence, strength, lang }: { evidence: string; strength: string; lang: Lang }) {
  return (
    <span className="flex flex-wrap gap-1.5">
      <span className="rounded-md bg-stone-100 px-1.5 py-0.5 text-[11px] font-semibold text-stone-800 dark:bg-forest-800 dark:text-stone-100">{VOCAB.evidence[evidence][lang]}</span>
      <span className="rounded-md border border-stone-300 px-1.5 py-0.5 text-[11px] font-semibold text-stone-700 dark:border-forest-600 dark:text-stone-200">{VOCAB.strength[strength][lang]}</span>
    </span>
  );
}
