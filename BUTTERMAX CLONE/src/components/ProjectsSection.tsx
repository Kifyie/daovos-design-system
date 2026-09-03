"use client";

import React, { useState } from "react";
import { Project, BUTTERMAX_PROJECTS } from "@/data/buttermaxData";
import { ProjectCard } from "./ProjectCard";
import { Sparkles, Grid, Layers } from "lucide-react";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "webgl", label: "WebGL & 3D" },
    { id: "experience", label: "Digital Experiences" },
    { id: "platforms", label: "Platforms & Systems" },
  ];

  const filteredProjects = BUTTERMAX_PROJECTS.filter((p) => {
    if (filter === "all") return true;
    if (filter === "webgl") {
      return (
        p.slug.includes("gdk") ||
        p.slug.includes("chrome") ||
        p.slug.includes("dreamwave") ||
        p.slug.includes("reliable") ||
        p.meta.toLowerCase().includes("webgl") ||
        p.meta.toLowerCase().includes("3d")
      );
    }
    if (filter === "experience") {
      return (
        p.slug.includes("wrapped") ||
        p.slug.includes("spotify") ||
        p.slug.includes("search-through-time") ||
        p.slug.includes("dream-keeper")
      );
    }
    if (filter === "platforms") {
      return (
        p.slug.includes("patreon") ||
        p.slug.includes("gdk") ||
        p.slug.includes("dreamwave")
      );
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-butter/10 border border-butter/30 text-butter text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
            Selected <span className="text-butter">Works</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                filter === cat.id
                  ? "bg-butter text-black shadow-[0_0_15px_rgba(255,230,0,0.3)]"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id || idx}
            project={project}
            index={idx}
            onSelect={onSelectProject}
          />
        ))}
      </div>
    </section>
  );
};
