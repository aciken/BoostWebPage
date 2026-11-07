import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import "./GlassCard.css";

type Props = HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "lg";
  warm?: boolean;
  glow?: "normal" | "soft" | "none";
    children: ReactNode;
  style?: CSSProperties;
};

/** DESIGN.md §6.2: dark glass lit from below with a gradient rim light. */
export function GlassCard({ size = "sm", warm, glow = "normal", className = "", children, ...rest }: Props) {
  return (
    <div className={`glass glass--${size} glass--glow-${glow} ${warm ? "glass--warm" : ""} ${className}`} {...rest}>
      {children}
    </div>
  );
}
