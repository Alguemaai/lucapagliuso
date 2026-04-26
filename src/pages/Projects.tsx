import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;
const categories = ["All", "Paid Media", "Growth", "Analytics", "Brand"] as const;
type Category = (typeof categories)[number];

const ProjectsPage = () => {
  const [filter, setFilter] = useState<Category>("All");
  const [params, setParams] = useSearchParams();
  const [active, setActive] = useState<Project | null>(null);

  // Sync ?case=slug with modal
  useEffect(() => {
    const slug = params.get("case");
    if (slug) {
      const proj = projects.find((p) => p.slug === slug) ?? null;
      setActive(proj);
    } else {
      setActive(null);
    }
  }, [params]);

  const open = (p: Project) => {
    setParams({ case: p.slug });
  };
  const close = () => {
    setParams({});
  };

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div className="grain min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HEADER */}
      <section className="edge pt-40 md:pt-56 pb-20">
        <p className="label mb-6">Index of work · 2021 — 2025</p>
        <h1 className="display text-[clamp(56px,12vw,200px)]">
          Selected
          <br />
          <span className="display-italic">projects</span>.
        </h1>
        <p className="font-mono text-[13px] leading-[1.8] text-foreground/65 max-w-xl mt-10">
          A working archive of campaigns, growth engines and analytics builds —
          from R$1MM+ brand budgets to scrappy A/B testing loops. Click any line
          to expand the case.
        </p>
      </section>

      {/* FILTER BAR */}
      <div className="edge sticky top-[68px] z-[100] bg-background/85 backdrop-blur-md border-y border-hairline">
        <div className="flex items-center justify-between gap-4 py-5 overflow-x-auto">
          <div className="flex gap-2 md:gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "font-mono text-[10px] tracking-[0.18em] uppercase px-3 py-2 border transition-all duration-300 whitespace-nowrap",
                  filter === c
                    ? "bg-foreground text-background border-foreground"
                    : "border-hairline text-muted-foreground hover:text-foreground hover:border-foreground/40"
                )}
              >
                {c}
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
            {filtered.map((p, i) => (
              <motion.button
                layout
                key={p.slug}
                onClick={() => open(p)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, delay: i * 0.04, ease: easeOutExpo }}
                className="group text-left border-b border-hairline py-8 md:py-10 hover:bg-surface-1 -mx-4 md:-mx-6 px-4 md:px-6 transition-colors duration-500"
              >
                <div className="grid grid-cols-12 gap-4 items-baseline">
                  <span className="col-span-2 md:col-span-1 font-mono text-[11px] text-muted-foreground tabular-nums">
                    {p.index}
                  </span>
                  <div className="col-span-10 md:col-span-5">
                    <p className="label mb-2">{p.client}</p>
                    <h3 className="display text-3xl md:text-5xl group-hover:translate-x-2 transition-transform duration-500 ease-out-expo">
                      {p.title}
                    </h3>
                  </div>
                  <div className="hidden md:flex col-span-3 gap-2 flex-wrap">
                    {p.tags.slice(0, 3).map((t) => (
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

                {/* Inline metrics row */}
                <div className="grid grid-cols-3 mt-6 md:ml-[8.33%] md:max-w-2xl gap-4">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="display text-xl md:text-2xl tabular-nums">{m.value}</p>
                      <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.button>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="py-32 text-center">
              <p className="label mb-3">No results</p>
              <p className="font-mono text-sm text-muted-foreground">
                No cases under this filter — yet.
              </p>
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
                <span className="label">Case · {active.index}</span>
                <button
                  onClick={close}
                  className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground link-underline"
                >
                  Close ✕
                </button>
              </div>

              <div className="px-8 md:px-12 py-12">
                <p className="label mb-4">{active.client} · {active.year}</p>
                <h2 className="display text-[clamp(40px,6vw,80px)]">
                  {active.title}
                </h2>

                <p className="font-mono text-base leading-[1.8] text-foreground/80 mt-8">
                  {active.summary}
                </p>

                <div className="grid grid-cols-3 gap-6 mt-10 py-8 border-y border-hairline">
                  {active.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="display text-3xl md:text-4xl tabular-nums">
                        {m.value}
                      </p>
                      <p className="label mt-2">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <p className="label mb-6">The work</p>
                  <div className="space-y-5 font-mono text-[14px] leading-[1.85] text-foreground/75">
                    {active.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 pt-10 border-t border-hairline">
                  <div>
                    <p className="label mb-3">Role</p>
                    <p className="font-display text-2xl">{active.role}</p>
                  </div>
                  <div>
                    <p className="label mb-3">Stack</p>
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
                  <p className="label mb-3">Want results like this?</p>
                  <a
                    href="mailto:lucapagliuso50@gmail.com"
                    className="font-display text-2xl md:text-3xl link-underline"
                  >
                    lucapagliuso50@gmail.com →
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
