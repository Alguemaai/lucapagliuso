import { useState } from "react";
import { motion } from "framer-motion";
import lucaPortrait from "@/assets/luca-portrait.png";
import { useLanguage, pick } from "@/i18n/LanguageContext";

const EMAIL = "lucapagliuso@hotmail.com";
const WHATSAPP_NUMBER = "5511999238598"; // +55 11 99923-8598
const LINKEDIN_URL = "https://www.linkedin.com/in/luca-pagliuso";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const copy = {
  eyebrow: { pt: "(04) Vamos conversar", en: "(04) Let's talk" },
  title: { pt: "Vamos", en: "Let's" },
  italic: { pt: "crescer", en: "grow" },
  suffix: { pt: "algo juntos.", en: "something." },
  lede: {
    pt: "Disponível para projetos de growth, mídia paga e analytics. Resposta em até 24h.",
    en: "Available for growth, paid media and analytics projects. Reply within 24h.",
  },
  emailLabel: { pt: "E-mail direto", en: "Direct e-mail" },
  emailCta: { pt: "Enviar e-mail →", en: "Send e-mail →" },
  emailCopy: { pt: "Copiar", en: "Copy" },
  emailCopied: { pt: "Copiado ✓", en: "Copied ✓" },
  waLabel: { pt: "WhatsApp", en: "WhatsApp" },
  waCta: { pt: "Chamar no WhatsApp →", en: "Message on WhatsApp →" },
  waNumber: { pt: "+55 11 99923-8598", en: "+55 11 99923-8598" },
  liLabel: { pt: "LinkedIn", en: "LinkedIn" },
  liCta: { pt: "Conectar no LinkedIn →", en: "Connect on LinkedIn →" },
  liHandle: { pt: "/in/luca-pagliuso", en: "/in/luca-pagliuso" },
  location: { pt: "São Paulo · Brasil · UTC−3", en: "São Paulo · Brazil · UTC−3" },
  altPortrait: { pt: "Retrato de Luca Pagliuso", en: "Portrait of Luca Pagliuso" },
};

const ContactBlock = () => {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const mailtoSubject = encodeURIComponent(
    lang === "pt"
      ? "Projeto de growth — vamos conversar"
      : "Growth project — let's talk"
  );
  const mailtoBody = encodeURIComponent(
    lang === "pt"
      ? "Olá Luca,\n\nVi seu portfólio e gostaria de conversar sobre um projeto.\n\n— Sobre a empresa:\n— Desafio:\n— Orçamento aproximado:\n— Prazo:\n\nObrigado!"
      : "Hi Luca,\n\nI saw your portfolio and would like to discuss a project.\n\n— About the company:\n— Challenge:\n— Approx. budget:\n— Timeline:\n\nThanks!"
  );
  const mailtoHref = `mailto:${EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const waText = encodeURIComponent(
    lang === "pt"
      ? "Olá Luca, vim pelo seu portfólio — gostaria de conversar sobre um projeto."
      : "Hi Luca, I came from your portfolio — I'd like to discuss a project."
  );
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <section id="contact" className="edge py-24 md:py-40 border-t border-hairline">
      {/* Heading */}
      <div className="grid grid-cols-12 gap-8 items-end mb-16 md:mb-24">
        <div className="col-span-12 md:col-span-9">
          <p className="label mb-6">{pick(copy.eyebrow, lang)}</p>
          <h2 className="display text-[clamp(48px,9vw,160px)] leading-[0.88]">
            {pick(copy.title, lang)}{" "}
            <span className="display-italic">{pick(copy.italic, lang)}</span>
            <br />
            {pick(copy.suffix, lang)}
          </h2>
        </div>
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono text-[13px] leading-[1.7] text-foreground/65 max-w-xs md:text-right md:ml-auto">
            {pick(copy.lede, lang)}
          </p>
        </div>
      </div>

      {/* Cards + Portrait */}
      <div className="grid grid-cols-12 gap-px bg-hairline border-y border-hairline">
        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="col-span-12 md:col-span-4 bg-background p-8 md:p-10 flex flex-col justify-between min-h-[260px] group hover:bg-surface-1 transition-colors duration-500"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="label">{pick(copy.emailLabel, lang)}</span>
              <span className="font-mono text-[11px] text-muted-foreground">01</span>
            </div>
            <a
              href={mailtoHref}
              className="block font-display text-2xl md:text-3xl leading-tight link-underline break-all"
            >
              {EMAIL}
            </a>
          </div>
          <div className="mt-8 flex items-center justify-between gap-4">
            <a
              href={mailtoHref}
              className="font-mono text-[11px] tracking-[0.22em] uppercase border border-hairline px-5 py-3 hover:bg-foreground hover:text-background transition-all duration-500 ease-out-expo"
            >
              {pick(copy.emailCta, lang)}
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              aria-label={pick(copy.emailCopy, lang)}
            >
              {copied ? pick(copy.emailCopied, lang) : pick(copy.emailCopy, lang)}
            </button>
          </div>
        </motion.div>

        {/* WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.08, ease: easeOutExpo }}
          className="col-span-12 md:col-span-4 bg-background p-8 md:p-10 flex flex-col justify-between min-h-[260px] group hover:bg-surface-1 transition-colors duration-500"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="label">{pick(copy.waLabel, lang)}</span>
              <span className="font-mono text-[11px] text-muted-foreground">02</span>
            </div>
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="block font-display text-2xl md:text-3xl leading-tight link-underline"
            >
              {pick(copy.waNumber, lang)}
            </a>
          </div>
          <div className="mt-8">
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] tracking-[0.22em] uppercase border border-hairline px-5 py-3 hover:bg-foreground hover:text-background transition-all duration-500 ease-out-expo inline-block"
            >
              {pick(copy.waCta, lang)}
            </a>
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.16, ease: easeOutExpo }}
          className="col-span-12 md:col-span-4 bg-background relative overflow-hidden min-h-[260px] md:row-span-2"
        >
          <img
            src={lucaPortrait}
            alt={pick(copy.altPortrait, lang)}
            className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="label mb-1 text-foreground/60">Luca Pagliuso</p>
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/80">
              {pick(copy.location, lang)}
            </p>
          </div>
        </motion.div>

        {/* LinkedIn (spans 8 under email + wa) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.24, ease: easeOutExpo }}
          className="col-span-12 md:col-span-8 bg-background p-8 md:p-10 flex flex-col justify-between min-h-[200px] group hover:bg-surface-1 transition-colors duration-500"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="label">{pick(copy.liLabel, lang)}</span>
                <span className="font-mono text-[11px] text-muted-foreground">03</span>
              </div>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="block font-display text-2xl md:text-3xl leading-tight link-underline"
              >
                {pick(copy.liHandle, lang)} ↗
              </a>
            </div>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] tracking-[0.22em] uppercase border border-hairline px-5 py-3 hover:bg-foreground hover:text-background transition-all duration-500 ease-out-expo whitespace-nowrap self-end"
            >
              {pick(copy.liCta, lang)}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBlock;
