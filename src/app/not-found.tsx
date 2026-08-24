import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] text-center gap-6">
      <div className="p-8 sm:p-12 rounded-base border-2 border-border bg-secondary-background shadow-shadow max-w-md w-full">
        <div className="inline-block px-3 py-1 mb-4 rounded-full border-2 border-border bg-chart-2 text-white font-mono text-xs font-bold shadow-[2px_2px_0px_0px_var(--border)]">
          ERROR 404
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading mb-2 tracking-tight">
          LOST IN SPACE?
        </h1>
        <p className="text-sm font-mono text-foreground/80 mb-6">
          Placeholder content.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-base border-2 border-border bg-main text-white font-mono text-sm font-bold shadow-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
