interface Props {
  className?: string;
  variant?: "full" | "mark";
  color?: "navy" | "ivory";
}

/**
 * Sol Mediterraneo brand mark — hand-drawn rising sun above a wordmark.
 * Recreated as inline SVG so it inherits color from CSS.
 */
export function Logo({ className, variant = "full", color = "navy" }: Props) {
  const stroke = color === "ivory" ? "var(--ivory)" : "var(--navy)";
  const gold = "var(--gold)";
  const rays = Array.from({ length: 19 });

  return (
    <div className={className} aria-label="Sol Mediterraneo Weddings Co.">
      <svg
        viewBox="0 0 200 60"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        role="img"
      >
        {/* Sun with rays */}
        <g transform="translate(100, 30)">
          {rays.map((_, i) => {
            const angle = -90 + (i - 9) * 9;
            const rad = (angle * Math.PI) / 180;
            const inner = 8;
            const outer = 8 + (i % 3 === 0 ? 18 : i % 2 === 0 ? 15 : 12);
            const x1 = Math.cos(rad) * inner;
            const y1 = Math.sin(rad) * inner;
            const x2 = Math.cos(rad) * outer;
            const y2 = Math.sin(rad) * outer;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={gold}
                strokeWidth="0.8"
                strokeLinecap="round"
              />
            );
          })}
          {/* Half circle base */}
          <path d="M -7 0 A 7 7 0 0 1 7 0" fill="none" stroke={gold} strokeWidth="1.1" strokeLinecap="round" />
        </g>
        {variant === "full" && (
          <>
            <text
              x="100"
              y="52"
              textAnchor="middle"
              fill={stroke}
              style={{ fontFamily: "var(--font-serif)", fontSize: "14px", letterSpacing: "0.01em" }}
            >
              Sol Mediterraneo
            </text>
          </>
        )}
      </svg>
    </div>
  );
}
