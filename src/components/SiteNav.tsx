import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage, pick } from "@/i18n/LanguageContext";
import { ui } from "@/i18n/translations";
import LangToggle from "@/components/LangToggle";

const Logo = () => (
  <svg width="28" height="28" viewBox="0 0 34 34" aria-hidden>
    <rect x="0" y="0" width="34" height="34" fill="hsl(var(--foreground))" />
    <rect x="0" y="0" width="17" height="34" fill="hsl(var(--background))" />
    <text x="8.5" y="23" fontFamily="JetBrains Mono, monospace" fontWeight="700" fontSize="13" fill="hsl(var(--foreground))" textAnchor="middle">L</text>
    <text x="25.5" y="23" fontFamily="JetBrains Mono, monospace" fontWeight="700" fontSize="13" fill="hsl(var(--background))" textAnchor="middle">P</text>
  </svg>
);

const SiteNav = () => {
  const { pathname } = useLocation();
  const { lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[300] edge transition-all duration-500 ease-out-expo",
        scrolled
          ? "py-4 bg-background/85 backdrop-blur-md border-b border-hairline"
          : "py-7 bg-transparent border-b border-transparent"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo />
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase font-bold">
            Luca Pagliuso
          </span>
        </Link>

        <nav className="flex items-center gap-5 md:gap-8">
          <Link
            to="/"
            className={cn(
              "label link-underline transition-colors duration-300",
              pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {pick(ui.nav.index, lang)}
          </Link>
          <Link
            to="/projects"
            className={cn(
              "label link-underline transition-colors duration-300",
              pathname.startsWith("/projects")
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {pick(ui.nav.work, lang)}
          </Link>
          <a
            href="mailto:lucapagliuso50@gmail.com"
            className="hidden sm:inline label link-underline text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {pick(ui.nav.contact, lang)}
          </a>
          <LangToggle className="ml-1" />
        </nav>
      </div>
    </header>
  );
};

export default SiteNav;
