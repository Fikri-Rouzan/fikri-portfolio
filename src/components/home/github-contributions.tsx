"use client";

import * as React from "react";
import Image from "next/image";

export function GithubContributions() {
  const username = "Fikri-Rouzan";
  const [totalContributions, setTotalContributions] = React.useState<
    number | null
  >(null);

  // Fetch GitHub contributions data from the API
  React.useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
        );
        if (res.ok) {
          const data = await res.json();
          if (data && data.total) {
            const lastYearTotal =
              data.total.lastYear ?? Object.values(data.total)[0] ?? null;
            setTotalContributions(lastYearTotal);
          }
        }
      } catch {
        setTotalContributions(null);
      }
    }
    fetchContributions();
  }, [username]);

  return (
    <div className="w-full">
      <div className="relative flex items-center justify-center my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-border" />
        </div>
        <div className="relative px-4 bg-background font-mono text-xs sm:text-sm font-bold text-foreground/80 tracking-wider uppercase">
          GitHub Contributions
        </div>
      </div>

      {/* Card container */}
      <div className="p-5 sm:p-6 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col gap-5">
        {/* Card header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-border pb-4">
          <span className="font-mono text-xs sm:text-sm font-bold text-foreground/70">
            GitHub Contributions
          </span>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs sm:text-sm text-foreground/80 hover:text-main hover:underline cursor-pointer w-fit"
          >
            @{username}
          </a>
        </div>

        {/* Contribution graph */}
        <div className="w-full overflow-x-auto pt-2 pb-1 scrollbar-none flex justify-center">
          <Image
            src={`https://ghchart.rshah.org/4070f4/${username}`}
            alt={`${username}'s GitHub Contributions`}
            width={650}
            height={110}
            unoptimized
            priority
            className="min-w-162.5 w-full max-w-full h-auto filter dark:invert dark:hue-rotate-180 contrast-125"
          />
        </div>

        {/* Total contributions */}
        <div className="flex items-center justify-between pt-2 font-mono text-xs text-foreground/80 border-t border-border/40 min-h-7">
          {totalContributions !== null && (
            <div>
              <span className="font-bold text-foreground">
                {totalContributions}
              </span>{" "}
              contributions in the last year
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
