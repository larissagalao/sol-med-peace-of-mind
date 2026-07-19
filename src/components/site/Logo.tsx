import brandMark from "@/assets/brand-mark.png";

interface Props {
  className?: string;
  variant?: "full" | "mark";
  color?: "navy" | "ivory";
}

/**
 * Sol Mediterraneo brand mark — the hand-drawn rising sun supplied by the
 * client. The PNG is served from the CDN via lovable-assets so we render it
 * as an <img>. For the ivory variant on dark backgrounds we invert the
 * gold to a pale tone using a CSS filter that preserves the sun's texture.
 */
export function Logo({ className, variant = "full", color = "navy" }: Props) {
  const src = brandMark;
  // The source PNG is warm gold on transparent. On dark surfaces we lift it
  // toward ivory; on light surfaces we let the gold shine as-is.
  const filter =
    color === "ivory"
      ? "brightness(0) saturate(100%) invert(94%) sepia(9%) saturate(400%) hue-rotate(3deg) brightness(103%)"
      : undefined;

  if (variant === "mark") {
    return (
      <img
        src={src}
        alt="Sol Mediterraneo Weddings Co."
        className={className}
        style={{ filter, objectFit: "contain" }}
        draggable={false}
      />
    );
  }

  const wordColor = color === "ivory" ? "var(--ivory)" : "var(--navy)";

  return (
    <div className={`flex flex-col items-center ${className ?? ""}`} aria-label="Sol Mediterraneo Weddings Co.">
      <img
        src={src}
        alt=""
        className="w-full h-auto"
        style={{ filter, objectFit: "contain" }}
        draggable={false}
      />
      <span
        className="font-serif tracking-[0.18em] uppercase mt-2"
        style={{ color: wordColor, fontSize: "0.72rem" }}
      >
        Sol Mediterraneo
      </span>
    </div>
  );
}
