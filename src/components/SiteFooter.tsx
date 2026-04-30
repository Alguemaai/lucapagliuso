import { useLanguage, pick } from "@/i18n/LanguageContext";
import { ui } from "@/i18n/translations";

const SiteFooter = () => {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();
  const T = ui.footer;
  return (
    <footer className="edge border-t border-hairline">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-16">
        <div className="md:col-span-5">
          <p className="label mb-4">{pick(T.available, lang)}</p>
          <h3 className="display text-3xl md:text-5xl">
            {pick(T.availableTitle, lang)}{" "}
            <span className="display-italic">{pick(T.availableItalic, lang)}</span>{" "}
            {pick(T.availableSuffix, lang)}
          </h3>
          <a
            href="mailto:lucapagliuso@hotmail.com"
            className="inline-block mt-8 font-display text-xl md:text-2xl link-underline"
          >
            lucapagliuso@hotmail.com
          </a>
        </div>

        <div className="md:col-span-3 md:col-start-8">
          <p className="label mb-4">{pick(T.elsewhere, lang)}</p>
          <ul className="space-y-2 font-mono text-sm">
            <li>
              <a href="https://linkedin.com/in/luca-pagliuso" target="_blank" rel="noreferrer"
                className="link-underline text-foreground/80 hover:text-foreground">LinkedIn ↗</a>
            </li>
            <li>
              <a href="https://www.upwork.com" target="_blank" rel="noreferrer"
                className="link-underline text-foreground/80 hover:text-foreground">Upwork ↗</a>
            </li>
            <li>
              <a href="mailto:lucapagliuso@hotmail.com"
                className="link-underline text-foreground/80 hover:text-foreground">Email ↗</a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="label mb-4">{pick(T.based, lang)}</p>
          <p className="font-mono text-sm text-foreground/80 whitespace-pre-line">
            {pick(T.basedLine, lang)}
          </p>
        </div>
      </div>

      <div className="hairline" />
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between py-6 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
        <span>© {year} Luca Pagliuso</span>
        <span>{pick(T.rights, lang)}</span>
        <span>v 02 · {year}</span>
      </div>
    </footer>
  );
};

export default SiteFooter;
