import Link from "next/link";
import { SOCIAL_CONTACTS } from "@/data/socials";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-2 border-border bg-secondary-background mt-auto">
      <div className="w-full px-4 sm:px-8 md:px-12 py-6 flex flex-col md:grid md:grid-cols-3 items-center gap-6">
        {/* Copyright */}
        <div className="text-xs sm:text-sm font-mono text-foreground text-center md:text-left md:justify-self-start order-1">
          © {currentYear} Muhammad Fikri Rouzan Ash Shidik
        </div>

        {/* Social contacts */}
        <div className="flex items-center gap-3 md:justify-self-center order-2">
          {SOCIAL_CONTACTS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  aria-label={item.ariaLabel}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="p-2.5 rounded-base border-2 border-border bg-background text-foreground shadow-[2px_2px_0px_0px_var(--border)] hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_var(--border)] hover:bg-main hover:text-white transition-all flex items-center justify-center cursor-pointer"
                >
                  <Icon
                    className="w-4 h-4"
                    {...(item.variant ? { variant: item.variant } : {})}
                  />
                </Link>
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-neutral-900 text-white text-[10px] font-mono rounded border border-border opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-10 shadow-[2px_2px_0px_0px_var(--border)] whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Open to work badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border-2 border-border bg-background shadow-[2px_2px_0px_0px_var(--border)] font-mono text-xs font-bold text-foreground md:justify-self-end order-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          OPEN TO WORK
        </div>
      </div>
    </footer>
  );
}
