import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroPortrait from "@/assets/hero-portrait.jpg";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Clock from "@/components/Clock";
import { capabilities, numbers, projects } from "@/data/portfolio";
import { useLanguage, pick, pickText } from "@/i18n/LanguageContext";
import { ui } from "@/i18n/translations";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.08, ease: easeOutExpo },
  }),
};

const Home = () => {
  const { lang } = useLanguage();
  const featured = projects.slice(0, 4);
  const T = ui.home;

  return (
    <div className="grain min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-[100svh] min-h-[680px] overflow-hidden">
        <img
          src={heroPortrait}
          alt="São Paulo skyline — Luca Pagliuso"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover object-[center_45%] [filter:grayscale(1)_contrast(1.05)_brightness(0.85)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background)/0.7)_100%)]" />
        <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left whitespace-nowrap">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-foreground/35">
            {pick(T.sideMeta, lang)}
          </span>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="absolute top-28 right-6 md:right-14 max-w-[280px] text-right"
        >
          <p className="label mb-3 text-foreground/45">{pick(T.indexLabel, lang)}</p>
          <p className="font-mono text-[12px] leading-relaxed text-foreground/55">
            {pick(T.intro, lang)}
          </p>
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 edge pb-10 md:pb-16">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="display text-[clamp(72px,16vw,232px)] leading-[0.82] tracking-[-0.05em] text-foreground"
          >
            Luca
            <br />
            <span className="display-italic">Pagliuso</span>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="mt-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4"
          >
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-foreground/55 max-w-md">
              {pick(T.tagline, lang)}
            </p>
            <div className="flex items-center gap-6">
              <Clock />
              <Link to="/projects" className="label link-underline text-foreground">
                {pick(T.seeWork, lang)}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────── */}
      <div className="border-y border-hairline overflow-hidden py-5">
        <div className="marquee font-display text-3xl md:text-5xl text-foreground/70">
          {Array.from({ length: 2 }).map((_, repeat) => (
            <div key={repeat} className="flex items-center gap-16 pr-16">
              {[
                "AMBEV", "✶", "Blizzard", "✶", "JBS", "✶",
                "GS1 Brasil", "✶", "Pilar Imóveis", "✶", "Greenz", "✶",
              ].map((w, i) => (
                <span
                  key={`${repeat}-${i}`}
                  className={i % 2 === 1 ? "text-accent" : "display-italic"}
                >
                  {w}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT / MANIFESTO ──────────────────────────────── */}
      <section id="about" className="edge py-24 md:py-40">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="label">{pick(T.manifestoEyebrow, lang)}</p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
            variants={fadeUp}
            className="col-span-12 md:col-span-9 max-w-4xl"
          >
            <h2 className="display text-[clamp(36px,6vw,86px)]">
              {lang === "pt" ? (
                <>Transformo dados brutos em <span className="display-italic">decisões</span> — não em dashboards que ninguém abre.</>
              ) : (
                <>I turn raw data into <span className="display-italic">decisions</span> — not dashboards that nobody opens.</>
              )}
            </h2>
            <div className="mt-12 grid md:grid-cols-2 gap-8 font-mono text-[14px] leading-[1.8] text-foreground/70">
              <p>{pick(T.manifestoP1, lang)}</p>
              <p>{pick(T.manifestoP2, lang)}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── NUMBERS ─────────────────────────────────────────── */}
      <section className="border-y border-hairline">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {numbers.map((n, i) => (
            <motion.div
              key={pick(n.label, lang)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: easeOutExpo }}
              className="edge py-12 md:py-16 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r border-hairline"
            >
              <p className="display text-5xl md:text-6xl tabular-nums">{n.value}</p>
              <p className="label mt-3">{pick(n.label, lang)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CAPABILITIES ────────────────────────────────────── */}
      <section id="capabilities" className="edge py-24 md:py-40">
        <div className="flex items-baseline justify-between mb-16">
          <div>
            <p className="label mb-4">{pick(T.capabilitiesEyebrow, lang)}</p>
            <h2 className="display text-[clamp(36px,6vw,86px)]">
              {pick(T.capabilitiesTitle, lang)} <span className="display-italic">{pick(T.capabilitiesItalic, lang)}</span>.
            </h2>
          </div>
          <span className="hidden md:inline label">{pick(T.capabilitiesCount, lang)}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline">
          {capabilities.map((c, i) => (
            <motion.div
              key={pick(c.title, lang)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: easeOutExpo }}
              className="bg-background p-10 group hover:bg-surface-1 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                  0{i + 1}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  →
                </span>
              </div>
              <h3 className="display text-3xl mb-5">{pick(c.title, lang)}</h3>
              <p className="font-mono text-[13px] leading-[1.8] text-foreground/65">
                {pick(c.body, lang)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROJECTS ───────────────────────────────── */}
      <section id="work" className="edge pt-24 md:pt-40 border-t border-hairline">
        <div className="flex items-baseline justify-between mb-16">
          <div>
            <p className="label mb-4">{pick(T.workEyebrow, lang)}</p>
            <h2 className="display text-[clamp(36px,6vw,86px)]">
              {pick(T.workTitle, lang)} <span className="display-italic">{pick(T.workItalic, lang)}</span>.
            </h2>
          </div>
          <Link to="/projects" className="hidden md:inline label link-underline text-foreground">
            {pick(T.allWork, lang)}
          </Link>
        </div>

        <div className="flex flex-col gap-px bg-hairline">
          {featured.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: easeOutExpo }}
            >
              <Link
                to={p.hasDetail ? `/projects/${p.slug}` : `/projects?case=${p.slug}`}
                className="block group bg-background hover:bg-surface-1 transition-colors duration-500"
              >
                <div className="grid grid-cols-12 gap-6 items-center py-10 md:py-14">
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                      {p.index}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-5">
                    <p className="label mb-3">{pickText(p.client, lang)}</p>
                    <h3 className="display text-3xl md:text-5xl group-hover:translate-x-2 transition-transform duration-500 ease-out-expo">
                      {pick(p.title, lang)}
                    </h3>
                  </div>
                  <div className="hidden md:flex md:col-span-4 gap-2 flex-wrap">
                    {pick(p.tags, lang).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground border border-hairline px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="col-span-12 md:col-span-2 flex items-center justify-between md:justify-end gap-4">
                    <span className="font-mono text-[11px] text-muted-foreground">{p.year}</span>
                    <span className="text-2xl text-muted-foreground group-hover:text-foreground group-hover:translate-x-2 transition-all duration-500 ease-out-expo">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center pt-16 pb-24">
          <Link
            to="/projects"
            className="font-mono text-[11px] tracking-[0.22em] uppercase border border-hairline px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-500 ease-out-expo"
          >
            {pick(T.viewAll, lang)}
          </Link>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section id="contact" className="edge py-24 md:py-40 border-t border-hairline">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="label mb-6">{pick(T.contactEyebrow, lang)}</p>
            <h2 className="display text-[clamp(48px,9vw,160px)]">
              {pick(T.contactTitle, lang)} <span className="display-italic">{pick(T.contactItalic, lang)}</span>
              <br />
              {pick(T.contactSuffix, lang)}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <a
              href="mailto:lucapagliuso50@gmail.com"
              className="font-display text-2xl md:text-3xl link-underline"
            >
              lucapagliuso50@gmail.com
            </a>
            <div className="flex md:justify-end gap-6 mt-8">
              <a
                href="https://linkedin.com/in/luca-pagliuso"
                target="_blank"
                rel="noreferrer"
                className="label link-underline hover:text-foreground"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://www.upwork.com"
                target="_blank"
                rel="noreferrer"
                className="label link-underline hover:text-foreground"
              >
                Upwork ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Home;
