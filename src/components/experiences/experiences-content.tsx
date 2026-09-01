"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Sparkles, Calendar, Building2 } from "lucide-react";
import { EXPERIENCES } from "@/data/experiences";

export function ExperiencesContent() {
  const sortedExperiences = React.useMemo(() => {
    return [...EXPERIENCES].sort((a, b) => b.id - a.id);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="py-4 sm:py-8"
    >
      {/* Header */}
      <div className="mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border-2 border-border bg-main text-white font-mono text-xs font-bold shadow-[2px_2px_0px_0px_var(--border)]">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          CAREER HIGHLIGHTS
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading tracking-tight mb-3">
          Experiences & Milestones
        </h1>
        <p className="font-mono text-sm text-foreground/80 max-w-xl">
          A timeline of my experiences and milestones where i have been involved
          in various roles, projects, and learning opportunities.
        </p>
      </div>

      {/* Vertical timeline container */}
      <div className="relative border-l-2 border-border ml-3 sm:ml-4 flex flex-col gap-8 sm:gap-10">
        {sortedExperiences.map((exp) => (
          <div key={exp.id} className="relative pl-6 sm:pl-8">
            {/* Timeline node */}
            <div className="absolute -left-px top-7 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full border-2 border-border bg-main shadow-[2px_2px_0px_0px_var(--border)] flex items-center justify-center z-10">
              <div className="w-3 h-3 rounded-full bg-background border border-border" />
            </div>

            {/* Experience card */}
            <div className="p-5 sm:p-6 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col gap-4">
              {/* Role & Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                <h2 className="font-heading font-bold text-lg sm:text-xl text-foreground">
                  {exp.role}
                </h2>
                <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm text-foreground/75 shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-main shrink-0" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Company & Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-foreground">
                  <Building2 className="w-4 h-4 text-foreground/70 shrink-0" />
                  <span className="text-foreground/60">{exp.company}</span>
                </div>
                <span className="w-fit px-2.5 py-0.5 rounded-base border-2 border-border bg-background text-foreground font-mono text-[11px] uppercase tracking-wider shadow-[2px_2px_0px_0px_var(--border)]">
                  {exp.type}
                </span>
              </div>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-foreground/85 leading-relaxed">
                {exp.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border/40">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded border border-border bg-background text-foreground font-mono text-[10px] font-bold shadow-[1px_1px_0px_0px_var(--border)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
