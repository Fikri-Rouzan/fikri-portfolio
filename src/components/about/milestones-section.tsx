"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { EDUCATION_DATA, CERTIFICATION_DATA } from "@/data/about";
import {
  GraduationCap,
  Award,
  Calendar,
  Building2,
  FileText,
} from "lucide-react";

const MotionLink = motion.create(Link);

const TAB_CLASS =
  "flex items-center gap-2 px-4 py-2.5 rounded-base font-mono text-xs sm:text-sm font-bold border-2 border-border shadow-shadow-sm cursor-pointer";

export function MilestonesSection() {
  const [activeTab, setActiveTab] = React.useState<
    "education" | "certification"
  >("education");

  const sortedCertifications = React.useMemo(() => {
    return [...CERTIFICATION_DATA].sort((a, b) => b.id - a.id);
  }, []);

  return (
    <div className="flex flex-col gap-5 sm:gap-6 my-4 sm:my-6">
      <div className="relative flex items-center justify-center my-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-border" />
        </div>
        <h2 className="relative px-4 bg-background font-mono text-xs sm:text-sm font-bold text-foreground/80 tracking-wider uppercase">
          Milestones & Achievements
        </h2>
      </div>

      {/* Tab navigation bar */}
      <div className="w-full overflow-x-auto scrollbar-none pb-2 -mb-2">
        <div
          role="group"
          aria-label="Milestone categories"
          className="flex items-center gap-3 min-w-max"
        >
          <motion.button
            type="button"
            onClick={() => setActiveTab("education")}
            aria-pressed={activeTab === "education"}
            whileTap={{ scale: 0.95 }}
            className={`${TAB_CLASS} ${
              activeTab === "education"
                ? "bg-main text-white"
                : "bg-secondary-background text-foreground hover:bg-background"
            }`}
          >
            <GraduationCap className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Education</span>
          </motion.button>

          <motion.button
            type="button"
            onClick={() => setActiveTab("certification")}
            aria-pressed={activeTab === "certification"}
            whileTap={{ scale: 0.95 }}
            className={`${TAB_CLASS} ${
              activeTab === "certification"
                ? "bg-main text-white"
                : "bg-secondary-background text-foreground hover:bg-background"
            }`}
          >
            <Award className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Certifications</span>
          </motion.button>
        </div>
      </div>

      {/* Tab content display */}
      <AnimatePresence mode="wait">
        {activeTab === "education" ? (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-4"
          >
            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.id}
                className="p-4 sm:p-6 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col gap-3 sm:gap-4"
              >
                {/* Univ Name & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                  <h3 className="min-w-0 font-heading font-bold text-base sm:text-xl text-foreground text-balance">
                    {edu.university}
                  </h3>
                  <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm text-foreground/75 shrink-0">
                    <Calendar
                      className="w-3.5 h-3.5 text-main shrink-0"
                      aria-hidden="true"
                    />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Major & GPA */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                  <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-main">
                    <GraduationCap
                      className="w-4 h-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{edu.major}</span>
                  </div>
                  <div className="w-fit px-2.5 py-0.5 rounded-base border-2 border-border bg-background font-mono text-xs font-bold shadow-shadow-sm tabular-nums">
                    GPA: {edu.gpa}
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base text-foreground/85 leading-relaxed pt-2 border-t border-border/40 text-pretty">
                  {edu.description}
                </p>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="certification"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-4"
          >
            {sortedCertifications.map((cert) => (
              <div
                key={cert.id}
                className="p-4 sm:p-6 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col gap-3 sm:gap-4"
              >
                {/* Title */}
                <h3 className="font-heading font-bold text-base sm:text-xl text-foreground text-balance">
                  {cert.title}
                </h3>

                {/* Issuer organization */}
                <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-foreground/80">
                  <Building2
                    className="w-4 h-4 text-foreground/70 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{cert.issuer}</span>
                </div>

                {/* Issue date */}
                <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm text-foreground/70">
                  <Calendar
                    className="w-3.5 h-3.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{cert.issueDate}</span>
                </div>

                {/* Skills pills */}
                <ul className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                  {cert.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-2 py-0.5 rounded border border-border bg-background text-foreground font-mono text-[11px] sm:text-xs shadow-shadow-xs"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                {/* View certificate */}
                <div className="pt-1">
                  <MotionLink
                    href={`/preview/${cert.slug}`}
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
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
