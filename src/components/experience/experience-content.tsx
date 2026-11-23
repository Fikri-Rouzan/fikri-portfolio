"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { EXPERIENCES } from "@/data/experience";
import { BriefcaseBusiness, Calendar, Building2, FileText } from "lucide-react";

const MotionLink = motion.create(Link);

export function ExperienceContent() {
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
      <div className="mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 rounded-full border-2 border-border bg-main text-white font-mono text-[11px] sm:text-xs font-bold shadow-shadow-sm">
          <BriefcaseBusiness
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white"
            aria-hidden="true"
          />
          CAREER HIGHLIGHTS
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading tracking-tight mb-2 sm:mb-3 text-balance">
          Experiences & Milestones
        </h1>
        <p className="font-mono text-sm lg:text-base text-foreground/80 max-w-xl text-pretty">
          A timeline of my professional roles, key projects, and continuous
          learning journey.
        </p>
      </div>

      {/* Vertical timeline container */}
      <div className="relative border-l-2 border-border ml-3 sm:ml-4 flex flex-col gap-6 sm:gap-10">
        {sortedExperiences.map((exp) => (
          <div key={exp.id} className="relative pl-5 sm:pl-8">
            {/* Timeline node */}
            <div
              aria-hidden="true"
              className="absolute -left-px top-7 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-border bg-main shadow-shadow-sm flex items-center justify-center z-10"
            >
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-background border border-border" />
            </div>

            {/* Experience card */}
            <div className="p-4 sm:p-6 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col gap-3 sm:gap-4">
              {/* Role & Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                <h2 className="min-w-0 font-heading font-bold text-base sm:text-xl text-foreground text-balance">
                  {exp.role}
                </h2>
                <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm text-foreground/75 shrink-0">
                  <Calendar
                    className="w-3.5 h-3.5 text-main shrink-0"
                    aria-hidden="true"
                  />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Company & Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-foreground">
                  <Building2
                    className="w-4 h-4 text-foreground/70 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-foreground/75">{exp.company}</span>
                </div>
                <span className="w-fit px-2.5 py-0.5 rounded-base border-2 border-border bg-background text-foreground font-mono text-[11px] sm:text-xs uppercase tracking-wider shadow-shadow-sm">
                  {exp.type}
                </span>
              </div>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base text-foreground/85 leading-relaxed text-pretty">
                {exp.description}
              </p>

              {/* Skills */}
              <ul className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                {exp.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-2 py-0.5 rounded border border-border bg-background text-foreground font-mono text-[11px] sm:text-xs shadow-shadow-xs"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              {/* View certificate */}
              {exp.certificateSlug && (
                <div className="pt-1">
                  <MotionLink
                    href={`/preview/${exp.certificateSlug}`}
                    whileHover={{
                      x: -1,
                      y: -2,
                      transition: { duration: 0.15, ease: "easeOut" },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-fit px-3 py-1.5 rounded-base border-2 border-border bg-main text-white font-mono text-xs sm:text-sm shadow-shadow-sm hover:shadow-shadow flex items-center gap-1.5 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>View Certificate</span>
                  </MotionLink>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
