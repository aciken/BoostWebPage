import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Props = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  index?: number;
  children: ReactNode;
};

/** Fades/blur-scales children in once they enter the viewport. `index` staggers siblings by 80ms. */
export function Reveal({ as: Tag = "div", index = 0, className = "", style, children, ...rest }: Props) {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--i": index, ...style } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}
