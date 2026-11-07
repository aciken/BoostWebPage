import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import "./GlowButton.css";

type Common = { variant?: "primary" | "secondary"; size?: "md" | "sm"; children: ReactNode; className?: string };
type AsLink = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type AsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

/** DESIGN.md §6.1: dark capsule, warm light pooling from below, gradient rim. */
export function GlowButton(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", className = "", children, ...rest } = props;
  const cls = `glow-btn glow-btn--${variant} glow-btn--${size} ${className}`;
  const inner = <span className="glow-btn__label">{children}</span>;

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {inner}
    </button>
  );
}
