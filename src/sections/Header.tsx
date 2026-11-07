import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "../components/BrandMark";
import { GlowButton } from "../components/GlowButton";
import { APP_STORE_URL, NAV_LINKS } from "../content";
import "./Header.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`header ${scrolled || open ? "header--solid" : ""}`}>
      <div className="container header__inner">
        <a href="#top" className="header__brand" aria-label="Boost home">
          <BrandMark size={32} />
          <span>Boost</span>
        </a>

        <nav className="header__nav" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <GlowButton href={APP_STORE_URL} variant="secondary" size="sm" className="header__cta">
            Get the app
          </GlowButton>
          <button
            className="header__menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className={`header__sheet ${open ? "is-open" : ""}`} aria-label="Mobile" hidden={!open}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
