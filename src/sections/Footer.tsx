import { BrandMark } from "../components/BrandMark";
import { DISCLAIMER } from "../content";
import "./Footer.css";

// TODO: point these at real pages.
const LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "mailto:support@example.com", label: "Support" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <a href="#top" className="footer__brand" aria-label="Back to top">
            <BrandMark size={28} />
            <span>Boost</span>
          </a>
          <nav className="footer__links" aria-label="Footer">
            {LINKS.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="footer__disclaimer">{DISCLAIMER}</p>
        <p className="footer__copy">© {new Date().getFullYear()} Boost. All rights reserved.</p>
      </div>
    </footer>
  );
}
