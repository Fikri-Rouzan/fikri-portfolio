"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/data/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-full border-2 border-border bg-secondary-background/60 backdrop-blur-none shadow-[4px_4px_0px_0px_var(--border)]">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          // Contact menu
          if (item.isSpecial) {
            return (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={`flex items-center justify-center rounded-full transition-all duration-300 font-mono text-sm font-bold border-2 border-border ${
                    isActive
                      ? "bg-foreground text-background px-4 sm:px-5 py-2 sm:py-2.5 shadow-[2px_2px_0px_0px_var(--border)] gap-2"
                      : "bg-foreground text-background w-10 h-10 sm:w-11 sm:h-11 hover:scale-105 hover:shadow-[2px_2px_0px_0px_var(--border)]"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {isActive && <span className="ml-1">{item.label}</span>}
                </Link>

                {!isActive && (
                  <span className="absolute -top-11 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-neutral-900 text-white text-[11px] font-mono rounded border border-border opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-[2px_2px_0px_0px_var(--border)]">
                    {item.label}
                  </span>
                )}
              </div>
            );
          }

          // Navigation menu
          return (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                aria-label={item.label}
                className={`flex items-center justify-center rounded-full transition-all duration-300 font-mono text-sm font-bold ${
                  isActive
                    ? "bg-main text-white px-4 sm:px-5 py-2 sm:py-2.5 border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] gap-2"
                    : "text-foreground w-10 h-10 sm:w-11 sm:h-11 hover:bg-background/80 hover:-translate-y-0.5"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {isActive && (
                  <span className="tracking-wide ml-1">{item.label}</span>
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
