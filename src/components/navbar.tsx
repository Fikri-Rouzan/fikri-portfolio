"use client";

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

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-full border-2 border-border bg-secondary-background/60 backdrop-blur-none shadow-[4px_4px_0px_0px_var(--border)]">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          // Navigation Menu
          return (
            <div key={item.href} className="relative group">
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
                {/* Active navigation pill */}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    transition={springTransition}
                    className={`absolute inset-0 rounded-full border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] -z-10 ${
                      item.isSpecial ? "bg-foreground" : "bg-main"
                    }`}
                  />
                )}

                <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />

                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                    className="tracking-wide ml-0.5"
                  >
                    {item.label}
                  </motion.span>
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
