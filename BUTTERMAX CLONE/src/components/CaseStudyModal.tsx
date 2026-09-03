"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, User, Tag, Sparkles, ArrowRight } from "lucide-react";
import { Project, BUTTERMAX_PROJECTS } from "@/data/buttermaxData";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Find next project
  const currentIndex = BUTTERMAX_PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject =
    currentIndex !== -1 && currentIndex < BUTTERMAX_PROJECTS.length - 1
      ? BUTTERMAX_PROJECTS[currentIndex + 1]
      : BUTTERMAX_PROJECTS[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="min-h-screen bg-dark-950 text-white max-w-5xl mx-auto shadow-2xl border-x border-white/10"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-30 bg-dark-950/90 backdrop-blur-md px-6 md:px-12 py-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-butter text-black text-[10px] font-black uppercase tracking-wider">
                CASE STUDY
              </span>
              <h4 className="font-extrabold text-base md:text-lg tracking-tight truncate max-w-[200px] md:max-w-md">
                {project.title}
              </h4>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-butter hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Hero Banner */}
          <div className="relative aspect-[16/9] w-full bg-dark-900">
            <Image
              src={project.featuredImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />

            <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
                {project.title}
              </h1>
              <p className="mt-2 text-butter font-mono text-sm tracking-wider">
                {project.client} • {project.year}
              </p>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="px-6 md:px-12 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-dark-900 border border-white/10 mb-12">
              <div>
                <div className="text-xs uppercase font-mono text-white/40 flex items-center gap-1.5 mb-1">
                  <User className="w-3.5 h-3.5 text-butter" />
                  <span>Client</span>
                </div>
                <div className="font-bold text-sm text-white">{project.client}</div>
              </div>

              <div>
                <div className="text-xs uppercase font-mono text-white/40 flex items-center gap-1.5 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-butter" />
                  <span>Year</span>
                </div>
                <div className="font-bold text-sm text-white">{project.year}</div>
              </div>

              <div>
                <div className="text-xs uppercase font-mono text-white/40 flex items-center gap-1.5 mb-1">
                  <Tag className="w-3.5 h-3.5 text-butter" />
                  <span>Device</span>
                </div>
                <div className="font-bold text-sm text-white uppercase">{project.device}</div>
              </div>

              <div>
                <div className="text-xs uppercase font-mono text-white/40 flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-butter" />
                  <span>Discipline</span>
                </div>
                <div className="font-bold text-sm text-white">
                  {Array.isArray(project.roles) ? project.roles.join(", ") : project.roles}
                </div>
              </div>
            </div>

            {/* Overview Story */}
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
                Project <span className="text-butter">Overview</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light">
                {project.copy || project.meta}
              </p>
            </div>

            {/* Content Blocks / Gallery */}
            {project.content && project.content.length > 0 && (
              <div className="mt-16 space-y-12">
                <h3 className="text-xl font-bold uppercase tracking-tight text-white border-b border-white/10 pb-4">
                  Visual <span className="text-butter">Production</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.content.map((block, idx) => {
                    if (block.image && block.image.url) {
                      return (
                        <div
                          key={block.id || idx}
                          className="rounded-2xl overflow-hidden glass-panel border border-white/10 aspect-[16/10] relative group"
                        >
                          <Image
                            src={block.image.url}
                            alt={block.image.alt || project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      );
                    }
                    if (block.video && block.video.url) {
                      return (
                        <div
                          key={block.id || idx}
                          className="rounded-2xl overflow-hidden glass-panel border border-white/10 aspect-[16/10] relative"
                        >
                          <video
                            src={block.video.url}
                            controls
                            className="w-full h-full object-cover"
                          />
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            )}

            {/* Next Project Footer Bar */}
            <div className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase font-mono text-white/40">Next Case Study</span>
                <h4 className="text-2xl font-extrabold text-white mt-1 hover:text-butter transition-colors">
                  {nextProject.title}
                </h4>
              </div>

              <button
                onClick={() => onSelectProject(nextProject)}
                className="btn-butter px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <span>Explore Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
