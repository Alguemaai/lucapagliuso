import { useLanguage, type Lang } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const LangToggle = ({ className }: { className?: string }) => {
  const { lang, setLang } = useLanguage();

  const opt = (l: Lang, label: string) => (
    <button
      key={l}
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      aria-label={`Switch to ${label}`}
      className={cn(
        "font-mono text-[10px] tracking-[0.22em] uppercase px-2 py-1 transition-colors duration-300",
        lang === l ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      )}
    >
      {label}
    </button>
  );

  return (
    <div
      className={cn(
        "inline-flex items-center border border-hairline divide-x divide-hairline",
        className
      )}
    >
      {opt("pt", "PT")}
      {opt("en", "EN")}
    </div>
  );
};

export default LangToggle;
