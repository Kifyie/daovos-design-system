"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, ExternalLink } from "lucide-react";
import { Project } from "@/data/buttermaxData";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Fallback gradient/image if featured image is not present
  const bgImage = project.featuredImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-butter/50 transition-all duration-500 cursor-pointer flex flex-col"
      onClick={() => onSelect(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="VIEW"
    >
      {/* Media Showcase Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-dark-900">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity" />

        <Image
          src={bgImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Floating Tag Badges */}
        <div className="absolute top-5 left-5 z-20 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-dark-950/80 text-butter backdrop-blur-md border border-butter/30">
            {project.year}
          </span>
          {Array.isArray(project.typeOfProject) && project.typeOfProject[0] && (
            <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/10 text-white backdrop-blur-md">
              {project.typeOfProject[0]}
            </span>
          )}
        </div>

        {/* Hover Arrow Action Button */}
        <div className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-butter text-black flex items-center justify-center transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-[0_0_20px_rgba(255,230,0,0.5)]">
          <ArrowUpRight className="w-5 h-5 font-bold" />
        </div>
      </div>

      {/* Content & Metadata */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-dark-900/60">
        <div>
          <div className="flex items-center justify-between text-xs text-white/50 uppercase font-mono tracking-wider mb-2">
            <span>{project.client}</span>
            <span>{project.device}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight group-hover:text-butter transition-colors">
            {project.title}
          </h3>

          <p className="mt-3 text-sm text-white/60 line-clamp-2 leading-relaxed">
            {project.meta || project.copy}
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {Array.isArray(project.roles)
              ? project.roles.slice(0, 3).map((r, i) => (
                  <span
                    key={i}
                    className="text-[11px] text-white/40 bg-white/5 px-2.5 py-0.5 rounded-md font-mono"
                  >
                    {r}
                  </span>
                ))
              : typeof project.roles === 'string' && (
                  <span className="text-[11px] text-white/40 bg-white/5 px-2.5 py-0.5 rounded-md font-mono">
                    {project.roles}
                  </span>
                )}
          </div>

          <span className="text-xs font-bold text-butter uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};
