import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { projects, type Project } from "@/data/portfolio";
import { useLanguage, pick, pickText } from "@/i18n/LanguageContext";
import { ui } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const ProjectsPage = () => {
  const { lang } = useLanguage();
  const T = ui.projects;

  const categoryDefs = useMemo(
    () => [
      { key: "All" as const, label: pick(T.filterAll, lang) },
      { key: "Paid Media" as const, label: pick(T.filterPaid, lang) },
      { key: "Growth" as const, label: pick(T.filterGrowth, lang) },
      { key: "Analytics" as const, label: pick(T.filterAnalytics, lang) },
      { key: "Brand" as const, label: pick(T.filterBrand, lang) },
    ],
    [lang, T]
  );

  type Category = (typeof categoryDefs)[number]["key"];

  const [filter, setFilter] = useState<Category>("All");
  const [params, setParams] = useSearchParams();
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    const slug = params.get("case");
    if (slug) {
      const proj = projects.find((p) => p.slug === slug) ?? null;
      setActive(proj);
    } else {
      setActive(null);
    }
  }, [params]);

  const open = (p: Project) => setParams({ case: p.slug });
  const close = () => setParams({});

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div className="grain min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HEADER */}
      <section className="edge pt-40 md:pt-56 pb-20">
        <p className="label mb-6">{pick(T.eyebrow, lang)}</p>
        <h1 className="display text-[clamp(56px,12vw,200px)]">
          {pick(T.title, lang)}
          <br />
          <span className="display-italic">{pick(T.italic, lang)}</span>.
        </h1>
        <p className="font-mono text-[13px] leading-[1.8] text-foreground/65 max-w-xl mt-10">
          {pick(T.intro, lang)}
        </p>
      </section>

      {/* FILTER BAR */}
      <div className="edge sticky top-[68px] z-[100] bg-background/85 backdrop-blur-md border-y border-hairline">
        <div className="flex items-center justify-between gap-4 py-5 overflow-x-auto">
          <div className="flex gap-2 md:gap-3">
            {categoryDefs.map((c) => (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={cn(
                  "font-mono text-[10px] tracking-[0.18em] uppercase px-3 py-2 border transition-all duration-300 whitespace-nowrap",
                  filter === c.key
                    ? "bg-foreground text-background border-foreground"
                    : "border-hairline text-muted-foreground hover:text-foreground hover:border-foreground/40"
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
          <span className="hidden md:inline font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground tabular-nums">
            {filtered.length.toString().padStart(2, "0")} / {projects.length.toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* PROJECT LIST */}
      <section className="edge pb-24">
        <div className="flex flex-col">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              const rowInner = (
                <>
                  <div className="grid grid-cols-12 gap-4 items-baseline">
                    <span className="col-span-2 md:col-span-1 font-mono text-[11px] text-muted-foreground tabular-nums">
                      {p.index}
                    </span>
                    <div className="col-span-10 md:col-span-5">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="label">{pickText(p.client, lang)}</p>
                        {p.hasDetail && (
                          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-accent border border-accent/40 px-2 py-0.5">
                            {pick(T.fullCase, lang)}
                          </span>
                        )}
                      </div>
                      <h3 className="display text-3xl md:text-5xl group-hover:translate-x-2 transition-transform duration-500 ease-out-expo">
                        {pick(p.title, lang)}
                      </h3>
                    </div>
                    <div className="hidden md:flex col-span-3 gap-2 flex-wrap">
                      {pick(p.tags, lang).slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground border border-hairline px-2.5 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="col-span-12 md:col-span-3 flex items-center justify-between md:justify-end gap-6">
                      <span className="font-mono text-[11px] text-muted-foreground">{p.year}</span>
                      <span className="text-xl text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-500 ease-out-expo">
                        ↗
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 mt-6 md:ml-[8.33%] md:max-w-2xl gap-4">
                    {p.metrics.map((m) => (
                      <div key={pick(m.label, lang)}>
                        <p className="display text-xl md:text-2xl tabular-nums">{m.value}</p>
                        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">
                          {pick(m.label, lang)}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              );

              const rowClass =
                "group block w-full text-left border-b border-hairline py-8 md:py-10 hover:bg-surface-1 -mx-4 md:-mx-6 px-4 md:px-6 transition-colors duration-500";

              return (
                <motion.div
                  layout
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, delay: i * 0.04, ease: easeOutExpo }}
                >
                  {p.hasDetail ? (
                    <Link to={`/projects/${p.slug}`} className={rowClass}>
                      {rowInner}
                    </Link>
                  ) : (
                    <button onClick={() => open(p)} className={rowClass}>
                      {rowInner}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="py-32 text-center">
              <p className="label mb-3">{pick(T.noResults, lang)}</p>
              <p className="font-mono text-sm text-muted-foreground">{pick(T.noResultsBody, lang)}</p>
            </div>
          )}
        </div>
      </section>

      {/* DETAIL MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[400] bg-background/90 backdrop-blur-md flex items-stretch justify-end"
            onClick={close}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.7, ease: easeOutExpo }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl h-full bg-surface-1 border-l border-hairline overflow-y-auto"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between px-8 md:px-12 py-5 bg-surface-1/95 backdrop-blur border-b border-hairline">
                <span className="label">{pick(T.modalCase, lang)} · {active.index}</span>
                <button
                  onClick={close}
                  className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground link-underline"
                >
                  {pick(T.modalClose, lang)}
                </button>
              </div>

              <div className="px-8 md:px-12 py-12">
                <p className="label mb-4">{pickText(active.client, lang)} · {active.year}</p>
                <h2 className="display text-[clamp(40px,6vw,80px)]">
                  {pick(active.title, lang)}
                </h2>

                <p className="font-mono text-base leading-[1.8] text-foreground/80 mt-8">
                  {pick(active.summary, lang)}
                </p>

                <div className="grid grid-cols-3 gap-6 mt-10 py-8 border-y border-hairline">
                  {active.metrics.map((m) => (
                    <div key={pick(m.label, lang)}>
                      <p className="display text-3xl md:text-4xl tabular-nums">{m.value}</p>
                      <p className="label mt-2">{pick(m.label, lang)}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <p className="label mb-6">{pick(T.modalWork, lang)}</p>
                  <div className="space-y-5 font-mono text-[14px] leading-[1.85] text-foreground/75">
                    {pick(active.description, lang).map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 pt-10 border-t border-hairline">
                  <div>
                    <p className="label mb-3">{pick(T.modalRole, lang)}</p>
                    <p className="font-display text-2xl">{pick(active.role, lang)}</p>
                  </div>
                  <div>
                    <p className="label mb-3">{pick(T.modalStack, lang)}</p>
                    <div className="flex gap-2 flex-wrap">
                      {active.stack.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[11px] tracking-[0.1em] uppercase border border-hairline px-2.5 py-1.5"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-14 pt-10 border-t border-hairline">
                  <p className="label mb-3">{pick(T.modalCta, lang)}</p>
                  <a
                    href="mailto:lucapagliuso@hotmail.com"
                    className="font-display text-2xl md:text-3xl link-underline"
                  >
                    lucapagliuso@hotmail.com →
                  </a>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <SiteFooter />
    </div>
  );
};

export default ProjectsPage;
