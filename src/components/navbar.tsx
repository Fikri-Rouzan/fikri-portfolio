"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { NAV_ITEMS } from "@/data/navigation";

const springTransition = {
  type: "spring" as const,
  stiffness: 380,
  damping: 28,
};

export function Navbar() {
  const pathname = usePathname();
  const [pillStyle, setPillStyle] = React.useState<{
    left: number;
    width: number;
    opacity: number;
  }>({ left: 0, width: 0, opacity: 0 });

  const navRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const activeIndex = NAV_ITEMS.findIndex((item) => item.href === pathname);
  const activeItem = activeIndex !== -1 ? NAV_ITEMS[activeIndex] : null;

  // Update pill position and size when the active item changes
  React.useEffect(() => {
    if (activeIndex !== -1 && navRefs.current[activeIndex]) {
      const el = navRefs.current[activeIndex];
      if (el) {
        setPillStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
          opacity: 1,
        });
      }
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [pathname, activeIndex]);

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-full border-2 border-border bg-secondary-background/60 backdrop-blur-none shadow-[4px_4px_0px_0px_var(--border)]">
        {/* Sliding pill */}
        {pillStyle.opacity > 0 && (
          <motion.div
            initial={false}
            animate={{
              left: pillStyle.left,
              width: pillStyle.width,
              opacity: pillStyle.opacity,
              backgroundColor: activeItem?.isSpecial
                ? "var(--foreground)"
                : "var(--main)",
            }}
            transition={springTransition}
            className="absolute top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 rounded-full border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] pointer-events-none"
          />
        )}

        {NAV_ITEMS.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <div
              key={item.href}
              ref={(el) => {
                navRefs.current[index] = el;
              }}
              className="relative group"
            >
              <Link
                href={item.href}
                aria-label={item.label}
                className={`relative z-10 flex items-center justify-center rounded-full font-mono text-xs sm:text-sm font-bold transition-transform duration-150 ${
                  isActive
                    ? item.isSpecial
                      ? "text-background px-4 sm:px-5 py-2 sm:py-2.5 gap-2"
                      : "text-white px-4 sm:px-5 py-2 sm:py-2.5 gap-2"
                    : item.isSpecial
                      ? "bg-foreground text-background w-10 h-10 sm:w-11 sm:h-11 hover:scale-105 border-2 border-border shadow-[2px_2px_0px_0px_var(--border)]"
                      : "text-foreground w-10 h-10 sm:w-11 sm:h-11 hover:bg-background/80"
                }`}
              >
                <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />

                {isActive && (
                  <span className="tracking-wide ml-0.5">{item.label}</span>
                )}
              </Link>

              {/* Tooltip */}
              {!isActive && (
                <span className="absolute -top-11 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-neutral-900 text-white text-[11px] font-mono rounded border border-border opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-[2px_2px_0px_0px_var(--border)]">
                  {item.label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
