import { useState } from "react";
import "./PhoneFrame.css";

type Props = {
  src: string;
  alt: string;
  /** Shown in the placeholder until the real screenshot exists. */
  placeholder: string;
  className?: string;
};

/** Dark iPhone frame for real app screenshots, lit from below with amber. */
export function PhoneFrame({ src, alt, placeholder, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`phone ${className}`}>
      <div className="phone__glow" aria-hidden="true" />
      <div className="phone__body">
        <div className="phone__screen">
          {!failed ? (
            <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} />
          ) : (
            <div className="phone__placeholder" role="img" aria-label={alt}>
              <span className="eyebrow">Screenshot</span>
              <span>{placeholder}</span>
              <code>{src}</code>
            </div>
          )}
          <span className="phone__island" aria-hidden="true" />
        </div>
      </div>
    </figure>
  );
}
