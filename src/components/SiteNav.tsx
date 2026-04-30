import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage, pick } from "@/i18n/LanguageContext";
import { ui } from "@/i18n/translations";
import LangToggle from "@/components/LangToggle";

const Logo = () => (
  <span className="flex items-baseline gap-2 leading-none">
    <span aria-hidden className="text-[22px] md:text-[26px] text-[#C8A96E] leading-none">✦</span>
    <span className="flex flex-col leading-none">
      <span className="font-display italic font-light text-[20px] md:text-[24px] text-foreground leading-none">
        Luca Pagliuso
      </span>
      <span className="font-mono text-[8px] md:text-[9px] tracking-[0.25em] uppercase text-foreground/30 mt-1">
        Growth Analyst
      </span>
    </span>
  </span>
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
        <Link to="/" className="flex items-center group" aria-label="Luca Pagliuso — Growth Analyst">
          <Logo />
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
            href="mailto:lucapagliuso@hotmail.com"
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
