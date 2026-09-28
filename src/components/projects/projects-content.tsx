"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS, PROJECT_CATEGORIES, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectEmptyState } from "@/components/projects/project-empty-state";
import { Search, Folder, ChevronDown } from "lucide-react";

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
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border-2 border-border bg-main text-white font-mono text-xs font-bold shadow-shadow-sm">
          <Folder className="w-3.5 h-3.5 text-white" />
          FEATURED PROJECTS
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading tracking-tight mb-3">
          Crafted with Passion.
        </h1>
        <p className="font-mono text-sm text-foreground/80 max-w-xl">
          A curated collection of my work, highlighting technical skills and
          practical solutions across various domains.
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

      {/* Category tabs */}
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-6 font-mono text-xs sm:text-sm">
        <h2 className="font-heading text-lg sm:text-xl text-foreground">
          {selectedCategory === "All"
            ? "All Projects"
            : `${selectedCategory} Projects`}
        </h2>
        <span className="text-foreground/70">
          {filteredProjects.length}{" "}
          {filteredProjects.length <= 1 ? "project" : "projects"} found
        </span>
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && <ProjectEmptyState />}

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
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
              y: -3,
              transition: { duration: 0.15, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 rounded-base border-2 border-border bg-secondary-background text-foreground hover:bg-main hover:text-white font-mono text-xs sm:text-sm font-bold shadow-shadow hover:shadow-shadow-lg flex items-center gap-2 cursor-pointer"
          >
            <span>Show More</span>
            <ChevronDown className="w-4 h-4" />
          </motion.button>
        </div>
      )}
    </motion.section>
  );
}
