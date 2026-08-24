import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border bg-secondary-background/90 backdrop-blur-md">
      <div className="w-full px-4 sm:px-8 md:px-12 h-16 flex md:grid md:grid-cols-3 items-center justify-between">
        {/* Logo */}
        <div className="md:justify-self-start">
          <Link
            href="/"
            className="font-heading font-bold text-lg sm:text-xl tracking-tight text-foreground hover:opacity-80 transition-opacity"
          >
            MFRAS
          </Link>
        </div>

        {/* Open to work badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full border-2 border-border bg-background shadow-[2px_2px_0px_0px_var(--border)] font-mono text-xs text-foreground md:justify-self-center">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          OPEN TO WORK
        </div>

        {/* Theme toggle */}
        <div className="flex items-center gap-3 md:justify-self-end">
          {/* Badge for mobile */}
          <div className="flex md:hidden items-center gap-1.5 px-2.5 py-1 rounded-full border-2 border-border bg-background shadow-[2px_2px_0px_0px_var(--border)] text-[10px] font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            OPEN
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
