/* Pages of the section. Server components: content is in the HTML, and only the tools add JavaScript. */
import { ArrowRight, ArrowUpRight, BadgeCheck, CircleDashed, GitCompareArrows, ScanText, Scale, Shapes } from "lucide-react";
import SiteImage from "../../components/SiteImage.jsx";
import Browser from "./components/Browser";
import CompareTool from "./components/Compare";
import DecoderTool from "./components/Decoder";
import { FeaturedOfWeek, RecentlyExplored, RecordRecent, SearchBar } from "./components/Interactive";
import { Photo as RealPhoto } from "./components/Figure";
import { ConceptDiagram, Credit, Formula, ScientificIdentity } from "./components/Science";
import { Breadcrumbs, CodeChip, EvidenceTags, IngredientCard, Notice, PageIntro, SectionTitle, StatusBadge, VOCAB, formatAdi } from "./components/Parts";
import { allArticles, allCategories, allIngredients, allStatusLabels, applicationImage, categoryCount, categoryImage, getCategory, getImage, getStructure, ingredientPhoto, ingredientsIn, lastChecked, polymerImage } from "./lib/repository.server";
import { Link, digits } from "./lib/site";
import { STRINGS } from "./strings";
import type { Article, Category, Ingredient, Lang, Reference, Verification } from "./types";

const Photo = SiteImage as unknown as (p: { id: string; alt: string; className?: string; sizes?: string; eager?: boolean }) => React.JSX.Element;

/** Curated for the home page. Unknown ids are skipped, so editing the dataset cannot break it. */
const POPULAR = ["monosodium-glutamate", "aspartame", "sodium-benzoate", "tartrazine", "sucralose", "citric-acid", "carrageenan", "titanium-dioxide"];
const FEATURED = ["citric-acid", "lecithins", "steviol-glycosides", "potassium-sorbate", "xanthan-gum", "ascorbic-acid", "curcumin", "sodium-nitrite"];

const withVisuals = (x: Ingredient) => {
  const st = getStructure(x.id);
  const p = ingredientPhoto(x);
  return { ...x, photo: p && { src: p.src, sm: p.sm, w: p.w, h: p.h, alt: p.alt, subject: p.subject }, structure: st && st.kind !== "none" ? { svg: st.svg, kind: st.kind } : undefined };
};

const HERO_IMAGE = "app:salt-seasonings";
const SCIENCE_IMAGE = "cat:modified-starches";

const count = (n: number, lang: Lang) => `${digits(n, lang)}${lang === "en" ? " " : ""}${n === 1 ? STRINGS[lang].ingredient : STRINGS[lang].ingredients}`;

function ToolCard({ to, icon: Icon, title, text, lang }: { to: string; icon: typeof Scale; title: string; text: string; lang: Lang }) {
  return (
    <Link to={to} className="group flex min-w-0 flex-col rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-forest-400 dark:border-forest-800 dark:bg-forest-950 dark:hover:border-forest-500">
      <Icon className="h-6 w-6 text-ember-600 dark:text-ember-400" aria-hidden="true" />
      <span className="mt-3 font-display text-xl font-semibold text-forest-900 dark:text-white">{title}</span>
      <span className="mt-1 flex-1 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{text}</span>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-forest-700 dark:text-forest-200">{STRINGS[lang].openTool}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></span>
    </Link>
  );
}

function ArticleCard({ a, lang }: { a: Article; lang: Lang }) {
  return (
    <Link to={`/ingredients/learn/${a.slug}`} className="group flex h-full min-w-0 flex-col rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-forest-400 dark:border-forest-800 dark:bg-forest-950 dark:hover:border-forest-500">
      <span className="font-display text-lg leading-snug font-semibold text-forest-900 group-hover:underline dark:text-white">{a.title[lang]}</span>
      <span className="mt-2 flex-1 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{a.dek[lang]}</span>
      <span className="mt-3 text-xs text-stone-600 dark:text-stone-400">{digits(a.minutes, lang)} {STRINGS[lang].minRead}</span>
    </Link>
  );
}

function ReferenceList({ refs, lang }: { refs: Reference[]; lang: Lang }) {
  return (
    <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-stone-700 marker:text-stone-500 dark:text-stone-300">
      {refs.map(r => (
        <li key={r.id} id={`ref-${r.id}`} className="scroll-mt-28 break-words">
          <span className="font-medium text-forest-900 dark:text-white">{r.org}</span> ({digits(r.year, lang)}). {r.title}.{" "}
          <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 font-semibold text-forest-700 underline dark:text-forest-200">{STRINGS[lang].openSource}<ArrowUpRight className="h-3 w-3" aria-hidden="true" /></a>
        </li>
      ))}
    </ol>
  );
}

function VerificationNote({ v, lang }: { v: Verification; lang: Lang }) {
  const s = STRINGS[lang];
  const text = v.status === "source-checked" ? s.verified : v.status === "partial" ? s.partial : s.illustrative;
  const Icon = v.status === "source-checked" ? BadgeCheck : CircleDashed;
  const tone = v.status === "source-checked" ? "border-stone-200 bg-white text-stone-700 dark:border-forest-800 dark:bg-forest-950 dark:text-stone-300" : "border-ember-300 bg-ember-50 text-ember-800 dark:border-ember-800 dark:bg-forest-950 dark:text-ember-300";
  return (
    <p className={`flex items-start gap-2 rounded-xl border p-3 text-sm ${tone}`}>
      <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{text} · {s.lastChecked}: {digits(v.checkedOn, lang)}{lang === "en" && v.notes ? <span className="mt-1 block text-xs">{v.notes}</span> : null}</span>
    </p>
  );
}

/* ---------------------------- Overview ---------------------------- */

export function HubView({ lang }: { lang: Lang }) {
  const s = STRINGS[lang];
  const all = allIngredients();
  const popular = POPULAR.map(id => all.find(x => x.id === id)).filter((x): x is Ingredient => Boolean(x));
  const featured = FEATURED.filter(id => all.some(x => x.id === id));
  const heroImage = getImage(HERO_IMAGE);
  const scienceImage = getImage(SCIENCE_IMAGE);
  const hints: [string, string][] = [["E211", "E211"], ["MSG", "monosodium glutamate"], [lang === "bn" ? "অ্যাসপার্টেম" : "Aspartame", lang === "bn" ? "অ্যাসপার্টেম" : "aspartame"]];
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:pt-16 lg:pb-20">
          <div className="relative z-20 min-w-0">
            <h1 className="font-display text-4xl leading-[1.1] font-semibold text-balance text-forest-900 sm:text-6xl dark:text-white">{s.section}</h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-700 sm:text-xl dark:text-stone-300">{s.subtitle}</p>
            <div className="mt-7 max-w-xl"><SearchBar large /></div>
            <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
              {s.searchHints}:
              {hints.map(([label, q]) => <Link key={label} to={`/ingredients/explore?q=${encodeURIComponent(q)}`} className="rounded-full border border-stone-300 px-2.5 py-0.5 text-forest-800 transition hover:border-forest-500 dark:border-forest-700 dark:text-stone-200">{label}</Link>)}
            </p>
          </div>
          <div className="relative hidden min-w-0 lg:block">
            <div className="overflow-hidden rounded-t-[12rem] rounded-b-3xl shadow-2xl shadow-forest-900/20">
              {heroImage ? <RealPhoto image={heroImage} lang={lang} eager sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5] w-full" /> : <Photo id="hero-market" alt="" eager sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5] w-full" />}
            </div>
            <div className="absolute -bottom-4 -left-6 rounded-2xl bg-white p-4 shadow-xl shadow-forest-900/15 dark:bg-forest-900">
              <p className="font-display text-3xl font-semibold text-forest-900 dark:text-white">{digits(all.length, lang)}</p>
              <p className="text-xs text-stone-600 dark:text-stone-300">{lang === "en" ? "ingredients with linked sources" : "উপাদান, সূত্রসহ"}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle title={s.popular} sub={s.popularSub} />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{popular.map(x => <li key={x.id} className="min-w-0"><IngredientCard item={withVisuals(x)} lang={lang} /></li>)}</ul>
      </section>

      <RecentlyExplored />

      <section className="mx-auto max-w-6xl px-4 pt-14">
        <SectionTitle title={s.categories} sub={s.categoriesSub} />
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {allCategories().map(c => (
            <li key={c.id} className="min-w-0">
              <Link to={`/ingredients/category/${c.id}`} className="group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-stone-200 bg-white p-4 transition hover:border-forest-400 dark:border-forest-800 dark:bg-forest-950 dark:hover:border-forest-500">
                <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-stone-100 dark:bg-forest-900">{categoryImage(c.id) && <RealPhoto image={categoryImage(c.id)!} lang={lang} sizes="64px" className="h-full w-full" />}</span>
                <span className="min-w-0">
                  <span className="block font-semibold text-forest-900 dark:text-white">{c.name[lang]}</span>
                  <span className="block text-sm text-stone-600 dark:text-stone-400">{c.tagline[lang]}</span>
                  <span className="mt-0.5 block text-xs font-medium text-ember-700 dark:text-ember-300">{count(categoryCount(c.id), lang)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {featured.length > 0 && <section className="mx-auto max-w-6xl px-4 pt-14"><FeaturedOfWeek ids={featured} /></section>}

      <section className="mx-auto max-w-6xl px-4 pt-14">
        <SectionTitle title={s.tools} />
        <div className="grid gap-4 md:grid-cols-3">
          <ToolCard to="/ingredients/decoder" icon={ScanText} title={s.decoderTitle} text={s.decoderTeaser} lang={lang} />
          <ToolCard to="/ingredients/compare" icon={GitCompareArrows} title={s.compareTitle} text={s.compareTeaser} lang={lang} />
          <ToolCard to="/ingredients/evidence-labels" icon={Shapes} title={s.nav.labels} text={s.labelsTeaser} lang={lang} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14">
        <SectionTitle title={s.articles} sub={s.articlesSub} action={<Link to="/ingredients/learn" className="text-sm font-semibold text-forest-700 hover:underline dark:text-forest-200">{s.allArticles}</Link>} />
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="hidden overflow-hidden rounded-3xl lg:block">{scienceImage ? <RealPhoto image={scienceImage} lang={lang} sizes="33vw" className="h-full w-full" /> : <Photo id="hero-salad" alt="" sizes="33vw" className="h-full w-full" />}</div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">{allArticles().slice(0, 4).map(a => <li key={a.slug} className="min-w-0"><ArticleCard a={a} lang={lang} /></li>)}</ul>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-14 pb-14"><Notice lang={lang} checkedOn={lastChecked()} /></div>
    </>
  );
}

/* ----------------------------- Lists ----------------------------- */

export function ExploreView({ lang }: { lang: Lang }) {
  const s = STRINGS[lang];
  return (
    <>
      <PageIntro title={s.exploreTitle} sub={s.exploreSub} />
      <div className="mx-auto max-w-6xl px-4 pb-14"><Browser /></div>
    </>
  );
}

export function CategoryView({ category, lang }: { category: Category; lang: Lang }) {
  const s = STRINGS[lang];
  return (
    <>
      <PageIntro
        eyebrow={<Breadcrumbs lang={lang} trail={[[s.home, "/ingredients"], [s.allCategories, "/ingredients/explore"], [category.name[lang]]]} />}
        title={category.name[lang]}
        sub={category.description[lang]}
      >
        <p className="mt-3 text-sm font-semibold text-ember-700 dark:text-ember-300">{count(ingredientsIn(category.id).length, lang)}</p>
      </PageIntro>
      {categoryImage(category.id) && (
        <figure className="mx-auto max-w-6xl px-4 pb-8">
          <RealPhoto image={categoryImage(category.id)!} lang={lang} sizes="(min-width: 1152px) 1120px, 100vw" className="aspect-[21/9] w-full rounded-3xl" />
          <Credit image={categoryImage(category.id)!} lang={lang} />
        </figure>
      )}
      <div className="mx-auto max-w-6xl px-4 pb-10"><Browser fixedCategory={category.id} searchLabel={s.filterIn} /></div>
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-display text-2xl font-semibold text-forest-900 dark:text-white">{s.about}</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          {category.education.map(e => (
            <article key={e.heading.en} className="rounded-2xl border border-stone-200 bg-white p-5 dark:border-forest-800 dark:bg-forest-950">
              <h3 className="font-semibold text-forest-900 dark:text-white">{e.heading[lang]}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{e.body[lang]}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

/* ----------------------------- Profile ----------------------------- */

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-stone-200 pt-7 dark:border-forest-800">
      <h2 className="font-display text-2xl font-semibold text-forest-900 dark:text-white">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="min-w-0 border-b border-stone-100 py-2.5 sm:grid sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4 dark:border-forest-900">
      <dt className="text-sm text-stone-600 dark:text-stone-400">{label}</dt>
      <dd className="text-sm font-medium break-words text-forest-950 dark:text-stone-100">{children}</dd>
    </div>
  );
}

export function IngredientView({ item, lang }: { item: Ingredient; lang: Lang }) {
  const s = STRINGS[lang];
  const category = getCategory(item.category)!;
  const refIndex = new Map(item.references.map((r, i) => [r.id, i + 1]));
  const photo = ingredientPhoto(item);
  const structure = getStructure(item.id);
  // only images about the mechanism: a category photo of one specific substance must not appear on another's page
  const categoryShot = categoryImage(item.category);
  const scienceShot = categoryShot && ["process", "microscopy", "laboratory"].includes(categoryShot.subject) ? categoryShot : undefined;
  const formula = item.formula ?? (structure && structure.kind !== "none" ? structure.formula : undefined);
  const related = allIngredients().filter(x => x.id !== item.id && x.category === item.category).slice(0, 3);
  const sourceLink = (id: string) => <a key={id} href={`#ref-${id}`} className="font-semibold text-forest-700 underline dark:text-forest-200">{digits(refIndex.get(id) ?? "", lang)}</a>;
  const toc: [string, string][] = [["basics", s.basics], ["identity", s.identity], ["what", s.whatIs], ["why", s.whyUsed], ["benefits", s.benefits], ["risks", s.risks], ["safety", s.safety], ["where", s.whereFound], ["references", s.references]];
  const prose = "leading-relaxed text-stone-800 dark:text-stone-200";
  return (
    <>
      <RecordRecent id={item.id} />
      <article className="mx-auto max-w-6xl px-4 pt-8 pb-14 sm:pt-10">
        <Breadcrumbs lang={lang} trail={[[s.home, "/ingredients"], [category.name[lang], `/ingredients/category/${category.id}`], [item.name[lang]]]} />

        <header className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ember-700 dark:text-ember-300">{category.name[lang]}</p>
            <h1 className="mt-1 font-display text-4xl font-semibold text-balance text-forest-900 sm:text-5xl dark:text-white">{item.name[lang]}</h1>
            <p className="mt-3 text-lg leading-relaxed text-stone-700 dark:text-stone-300">{item.summary[lang]}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {item.eNumber && <span className="rounded-md bg-forest-800 px-2 py-1 font-mono font-semibold text-white dark:bg-forest-200 dark:text-forest-950">{item.eNumber}</span>}
              {item.ins && <span className="rounded-md border border-stone-300 px-2 py-1 font-mono text-forest-900 dark:border-forest-700 dark:text-stone-100">INS {item.ins}</span>}
              {formula && <span className="rounded-md border border-stone-300 px-2 py-1 text-forest-900 dark:border-forest-700 dark:text-stone-100"><Formula value={formula} /></span>}
            </div>
          </div>
          {photo && (
            <figure className="min-w-0">
              <RealPhoto image={photo} lang={lang} eager sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[16/10] w-full rounded-3xl" />
              <Credit image={photo} lang={lang} />
            </figure>
          )}
        </header>

        <div className="mt-5">
          <h2 className="sr-only">{s.evidenceLabels}</h2>
          <div className="flex flex-wrap items-center gap-2">
            {item.statusLabels.map(l => <StatusBadge key={l} id={l} lang={lang} size="md" />)}
            <Link to="/ingredients/evidence-labels" className="text-sm font-semibold text-forest-700 underline dark:text-forest-200">{s.whatLabelsMean}</Link>
          </div>
          <div className="mt-3"><VerificationNote v={item.verification} lang={lang} /></div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[13rem_minmax(0,1fr)]">
          <nav aria-label={item.name[lang]} className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:sticky lg:top-24 lg:mx-0 lg:flex-col lg:gap-1 lg:self-start lg:overflow-visible lg:px-0">
            {toc.map(([id, label]) => <a key={id} href={`#${id}`} className="shrink-0 rounded-full border border-stone-300 px-3 py-1 text-sm text-forest-800 transition hover:border-forest-500 lg:border-0 lg:px-2 lg:hover:text-ember-700 dark:border-forest-700 dark:text-stone-300 dark:lg:hover:text-ember-300">{label}</a>)}
            <Link to={`/ingredients/compare?items=${item.id}`} className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-forest-800 px-3 py-1.5 text-sm font-semibold text-white lg:mt-3 lg:w-fit dark:bg-forest-200 dark:text-forest-950"><GitCompareArrows className="h-4 w-4" aria-hidden="true" />{s.nav.compare}</Link>
          </nav>

          <div className="min-w-0 space-y-8">
            <Block id="basics" title={s.basics}>
              <dl>
                <Fact label={lang === "en" ? "Ingredient name" : "উপাদানের নাম"}>{item.name[lang]}</Fact>
                {item.commonNames.length > 0 && <Fact label={s.commonNames}>{item.commonNames.join(", ")}</Fact>}
                {item.chemicalName && <Fact label={s.chemicalName}>{item.chemicalName}</Fact>}
                <Fact label={s.eNumber}>{item.eNumber ?? s.notApplicable}</Fact>
                <Fact label={s.insNumber}>{item.ins ?? s.notApplicable}</Fact>
                {item.formula && <Fact label={s.formula}><span className="font-mono">{item.formula}</span></Fact>}
                <Fact label={s.categoryLabel}><Link to={`/ingredients/category/${category.id}`} className="underline">{category.name[lang]}</Link></Fact>
                <Fact label={s.originLabel}>{VOCAB.origins[item.origin][lang]}{item.originNote && <span className="block font-normal text-stone-700 dark:text-stone-300">{item.originNote[lang]}</span>}</Fact>
                <Fact label={s.applications}>{item.applications.map(a => VOCAB.applications[a][lang]).join(", ")}</Fact>
              </dl>
            </Block>

            <Block id="identity" title={s.identity}><ScientificIdentity item={item} structure={structure} polymer={polymerImage(item.id)} lang={lang} /></Block>

            <Block id="what" title={s.whatIs}><p className={prose}>{item.whatIs[lang]}</p></Block>
            <Block id="why" title={s.whyUsed}>
              <p className={prose}>{item.whyUsed[lang]}</p>
              <h3 className="mt-4 font-semibold text-forest-900 dark:text-white">{s.howWorks}</h3>
              <p className={`mt-1 ${prose}`}>{item.howItWorks[lang]}</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <ConceptDiagram category={item.category} lang={lang} />
                {scienceShot && scienceShot !== photo && <figure className="min-w-0"><RealPhoto image={scienceShot} lang={lang} sizes="(min-width: 640px) 50vw, 100vw" className="aspect-[12/5] w-full rounded-xl" /><Credit image={scienceShot} lang={lang} /></figure>}
              </div>
            </Block>

            <Block id="benefits" title={s.benefits}>
              {item.benefits.length ? (
                <ul className="grid gap-3 sm:grid-cols-2">
                  {item.benefits.map(b => (
                    <li key={b.text.en} className="rounded-2xl border border-stone-200 bg-white p-4 dark:border-forest-800 dark:bg-forest-950">
                      <p className="text-xs font-semibold text-ember-700 dark:text-ember-300">{VOCAB.benefits[b.kind][lang]}</p>
                      <p className="mt-1 text-sm leading-relaxed text-stone-800 dark:text-stone-200">{b.text[lang]}</p>
                    </li>
                  ))}
                </ul>
              ) : <p className={prose}>{s.noBenefits}</p>}
            </Block>

            <Block id="risks" title={s.risks}>
              <p className="text-sm text-stone-700 dark:text-stone-300">{s.riskIntro}</p>
              {item.risks.length ? (
                <ul className="mt-3 space-y-3">
                  {item.risks.map(r => (
                    <li key={r.text.en} className="rounded-2xl border border-stone-200 bg-white p-4 dark:border-forest-800 dark:bg-forest-950">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold text-forest-900 dark:text-white">{VOCAB.riskKinds[r.kind][lang]}</span>
                        <EvidenceTags evidence={r.evidence} strength={r.strength} lang={lang} />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-stone-800 dark:text-stone-200">{r.text[lang]}</p>
                      <p className="mt-1.5 text-xs text-stone-600 dark:text-stone-400">{s.sourcesFor}: {r.sourceIds.flatMap((id, i) => (i ? [", ", sourceLink(id)] : [sourceLink(id)]))}</p>
                    </li>
                  ))}
                </ul>
              ) : <p className={`mt-3 ${prose}`}>{s.noRisks}</p>}
              <div className="mt-4 rounded-2xl border-l-4 border-ember-500 bg-ember-50 p-4 dark:bg-forest-900">
                <p className="text-sm font-semibold text-forest-950 dark:text-white">{s.inContext}</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-800 dark:text-stone-200">{item.riskContext[lang]}</p>
              </div>
              {item.flags.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold text-forest-900 dark:text-white">{s.allergyNotes}</h3>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-stone-800 dark:text-stone-200">{item.flags.map(f => <li key={f}>{VOCAB.flags[f][lang]}</li>)}</ul>
                </div>
              )}
            </Block>

            <Block id="safety" title={s.safety}>
              <p className="text-sm text-stone-700 dark:text-stone-300">{s.adiExplain}</p>
              <ul className="mt-3 space-y-3">
                {item.regulatory.map((r, i) => (
                  <li key={i} className="rounded-2xl border border-stone-200 bg-white p-4 dark:border-forest-800 dark:bg-forest-950">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="font-semibold text-forest-900 dark:text-white">{r.authority}</p>
                      <p className="text-xs text-stone-600 dark:text-stone-400">{r.jurisdiction[lang]} · {digits(r.date, lang)}</p>
                    </div>
                    <dl className="mt-2 space-y-2 text-sm">
                      <div><dt className="sr-only">{s.regStatus}</dt><dd className="leading-relaxed text-stone-800 dark:text-stone-200">{r.status[lang]}</dd></div>
                      {r.adi && <div><dt className="text-xs font-semibold text-stone-600 dark:text-stone-400">{s.adi}</dt><dd className="font-semibold text-forest-950 dark:text-white">{formatAdi(r.adi, lang)}{r.adi.note && <span className="block font-normal text-stone-700 dark:text-stone-300">{r.adi.note[lang]}</span>}</dd></div>}
                      {r.limits && <div><dt className="text-xs font-semibold text-stone-600 dark:text-stone-400">{s.limits}</dt><dd className="leading-relaxed text-stone-800 dark:text-stone-200">{r.limits[lang]}</dd></div>}
                      {r.conditions && <div><dt className="text-xs font-semibold text-stone-600 dark:text-stone-400">{s.conditions}</dt><dd className="leading-relaxed text-stone-800 dark:text-stone-200">{r.conditions[lang]}</dd></div>}
                    </dl>
                    <p className="mt-2 text-xs text-stone-600 dark:text-stone-400">{s.source}: {sourceLink(r.sourceId)}</p>
                  </li>
                ))}
              </ul>
            </Block>

            <Block id="where" title={s.whereFound}>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {item.applications.map(a => {
                  const im = applicationImage(a);
                  return (
                    <li key={a} className="min-w-0">
                      <Link to={`/ingredients/explore?app=${a}`} className="group block overflow-hidden rounded-xl border border-stone-200 bg-white transition hover:border-forest-400 dark:border-forest-800 dark:bg-forest-950">
                        {im && <RealPhoto image={im} lang={lang} sizes="(min-width: 640px) 25vw, 50vw" className="aspect-[4/3] w-full" />}
                        <span className="block px-3 py-2 text-sm font-medium text-forest-900 dark:text-stone-100">{VOCAB.applications[a][lang]}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-3 text-sm text-stone-700 dark:text-stone-300">{s.whereNote}</p>
            </Block>

            <Block id="references" title={s.references}>
              {[[s.regulatoryRefs, item.references.filter(r => r.kind !== "peer-reviewed")], [s.researchRefs, item.references.filter(r => r.kind === "peer-reviewed")]].map(([title, refs]) => (refs as Reference[]).length > 0 && (
                <div key={title as string} className="mb-5">
                  <h3 className="mb-2 font-semibold text-forest-900 dark:text-white">{title as string}</h3>
                  <ReferenceList refs={refs as Reference[]} lang={lang} />
                </div>
              ))}
            </Block>

            {related.length > 0 && (
              <section className="border-t border-stone-200 pt-7 dark:border-forest-800">
                <h2 className="font-display text-2xl font-semibold text-forest-900 dark:text-white">{s.related}</h2>
                <ul className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">{related.map(x => <li key={x.id} className="min-w-0"><IngredientCard item={withVisuals(x)} lang={lang} showSummary={false} /></li>)}</ul>
              </section>
            )}
            <Notice lang={lang} />
          </div>
        </div>
      </article>
    </>
  );
}

/* --------------------------- Tools and learning --------------------------- */

export function DecoderView({ lang }: { lang: Lang }) {
  const s = STRINGS[lang];
  return <><PageIntro title={s.decoderTitle} sub={s.decoderSub} /><div className="pb-14"><DecoderTool /></div></>;
}

export function CompareView({ lang }: { lang: Lang }) {
  const s = STRINGS[lang];
  return <><PageIntro title={s.compareTitle} sub={s.compareSub} /><div className="pb-14"><CompareTool /></div></>;
}

export function LearnView({ lang }: { lang: Lang }) {
  const s = STRINGS[lang];
  return (
    <>
      <PageIntro title={s.learnTitle} sub={s.learnSub} />
      <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 pb-14 sm:grid-cols-2 lg:grid-cols-3">{allArticles().map(a => <li key={a.slug} className="min-w-0"><ArticleCard a={a} lang={lang} /></li>)}</ul>
    </>
  );
}

export function ArticleView({ article: a, lang }: { article: Article; lang: Lang }) {
  const s = STRINGS[lang];
  const items = allIngredients();
  const related = a.relatedIngredients.map(id => items.find(x => x.id === id)).filter((x): x is Ingredient => Boolean(x));
  const more = allArticles().filter(x => x.slug !== a.slug).slice(0, 3);
  return (
    <article className="mx-auto max-w-3xl px-4 pt-8 pb-14 sm:pt-10">
      <Breadcrumbs lang={lang} trail={[[s.home, "/ingredients"], [s.nav.learn, "/ingredients/learn"], [a.title[lang]]]} />
      <h1 className="mt-5 font-display text-4xl leading-tight font-semibold text-balance text-forest-900 sm:text-5xl dark:text-white">{a.title[lang]}</h1>
      <p className="mt-3 text-lg leading-relaxed text-stone-700 dark:text-stone-300">{a.dek[lang]}</p>
      <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{digits(a.minutes, lang)} {s.minRead} · {s.lastChecked}: {digits(a.checkedOn, lang)}</p>

      <aside className="mt-6 rounded-2xl border-l-4 border-ember-500 bg-white p-5 dark:bg-forest-950">
        <h2 className="font-semibold text-forest-900 dark:text-white">{s.takeaways}</h2>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-stone-800 dark:text-stone-200">{a.takeaways.map(t => <li key={t.en}>{t[lang]}</li>)}</ul>
      </aside>

      {a.sections.map(sec => (
        <section key={sec.heading.en} className="mt-8">
          <h2 className="font-display text-2xl font-semibold text-forest-900 dark:text-white">{sec.heading[lang]}</h2>
          {sec.paragraphs.map(p => <p key={p.en} className="mt-3 leading-[1.75] text-stone-800 dark:text-stone-200">{p[lang]}</p>)}
          {sec.bullets && <ul className="mt-3 list-disc space-y-1.5 pl-5 text-stone-800 dark:text-stone-200">{sec.bullets.map(b => <li key={b.en}>{b[lang]}</li>)}</ul>}
        </section>
      ))}

      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-white">{s.relatedProfiles}</h2>
          <ul className="mt-3 flex flex-wrap gap-2">{related.map(x => <li key={x.id}><Link to={`/ingredients/${x.id}`} className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-white px-3 py-1.5 text-sm text-forest-800 transition hover:border-forest-500 dark:border-forest-700 dark:bg-forest-950 dark:text-stone-200">{x.name[lang]}{x.eNumber && <CodeChip>{x.eNumber}</CodeChip>}</Link></li>)}</ul>
        </section>
      )}

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-white">{s.references}</h2>
        <div className="mt-3"><ReferenceList refs={a.references} lang={lang} /></div>
      </section>

      <div className="mt-10"><Notice lang={lang} /></div>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-white">{s.moreArticles}</h2>
        <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">{more.map(x => <li key={x.slug} className="min-w-0"><ArticleCard a={x} lang={lang} /></li>)}</ul>
      </section>
    </article>
  );
}

export function LabelsView({ lang }: { lang: Lang }) {
  const s = STRINGS[lang];
  const items = allIngredients();
  return (
    <>
      <PageIntro title={s.labelsTitle} sub={s.labelsSub} />
      <div className="mx-auto max-w-6xl px-4 pb-14">
        <section className="rounded-2xl border-l-4 border-ember-500 bg-white p-5 dark:bg-forest-950">
          <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-white">{s.hazardTitle}</h2>
          <p className="mt-1.5 leading-relaxed text-stone-800 dark:text-stone-200">{s.hazardBody}</p>
        </section>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {allStatusLabels().map(l => {
            const n = items.filter(x => x.statusLabels.includes(l.id)).length;
            return (
              <li key={l.id} className="min-w-0 rounded-2xl border border-stone-200 bg-white p-5 dark:border-forest-800 dark:bg-forest-950">
                <StatusBadge id={l.id} lang={lang} size="md" />
                <h2 className="sr-only">{l.name[lang]}</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-800 dark:text-stone-200"><span className="font-semibold">{s.meaning}:</span> {l.meaning[lang]}</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-800 dark:text-stone-200"><span className="font-semibold">{s.regContext}:</span> {l.context[lang]}</p>
                <Link to={`/ingredients/explore?status=${l.id}`} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-forest-700 hover:underline dark:text-forest-200">{s.labelCount}: {digits(n, lang)}<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <section>
            <h2 className="font-display text-2xl font-semibold text-forest-900 dark:text-white">{s.evidenceTypesTitle}</h2>
            <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{s.evidenceTypesSub}</p>
            <dl className="mt-3 space-y-3 text-sm">{Object.entries(s.evidenceTypes).map(([k, v]) => <div key={k}><dt className="font-semibold text-forest-900 dark:text-white">{VOCAB.evidence[k][lang]}</dt><dd className="mt-0.5 leading-relaxed text-stone-800 dark:text-stone-200">{v}</dd></div>)}</dl>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-forest-900 dark:text-white">{s.strengthsTitle}</h2>
            <dl className="mt-3 space-y-3 text-sm">{Object.entries(s.strengths).map(([k, v]) => <div key={k}><dt className="font-semibold text-forest-900 dark:text-white">{VOCAB.strength[k][lang]}</dt><dd className="mt-0.5 leading-relaxed text-stone-800 dark:text-stone-200">{v}</dd></div>)}</dl>
          </section>
        </div>
        <div className="mt-10"><Notice lang={lang} /></div>
      </div>
    </>
  );
}
