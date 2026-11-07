import { useEffect, useRef, useState } from "react";

/** True once the element has entered the viewport (fires once). */
export function useInView<T extends Element>(
  options: IntersectionObserverInit = { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, [inView]);

  return [ref, inView] as const;
}
