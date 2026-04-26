import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { projects } from "@/data/portfolio";
import diabloCase from "@/data/cases/diablo";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.06, ease: easeOutExpo },
  }),
};

// Map of slug → rich case data. Add more as cases ship.
const caseRegistry = {
  "diablo-ii-resurrected": diabloCase,
} as const;

const ProjectDetail = () => {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  const meta = projects.find((p) => p.slug === slug);
  const data = (caseRegistry as Record<string, typeof diabloCase>)[slug];

  if (!meta || !data) {
    return (
      <div className="grain min-h-screen bg-background text-foreground">
        <SiteNav />
        <section className="edge pt-56 pb-32">
          <p className="label mb-6">404 · Case not found</p>
          <h1 className="display text-[clamp(48px,9vw,140px)]">
            This case is <span className="display-italic">in the vault</span>.
          </h1>
          <button
            onClick={() => navigate("/projects")}
            className="mt-12 font-mono text-[11px] tracking-[0.22em] uppercase border border-hairline px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-500"
          >
            ← Back to all work
          </button>
        </section>
        <SiteFooter />
      </div>
    );
  }

  // Find prev/next
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="grain min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section className="relative h-[92svh] min-h-[640px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />

        {/* Oversized backdrop letters */}
        <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none">
          <span
            className="display-italic select-none leading-none -mr-10 text-foreground/[0.04]"
            style={{ fontSize: "clamp(280px, 38vw, 640px)" }}
          >
            {data.backdrop}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 edge pb-12 md:pb-20">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="label mb-5 text-foreground/55"
          >
            Case · {meta.index} <span className="text-accent mx-2">·</span>{" "}
            {meta.tags.join(" · ")}
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="display text-[clamp(56px,11vw,160px)]"
          >
            {data.title.line1}
            <br />
            <span className="display-italic">{data.title.line2}</span>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-4xl"
          >
            {data.heroMeta.map((m) => (
              <div key={m.label}>
                <p className="label text-foreground/40 mb-2">{m.label}</p>
                <p className="font-mono text-[13px] text-foreground/85">{m.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BIG NUMBERS */}
      <section className="border-y border-hairline bg-surface-1">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {data.bigNumbers.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: easeOutExpo }}
              className="group relative px-8 py-10 md:py-12 border-r last:border-r-0 border-hairline"
            >
              <p className="display display-italic text-4xl md:text-5xl tabular-nums">
                {n.value}
              </p>
              <p className="label mt-3">{n.label}</p>
              <span className="absolute bottom-0 left-8 h-px w-0 bg-accent transition-all duration-500 ease-out-expo group-hover:w-8" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* BRIEF */}
      <section className="edge py-24 md:py-32">
        <p className="label text-accent mb-6">The Challenge</p>
        <h2 className="display text-[clamp(36px,5vw,68px)] mb-16">
          Brief & <span className="display-italic">context</span>.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline">
          {data.brief.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: easeOutExpo }}
              className={`p-10 md:p-12 ${i % 2 === 0 ? "bg-background" : "bg-surface-1"}`}
            >
              <p className="label text-accent mb-5">{b.label}</p>
              <p
                className="font-mono text-[14px] leading-[1.8] text-foreground/70"
                dangerouslySetInnerHTML={{ __html: b.body }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* PERSONAS */}
      <section className="edge pt-12 pb-0">
        <p className="label text-accent mb-6">Audience</p>
        <h2 className="display text-[clamp(36px,5vw,68px)] mb-16">
          Personas <span className="display-italic">mapped</span>.
        </h2>
      </section>
      <div className="edge">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline">
          {data.personas.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: easeOutExpo }}
              className={`p-10 md:p-12 ${i % 2 === 0 ? "bg-background" : "bg-surface-1"}`}
            >
              <span className="inline-block label text-accent border border-accent/30 px-3 py-1.5 mb-7">
                {p.tag}
              </span>
              <p className="display display-italic text-4xl mb-1">{p.name}</p>
              <p className="label mb-7">{p.role}</p>
              <blockquote className="font-display italic text-lg md:text-xl leading-[1.6] text-foreground/75 border-l-2 border-accent pl-5 mb-7">
                "{p.quote}"
              </blockquote>
              <ul className="space-y-2.5">
                {p.channels.map((c) => (
                  <li
                    key={c}
                    className="font-mono text-[13px] text-foreground/65 flex items-center gap-3"
                  >
                    <span className="size-1 rounded-full bg-accent shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MARKET STATS */}
      <section className="edge py-24 md:py-32 mt-24 border-t border-hairline">
        <p className="label text-accent mb-6">{(data as any).marketEyebrow ?? "Market Understanding"}</p>
        <h2
          className="display text-[clamp(36px,5vw,68px)] mb-16"
          dangerouslySetInnerHTML={{
            __html:
              (data as any).marketHeading ??
              `Gamer media <span class="display-italic">consumption</span>.`,
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.market.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: easeOutExpo }}
              className="border-t-2 border-accent pt-8"
            >
              <p
                className="display display-italic text-5xl md:text-6xl tabular-nums"
                dangerouslySetInnerHTML={{ __html: m.value }}
              />
              <p
                className="font-mono text-[12px] text-muted-foreground mt-3 leading-[1.6]"
                dangerouslySetInnerHTML={{ __html: m.label }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CHANNEL MIX */}
      <section className="bg-surface-1 border-y border-hairline edge py-24 md:py-32">
        <p className="label text-accent mb-6">Channel Mix</p>
        <h2 className="display text-[clamp(36px,5vw,68px)] mb-16">
          Platforms <span className="display-italic">selected</span>.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline">
          {data.channels.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: easeOutExpo }}
              className="bg-background p-10"
            >
              <p className="display display-italic text-2xl md:text-3xl mb-2">
                {c.name}
              </p>
              <p className="label text-accent mb-4">{c.formats}</p>
              <p className="font-mono text-[13px] leading-[1.75] text-foreground/55">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BUDGET */}
      <section className="edge py-24 md:py-32">
        <p className="label text-accent mb-6">Allocation</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <h2 className="display text-[clamp(36px,5vw,68px)] mb-8">
              Budget of
              <br />
              <span className="display-italic text-accent">
                {(data as any).budgetTotal ?? "$90,000 USD"}
              </span>
            </h2>
            <p className="font-mono text-[14px] leading-[1.8] text-foreground/70">
              {(data as any).budgetIntro ??
                "Strategic split between Brazil and SSA LATAM, with heavier weight on video platforms to maximize awareness during launch."}
            </p>
            <div
              className="mt-8 pt-8 border-t border-hairline font-mono text-[13px] leading-[1.85] text-foreground/65"
              dangerouslySetInnerHTML={{
                __html:
                  (data as any).budgetNote ??
                  `Geographic split: <span class="text-foreground">50% Brazil</span> · <span class="text-foreground">50% SSA</span><br/>Video-first allocation — YouTube + TikTok + Twitch lead the mix on VTR and engagement with the gamer audience.`,
              }}
            />
          </div>

          <div className="flex flex-col gap-6">
            {data.budget.map((row, i) => (
              <motion.div
                key={row.platform}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: easeOutExpo }}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-display italic text-lg md:text-xl">
                    {row.platform}
                  </span>
                  <span className="font-mono text-xs font-bold text-accent">
                    {row.pct}%
                  </span>
                </div>
                <div className="h-[2px] w-full bg-hairline overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${row.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.15 + i * 0.06, ease: easeOutExpo }}
                    className="h-full bg-accent"
                  />
                </div>
                <p className="font-mono text-[11px] text-muted-foreground mt-2">
                  {row.amount}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="border-t border-hairline edge py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="label mb-3">Next case</p>
            <Link
              to={`/projects?case=${next.slug}`}
              className="display text-[clamp(36px,5vw,68px)] link-underline"
            >
              {next.title} <span className="display-italic">↗</span>
            </Link>
          </div>
          <Link
            to="/projects"
            className="font-mono text-[11px] tracking-[0.22em] uppercase border border-hairline px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-500"
          >
            ← All projects
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ProjectDetail;
