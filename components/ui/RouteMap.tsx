"use client";

import { mapNodes, heroCorridors, type MapNodeKey } from "@/lib/data";

// A stylized, low-poly continent silhouette used as a decorative
// wayfinding motif — not surveyed cartographic data.
const CONTINENT_PATH =
  "M150,8 C192,2 248,6 268,24 C298,42 328,56 344,90 C362,128 402,148 396,184 C390,214 358,224 353,254 C349,288 374,318 350,344 C330,366 320,394 300,414 C276,436 250,452 226,449 C206,447 200,424 190,404 C178,381 165,374 150,354 C138,337 145,314 130,297 C112,277 95,269 85,244 C72,214 90,194 78,167 C68,147 40,140 45,115 C50,92 75,84 96,70 C79,58 60,50 65,32 C70,15 112,12 150,8 Z";

function Node({
  x,
  y,
  label,
  delay,
}: {
  x: number;
  y: number;
  label: string;
  delay: number;
}) {
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={6}
        fill="#F97316"
        opacity={0.25}
        className="animate-pulse-dot"
        style={{ animationDelay: `${delay}s`, transformOrigin: `${x}px ${y}px` }}
      />
      <circle cx={x} cy={y} r={2.5} fill="#F97316" />
      <circle cx={x} cy={y} r={2.5} fill="none" stroke="#fff" strokeWidth={0.75} />
    </g>
  );
}

interface RouteMapProps {
  className?: string;
  variant?: "dark" | "light";
  interactive?: boolean;
}

export function RouteMap({ className, variant = "dark", interactive = true }: RouteMapProps) {
  const strokeColor = variant === "dark" ? "#38bdf8" : "#2563EB";
  const fillColor = variant === "dark" ? "rgba(148,163,184,0.10)" : "rgba(37,99,235,0.06)";
  const outlineColor = variant === "dark" ? "rgba(148,163,184,0.35)" : "rgba(37,99,235,0.25)";

  const activeNodes = new Set<MapNodeKey>();
  heroCorridors.forEach((c) => {
    activeNodes.add(c.from);
    activeNodes.add(c.to);
  });

  return (
    <svg
      viewBox="0 0 420 460"
      className={className}
      role="img"
      aria-label="Stylized map of Africa showing connected freight corridors"
    >
      <path d={CONTINENT_PATH} fill={fillColor} stroke={outlineColor} strokeWidth={1.5} />

      {heroCorridors.map((corridor, i) => {
        const from = mapNodes[corridor.from];
        const to = mapNodes[corridor.to];
        const midX = (from.x + to.x) / 2 + (i % 2 === 0 ? 14 : -14);
        const midY = (from.y + to.y) / 2 - 10;
        const path = `M${from.x},${from.y} Q${midX},${midY} ${to.x},${to.y}`;
        return (
          <g key={corridor.label}>
            <path
              d={path}
              fill="none"
              stroke={strokeColor}
              strokeWidth={1.25}
              strokeOpacity={0.35}
            />
            {interactive && (
              <path
                d={path}
                fill="none"
                stroke={strokeColor}
                strokeWidth={1.75}
                strokeDasharray="4 10"
                strokeLinecap="round"
                className="animate-dash-flow"
                style={{ animationDelay: `${i * 0.6}s` }}
              />
            )}
          </g>
        );
      })}

      {Array.from(activeNodes).map((key, i) => (
        <Node key={key} x={mapNodes[key].x} y={mapNodes[key].y} label={mapNodes[key].label} delay={i * 0.3} />
      ))}
    </svg>
  );
}
