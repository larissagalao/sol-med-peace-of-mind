interface Props {
  className?: string;
  variant?: "full" | "mark";
  color?: "navy" | "ivory";
}

/**
 * Sol Mediterraneo brand mark — hand-drawn rising sun above a wordmark.
 * The sun is intentionally the dominant element: it should read as a
 * distinctive brand signature at every size.
 */
export function Logo({ className, variant = "full", color = "navy" }: Props) {
  const stroke = color === "ivory" ? "var(--ivory)" : "var(--navy)";
  const gold = "var(--gold)";
  const rays = Array.from({ length: 19 });

  // Mark variant → square viewBox for a large, punchy sun.
  if (variant === "mark") {
    return (
      <div className={className} aria-label="Sol Mediterraneo Weddings Co.">
        <svg
          viewBox="0 0 60 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          role="img"
        >
          <g transform="translate(30, 34)">
            {rays.map((_, i) => {
              const angle = -90 + (i - 9) * 9;
              const rad = (angle * Math.PI) / 180;
              const inner = 12;
              const outer = 12 + (i % 3 === 0 ? 18 : i % 2 === 0 ? 15 : 12);
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
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              );
            })}
            <path d="M -11 0 A 11 11 0 0 1 11 0" fill="none" stroke={gold} strokeWidth="1.6" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    );
  }

  // Full variant → sun above wordmark, sun enlarged for stronger presence.
  return (
    <div className={className} aria-label="Sol Mediterraneo Weddings Co.">
      <svg
        viewBox="0 0 200 90"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        role="img"
      >
        <g transform="translate(100, 42)">
          {rays.map((_, i) => {
            const angle = -90 + (i - 9) * 9;
            const rad = (angle * Math.PI) / 180;
            const inner = 14;
            const outer = 14 + (i % 3 === 0 ? 22 : i % 2 === 0 ? 18 : 14);
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
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            );
          })}
          <path d="M -13 0 A 13 13 0 0 1 13 0" fill="none" stroke={gold} strokeWidth="1.6" strokeLinecap="round" />
        </g>
        <text
          x="100"
          y="82"
          textAnchor="middle"
          fill={stroke}
          style={{ fontFamily: "var(--font-serif)", fontSize: "14px", letterSpacing: "0.01em" }}
        >
          Sol Mediterraneo
        </text>
      </svg>
    </div>
  );
}
