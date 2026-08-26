"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  ExternalLink,
  Sparkles,
  FolderSearch,
  ChevronDown,
} from "lucide-react";
import { Github } from "@thesvg/react";
import { PROJECTS, PROJECT_CATEGORIES, ProjectCategory } from "@/data/projects";

const INITIAL_VISIBLE_COUNT = 6;

export function ProjectsContent() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<
    "All" | ProjectCategory
  >("All");
  const [visibleCount, setVisibleCount] = React.useState(INITIAL_VISIBLE_COUNT);

  // Sort projects by ID in descending order
  const sortedProjects = React.useMemo(() => {
    return [...PROJECTS].sort((a, b) => b.id - a.id);
  }, []);

  // Filtered projects based on search query and selected category
  const filteredProjects = React.useMemo(() => {
    return sortedProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch = project.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [sortedProjects, selectedCategory, searchQuery]);

  const displayedProjects = React.useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const handleCategoryChange = (category: "All" | ProjectCategory) => {
    setSelectedCategory(category);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const hasMore = visibleCount < filteredProjects.length;

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="py-4 sm:py-8"
    >
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border-2 border-border bg-main text-white font-mono text-xs font-bold shadow-[2px_2px_0px_0px_var(--border)]">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          Featured Projects
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading tracking-tight mb-3">
          Crafted with Passion.
        </h1>
        <p className="font-mono text-sm text-foreground/80 max-w-xl">
          A collection of projects that I have worked on, showcasing my skills
          and expertise in various domains.
        </p>
      </div>

      {/* Search bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-foreground/50">
          <Search className="w-4 h-4" />
        </div>
        <input
          id="project-search"
          name="project-search"
          type="search"
          autoComplete="off"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search projects by name..."
          className="w-full pl-11 pr-4 py-3 rounded-base border-2 border-border bg-secondary-background text-foreground font-sans text-sm placeholder:text-foreground/40 focus:outline-none focus:shadow-shadow"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 border-b-2 border-border scrollbar-none">
        {PROJECT_CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`relative px-4 py-2 font-mono text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer ${
                isActive
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {category}
              {isActive && (
                <motion.div
                  layoutId="active-project-tab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-main border-t border-border"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Meta bar */}
      <div className="flex items-center justify-between mb-6 font-mono text-xs sm:text-sm">
        <h2 className="font-heading text-lg sm:text-xl text-foreground">
          {selectedCategory === "All"
            ? "All Projects"
            : `${selectedCategory} Projects`}
        </h2>
        <span className="text-foreground/70">
          {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"} found
        </span>
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="p-10 sm:p-14 rounded-base border-2 border-border bg-secondary-background shadow-shadow flex flex-col items-center justify-center text-center my-8">
          <div className="p-3 rounded-base border-2 border-border bg-background mb-4">
            <FolderSearch className="w-8 h-8 text-foreground/60" />
          </div>
          <h3 className="font-heading text-lg mb-2">No Projects Found</h3>
          <p className="font-mono text-xs sm:text-sm text-foreground/70 max-w-sm">
            Try adjusting your search query or select another category filter.
          </p>
        </div>
      )}

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              whileHover={{
                x: -2,
                y: -4,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              className="rounded-base border-2 border-border bg-secondary-background shadow-shadow hover:shadow-[6px_6px_0px_0px_var(--border)] flex flex-col overflow-hidden group"
            >
              {/* Banner image */}
              <div className="relative aspect-video w-full border-b-2 border-border overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                {/* Year badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-base border-2 border-border bg-main text-white font-mono text-xs font-bold shadow-[2px_2px_0px_0px_var(--border)]">
                  {project.year}
                </div>
              </div>

              {/* Action bar */}
              <div className="px-5 pt-4 pb-2 flex items-center justify-between gap-2 border-b border-border/40">
                <span className="px-2.5 py-1 rounded-base border-2 border-border bg-background text-foreground font-mono text-[11px] tracking-wider uppercase shadow-[2px_2px_0px_0px_var(--border)]">
                  {project.category}
                </span>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub Repository`}
                      whileHover={{
                        x: -1,
                        y: -2,
                        transition: { duration: 0.15, ease: "easeOut" },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-base border-2 border-border bg-background text-foreground hover:bg-main hover:text-white shadow-[2px_2px_0px_0px_var(--border)] hover:shadow-[3px_3px_0px_0px_var(--border)] flex items-center justify-center cursor-pointer"
                    >
                      <Github variant="mono" className="w-3.5 h-3.5" />
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Demo`}
                      whileHover={{
                        x: -1,
                        y: -2,
                        transition: { duration: 0.15, ease: "easeOut" },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-base border-2 border-border bg-background text-foreground hover:bg-main hover:text-white shadow-[2px_2px_0px_0px_var(--border)] hover:shadow-[3px_3px_0px_0px_var(--border)] flex items-center justify-center cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content body */}
              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-foreground/80 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded border border-border bg-background text-foreground font-mono text-[10px] shadow-[1px_1px_0px_0px_var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show more button */}
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <motion.button
            onClick={() =>
              setVisibleCount((prev) => prev + INITIAL_VISIBLE_COUNT)
            }
            whileHover={{
              x: -2,
              y: -4,
              transition: { duration: 0.15, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-base border-2 border-border bg-secondary-background text-foreground hover:bg-main hover:text-white font-mono text-xs sm:text-sm font-bold shadow-shadow hover:shadow-[6px_6px_0px_0px_var(--border)] flex items-center gap-2 cursor-pointer"
          >
            <span>SHOW MORE</span>
            <ChevronDown className="w-4 h-4" />
          </motion.button>
        </div>
      )}
    </motion.section>
  );
}
