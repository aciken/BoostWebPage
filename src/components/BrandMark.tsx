import "./BrandMark.css";

/** App icon tile. TODO: swap /rocket-mark.png for the real 1024px app icon when exported. */
export function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <span className="brand-mark" style={{ width: size, height: size }} aria-hidden="true">
      <img src="/rocket-mark.png" alt="" width={size} height={size} />
    </span>
  );
}
