"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  GraduationCap,
  Award,
  Calendar,
  Building2,
  FileText,
} from "lucide-react";
import { EDUCATION_DATA, CERTIFICATION_DATA } from "@/data/about";

export function MilestonesSection() {
  const [activeTab, setActiveTab] = React.useState<
    "education" | "certification"
  >("education");

  const sortedCertifications = React.useMemo(() => {
    return [...CERTIFICATION_DATA].sort((a, b) => b.id - a.id);
  }, []);

  return (
    <div className="flex flex-col gap-6 my-6">
      <div className="relative flex items-center justify-center my-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-border" />
        </div>
        <div className="relative px-4 bg-background font-mono text-xs sm:text-sm font-bold text-foreground/80 tracking-wider uppercase">
          Milestones & Achievements
        </div>
      </div>

      {/* Tab navigation bar */}
      <div className="w-full overflow-x-auto scrollbar-none pb-2 -mb-2">
        <div className="flex items-center gap-3 min-w-max">
          <motion.button
            type="button"
            onClick={() => setActiveTab("education")}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-base font-mono text-xs sm:text-sm font-bold border-2 cursor-pointer ${
              activeTab === "education"
                ? "border-border bg-main text-white shadow-[2px_2px_0px_0px_var(--border)]"
                : "border-border bg-secondary-background text-foreground shadow-[2px_2px_0px_0px_var(--border)] hover:bg-background"
            }`}
          >
            <GraduationCap className="w-4 h-4 shrink-0" />
            <span>Education</span>
          </motion.button>

          <motion.button
            type="button"
            onClick={() => setActiveTab("certification")}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-base font-mono text-xs sm:text-sm font-bold border-2 cursor-pointer ${
              activeTab === "certification"
                ? "border-border bg-main text-white shadow-[2px_2px_0px_0px_var(--border)]"
                : "border-border bg-secondary-background text-foreground shadow-[2px_2px_0px_0px_var(--border)] hover:bg-background"
            }`}
          >
            <Award className="w-4 h-4 shrink-0" />
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
                className="p-5 sm:p-6 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col gap-4"
              >
                {/* Univ Name & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                  <h2 className="font-heading font-bold text-lg sm:text-xl text-foreground">
                    {edu.university}
                  </h2>
                  <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm text-foreground/75 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-main shrink-0" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Major & GPA */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                  <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-main">
                    <GraduationCap className="w-4 h-4 shrink-0" />
                    <span>{edu.major}</span>
                  </div>
                  <div className="w-fit px-2.5 py-0.5 rounded-base border-2 border-border bg-background font-mono text-xs font-bold shadow-[2px_2px_0px_0px_var(--border)]">
                    GPA: {edu.gpa}
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-foreground/85 leading-relaxed pt-2 border-t border-border/40">
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
                className="p-5 sm:p-6 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col gap-4"
              >
                {/* Title */}
                <h2 className="font-heading font-bold text-lg sm:text-xl text-foreground">
                  {cert.title}
                </h2>

                {/* Issuer organization */}
                <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-foreground/80">
                  <Building2 className="w-4 h-4 text-foreground/70 shrink-0" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Issue date */}
                <div className="flex items-center gap-1.5 font-mono text-xs text-foreground/60">
                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                  <span>{cert.issueDate}</span>
                </div>

                {/* Skills pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded border border-border bg-background text-foreground font-mono text-[10px] shadow-[1px_1px_0px_0px_var(--border)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View certificate */}
                <div className="pt-1">
                  <motion.a
                    href={`/preview/${cert.slug}`}
                    rel="noopener noreferrer"
                    whileHover={{
                      x: -1,
                      y: -2,
                      transition: { duration: 0.15, ease: "easeOut" },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-fit px-3 py-1.5 rounded-base border-2 border-border bg-main text-white font-mono text-xs shadow-[2px_2px_0px_0px_var(--border)] hover:shadow-[4px_4px_0px_0px_var(--border)] flex items-center gap-1.5 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </motion.a>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
