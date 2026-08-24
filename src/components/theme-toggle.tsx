"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

function useMounted() {
  return React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-base border-2 border-border bg-background shadow-[2px_2px_0px_0px_var(--border)] opacity-0" />
    );
  }

  return (
    <div className="relative group">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle Theme"
        className="w-9 h-9 rounded-base border-2 border-border bg-background text-foreground shadow-[2px_2px_0px_0px_var(--border)] hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_var(--border)] hover:bg-main hover:text-white transition-all flex items-center justify-center cursor-pointer"
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </button>

      {/* Tooltip */}
      <span className="absolute -bottom-8 right-0 sm:left-1/2 sm:-translate-x-1/2 sm:right-auto px-2 py-0.5 bg-neutral-900 text-white text-[10px] font-mono rounded border border-border opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-10 shadow-[2px_2px_0px_0px_var(--border)] whitespace-nowrap">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </span>
    </div>
  );
}
