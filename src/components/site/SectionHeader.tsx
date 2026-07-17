import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string | ReactNode;
  body?: string | ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ eyebrow, title, body, align = "left", className = "" }: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && <div className={`eyebrow mb-5 ${align === "center" ? "flex justify-center" : ""}`}>{eyebrow}</div>}
      <h2 className="text-balance">{title}</h2>
      {body && (
        <div className={`mt-6 text-lg text-navy/75 leading-relaxed ${align === "center" ? "mx-auto" : ""}`}>
          {typeof body === "string" ? <p>{body}</p> : body}
        </div>
      )}
    </div>
  );
}

export function SectionDivider() {
  return <hr className="hairline mx-auto my-16" />;
}
