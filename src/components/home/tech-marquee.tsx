"use client";

import { MARQUEE_ROW_1, MARQUEE_ROW_2, TechStackItem } from "@/data/marquee";

function MarqueeRow({
  items,
  direction = "left",
}: {
  items: TechStackItem[];
  direction?: "left" | "right";
}) {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative flex overflow-hidden group select-none py-2"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div
        className={`flex min-w-full shrink-0 gap-3 items-center ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        } group-hover:paused`}
      >
        {duplicatedItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow-sm shrink-0"
            >
              <Icon className="w-4 h-4 shrink-0" variant={item.variant} />
              <span className="font-mono text-xs sm:text-sm font-bold whitespace-nowrap">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <div className="w-full flex flex-col gap-3 py-2 my-2 overflow-hidden">
      <div className="relative flex items-center justify-center my-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-border" />
        </div>
        <div className="relative px-4 bg-background font-mono text-xs sm:text-sm font-bold text-foreground/80 tracking-wider uppercase">
          Tech Stack
        </div>
      </div>

      <MarqueeRow items={MARQUEE_ROW_1} direction="left" />
      <MarqueeRow items={MARQUEE_ROW_2} direction="right" />
    </div>
  );
}
