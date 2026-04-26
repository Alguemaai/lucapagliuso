import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { projects } from "@/data/portfolio";
import diabloCaseRaw from "@/data/cases/diablo";
import mustelaCaseRaw from "@/data/cases/mustela";
import { useLanguage, pick } from "@/i18n/LanguageContext";
import { ui } from "@/i18n/translations";
import { localizeCase } from "@/i18n/localizeCase";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.06, ease: easeOutExpo },
  }),
};

const caseRegistry = {
  "diablo-ii-resurrected": diabloCaseRaw,
  "mustela-from-birth": mustelaCaseRaw,
} as const;

const ProjectDetail = () => {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const T = ui.detail;
  const meta = projects.find((p) => p.slug === slug);
  const rawData = (caseRegistry as Record<string, unknown>)[slug];
  const data = rawData ? localizeCase(rawData as Record<string, unknown>, lang) as any : null;

  if (!meta || !data) {
    return (
      <div className="grain min-h-screen bg-background text-foreground">
        <SiteNav />
        <section className="edge pt-56 pb-32">
          <p className="label mb-6">{pick(T.notFound, lang)}</p>
          <h1 className="display text-[clamp(48px,9vw,140px)]">
            {pick(T.notFoundTitle, lang)}{" "}
            <span className="display-italic">{pick(T.notFoundItalic, lang)}</span>.
          </h1>
          <button
            onClick={() => navigate("/projects")}
            className="mt-12 font-mono text-[11px] tracking-[0.22em] uppercase border border-hairline px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-500"
          >
            {pick(T.back, lang)}
          </button>
        </section>
        <SiteFooter />
      </div>
    );
  }

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const tags = pick(meta.tags, lang);

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
            {pick(T.case, lang)} · {meta.index} <span className="text-accent mx-2">·</span>{" "}
            {tags.join(" · ")}
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
            {data.heroMeta.map((m: { label: string; value: string }) => (
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
          {data.bigNumbers.map((n: { label: string; value: string }, i: number) => (
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

      {/* CAMPAIGN FILM (optional) */}
      {data.videoEmbed && (
        <section className="edge py-24 md:py-32">
          <p className="label text-accent mb-6">{pick(T.campaignFilm, lang)}</p>
          <h2 className="display text-[clamp(36px,5vw,68px)] mb-12">
            {pick(T.launchSpot, lang)}{" "}
            <span className="display-italic">{pick(T.launchSpotItalic, lang)}</span>
            {pick(T.launchSpotSuffix, lang)}
          </h2>
          <div className="relative w-full aspect-video bg-surface-1 border border-hairline overflow-hidden">
            <iframe
              src={data.videoEmbed}
              title="Campaign film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </section>
      )}

      {/* BRIEF */}
      <section className="edge py-24 md:py-32">
        <p className="label text-accent mb-6">{pick(T.challengeEyebrow, lang)}</p>
        <h2 className="display text-[clamp(36px,5vw,68px)] mb-16">
          {pick(T.challengeTitle, lang)}{" "}
          <span className="display-italic">{pick(T.challengeItalic, lang)}</span>.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline">
          {data.brief.map((b: { label: string; body: string }, i: number) => (
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
        <p className="label text-accent mb-6">{pick(T.audience, lang)}</p>
        <h2 className="display text-[clamp(36px,5vw,68px)] mb-16">
          {pick(T.personas, lang)}{" "}
          <span className="display-italic">{pick(T.personasItalic, lang)}</span>.
        </h2>
      </section>
      <div className="edge">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline">
          {data.personas.map((p: any, i: number) => (
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
                {p.channels.map((c: string) => (
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
        <p className="label text-accent mb-6">
          {data.marketEyebrow ?? (lang === "pt" ? "Compreensão de Mercado" : "Market Understanding")}
        </p>
        <h2
          className="display text-[clamp(36px,5vw,68px)] mb-16"
          dangerouslySetInnerHTML={{
            __html:
              data.marketHeading ??
              (lang === "pt"
                ? `<span class="display-italic">Consumo</span> de mídia gamer.`
                : `Gamer media <span class="display-italic">consumption</span>.`),
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.market.map((m: { label: string; value: string }, i: number) => (
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
        <p className="label text-accent mb-6">{pick(T.channelMixEyebrow, lang)}</p>
        <h2 className="display text-[clamp(36px,5vw,68px)] mb-16">
          {pick(T.channelMixTitle, lang)}{" "}
          <span className="display-italic">{pick(T.channelMixItalic, lang)}</span>.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline">
          {data.channels.map((c: { name: string; formats: string; desc: string }, i: number) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: easeOutExpo }}
              className="bg-background p-10"
            >
              <p className="display display-italic text-2xl md:text-3xl mb-2">{c.name}</p>
              <p className="label text-accent mb-4">{c.formats}</p>
              <p className="font-mono text-[13px] leading-[1.75] text-foreground/55">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BUDGET */}
      <section className="edge py-24 md:py-32">
        <p className="label text-accent mb-6">{pick(T.allocation, lang)}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <h2 className="display text-[clamp(36px,5vw,68px)] mb-8">
              {pick(T.budgetOf, lang)}
              <br />
              <span className="display-italic text-accent">
                {data.budgetTotal ?? "$90,000 USD"}
              </span>
            </h2>
            <p className="font-mono text-[14px] leading-[1.8] text-foreground/70">
              {data.budgetIntro ??
                (lang === "pt"
                  ? "Split estratégico entre Brasil e SSA LATAM, com peso maior em plataformas de vídeo para maximizar awareness no lançamento."
                  : "Strategic split between Brazil and SSA LATAM, with heavier weight on video platforms to maximize awareness during launch.")}
            </p>
            <div
              className="mt-8 pt-8 border-t border-hairline font-mono text-[13px] leading-[1.85] text-foreground/65"
              dangerouslySetInnerHTML={{
                __html:
                  data.budgetNote ??
                  (lang === "pt"
                    ? `Split geográfico: <span class="text-foreground">50% Brasil</span> · <span class="text-foreground">50% SSA</span><br/>Alocação video-first — YouTube + TikTok + Twitch lideram o mix em VTR e engajamento com a audiência gamer.`
                    : `Geographic split: <span class="text-foreground">50% Brazil</span> · <span class="text-foreground">50% SSA</span><br/>Video-first allocation — YouTube + TikTok + Twitch lead the mix on VTR and engagement with the gamer audience.`),
              }}
            />
          </div>

          <div className="flex flex-col gap-6">
            {data.budget.map((row: { platform: string; pct: number; amount: string }, i: number) => (
              <motion.div
                key={row.platform}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: easeOutExpo }}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-display italic text-lg md:text-xl">{row.platform}</span>
                  <span className="font-mono text-xs font-bold text-accent">{row.pct}%</span>
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
                <p className="font-mono text-[11px] text-muted-foreground mt-2">{row.amount}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="border-t border-hairline edge py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="label mb-3">{pick(T.nextCase, lang)}</p>
            <Link
              to={next.hasDetail ? `/projects/${next.slug}` : `/projects?case=${next.slug}`}
              className="display text-[clamp(36px,5vw,68px)] link-underline"
            >
              {pick(next.title, lang)} <span className="display-italic">↗</span>
            </Link>
          </div>
          <Link
            to="/projects"
            className="font-mono text-[11px] tracking-[0.22em] uppercase border border-hairline px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-500"
          >
            {pick(T.allProjects, lang)}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ProjectDetail;
