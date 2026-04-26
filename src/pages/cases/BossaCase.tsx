import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { projects } from "@/data/portfolio";
import bossaCaseRaw from "@/data/cases/bossa";
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

const SLUG = "bossa-nova-sothebys";

const BossaCasePage = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const T = ui.bossa;
  const Td = ui.detail;
  const meta = projects.find((p) => p.slug === SLUG);
  const data = localizeCase(bossaCaseRaw as Record<string, unknown>, lang) as any;

  if (!meta) {
    return (
      <div className="grain min-h-screen bg-background text-foreground">
        <SiteNav />
        <section className="edge pt-56 pb-32">
          <p className="label mb-6">{pick(Td.notFound, lang)}</p>
          <button
            onClick={() => navigate("/projects")}
            className="mt-12 font-mono text-[11px] tracking-[0.22em] uppercase border border-hairline px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-500"
          >
            {pick(Td.back, lang)}
          </button>
        </section>
        <SiteFooter />
      </div>
    );
  }

  const idx = projects.findIndex((p) => p.slug === SLUG);
  const next = projects[(idx + 1) % projects.length];
  const tags = pick(meta.tags, lang);

  return (
    <div className="grain min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section className="relative h-[92svh] min-h-[640px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center [filter:grayscale(0.15)_brightness(0.55)]"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-background/20" />
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
            {pick(Td.case, lang)} · {meta.index} <span className="text-accent mx-2">·</span>{" "}
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
        <div className="grid grid-cols-2 md:grid-cols-4">
          {data.bigNumbers.map((n: { label: string; value: string }, i: number) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: easeOutExpo }}
              className="group relative px-8 py-10 md:py-12 border-r last:border-r-0 border-hairline"
            >
              <p className="display display-italic text-4xl md:text-5xl tabular-nums">{n.value}</p>
              <p className="label mt-3">{n.label}</p>
              <span className="absolute bottom-0 left-8 h-px w-0 bg-accent transition-all duration-500 ease-out-expo group-hover:w-8" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="edge py-24 md:py-32">
        <p className="label text-accent mb-6">{pick(T.brief, lang)}</p>
        <h2 className="display text-[clamp(36px,5vw,68px)] max-w-5xl leading-[1.05]">
          {pick(T.briefTitle, lang)}{" "}
          <span className="display-italic">{pick(T.briefItalic, lang)}</span>
          {pick(T.briefSuffix, lang)}
        </h2>
        <p className="font-mono text-[15px] leading-[1.85] text-foreground/70 max-w-3xl mt-10">
          {data.intro}
        </p>
      </section>

      {/* GALLERY */}
      <section className="edge pb-24 md:pb-32">
        <div className="flex items-baseline justify-between mb-10">
          <p className="label text-accent">{pick(T.selected, lang)}</p>
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground tabular-nums">
            {data.gallery.length.toString().padStart(2, "0")} / {data.gallery.length.toString().padStart(2, "0")}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {data.gallery.map((g: { src: string; label: string; caption: string }, i: number) => (
            <motion.figure
              key={g.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: easeOutExpo }}
              className="group"
            >
              <div className="relative overflow-hidden bg-surface-1 border border-hairline aspect-[4/5]">
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                  {g.label}
                </span>
                <span className="font-display italic text-sm text-foreground/70">
                  {g.caption}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="edge pb-24 md:pb-32">
        <p className="label text-accent mb-6">{pick(T.reel, lang)}</p>
        <h2 className="display text-[clamp(36px,5vw,68px)] mb-12">
          {pick(T.reelTitle, lang)}{" "}
          <span className="display-italic">{pick(T.reelItalic, lang)}</span>.
        </h2>
        <div className="mx-auto w-full max-w-md aspect-[9/16] bg-surface-1 border border-hairline overflow-hidden">
          <video
            src={data.videoSrc}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-surface-1 border-y border-hairline edge py-24 md:py-32">
        <p className="label text-accent mb-6">{pick(T.pillars, lang)}</p>
        <h2 className="display text-[clamp(36px,5vw,68px)] mb-16">
          {pick(T.pillarsTitle, lang)}{" "}
          <span className="display-italic">{pick(T.pillarsItalic, lang)}</span>.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline">
          {data.pillars.map((p: { label: string; body: string }, i: number) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: easeOutExpo }}
              className="bg-background p-10 md:p-12"
            >
              <p className="label text-accent mb-5">0{i + 1} · {p.label}</p>
              <p className="font-mono text-[14px] leading-[1.85] text-foreground/70">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEXT */}
      <section className="border-t border-hairline edge py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="label mb-3">{pick(Td.nextCase, lang)}</p>
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
            {pick(Td.allProjects, lang)}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default BossaCasePage;
