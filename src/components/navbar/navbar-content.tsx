"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, LayoutGroup } from "motion/react";
import { NAV_ITEMS } from "@/data/navigation";

const springTransition = {
  type: "spring" as const,
  stiffness: 380,
  damping: 28,
};

export function NavbarContent() {
  const pathname = usePathname();

  if (pathname.startsWith("/preview")) {
    return null;
  }

  return (
    <LayoutGroup id="navbar-pill-group">
      <nav
        aria-label="Main"
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] sm:bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-1rem)]"
      >
        <div className="flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-full border-2 border-border bg-secondary-background shadow-shadow">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  aria-label={item.label}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative z-10 flex items-center justify-center rounded-full font-mono text-xs sm:text-sm font-bold transition-transform duration-150 ${
                    isActive
                      ? item.isSpecial
                        ? "text-background px-3.5 sm:px-4 h-9 sm:h-10 gap-2"
                        : "text-white px-3.5 sm:px-4 h-9 sm:h-10 gap-2"
                      : item.isSpecial
                        ? "bg-foreground text-background size-9 sm:size-10 hover:scale-105 border-2 border-border shadow-shadow-sm"
                        : "text-foreground size-9 sm:size-10 hover:bg-background"
                  }`}
                >
                  {/* Active navigation pill */}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      layout="x"
                      transition={springTransition}
                      className={`absolute inset-0 rounded-full border-2 border-border shadow-shadow-sm -z-10 ${
                        item.isSpecial ? "bg-foreground" : "bg-main"
                      }`}
                    />
                  )}

                  <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />

                  {isActive && (
                    <span className="tracking-wide ml-0.5">{item.label}</span>
                  )}
                </Link>

                {/* Tooltip */}
                {!isActive && (
                  <span
                    aria-hidden="true"
                    className="hidden sm:block absolute -top-11 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-neutral-900 text-white text-xs font-mono rounded border border-border opacity-0 pointer-events-none group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity whitespace-nowrap shadow-shadow-sm"
                  >
                    {item.label}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </LayoutGroup>
  );
}
