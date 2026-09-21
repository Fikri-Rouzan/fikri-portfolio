"use client";

import { TECH_CATEGORIES } from "@/data/about";

export function TechStackSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative flex items-center justify-center my-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-border" />
        </div>
        <div className="relative px-4 bg-background font-mono text-xs sm:text-sm font-bold text-foreground/80 tracking-wider uppercase">
          Tech Stack
        </div>
      </div>

      {/* Tech stack grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {TECH_CATEGORIES.map((cat) => {
          const CategoryIcon = cat.icon;

          return (
            <div
              key={cat.category}
              className="p-5 sm:p-6 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col gap-4"
            >
              <h3 className="font-heading font-bold text-base sm:text-lg text-foreground flex items-center gap-2 border-b border-border/40 pb-2">
                {CategoryIcon && (
                  <CategoryIcon className="w-4.5 h-4.5 text-main shrink-0" />
                )}
                <span>{cat.category}</span>
              </h3>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-base border-2 border-border bg-background text-foreground shadow-[2px_2px_0px_0px_var(--border)] shrink-0"
                    >
                      {Icon && (
                        <Icon
                          className="w-4 h-4 shrink-0"
                          variant={skill.variant}
                        />
                      )}
                      <span className="font-mono text-xs font-bold whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
