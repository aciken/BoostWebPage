import type { ReactNode } from "react";
import "./Chip.css";

/** DESIGN.md §6.3 */
export function Chip({ children, missed, className = "" }: { children: ReactNode; missed?: boolean; className?: string }) {
  return <span className={`chip ${missed ? "chip--missed" : ""} ${className}`}>{children}</span>;
}
