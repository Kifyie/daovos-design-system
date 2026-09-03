"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { AboutSection } from "@/components/AboutSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { BUTTERMAX_PROJECTS, Project } from "@/data/buttermaxData";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-dark-950">
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        projectCount={BUTTERMAX_PROJECTS.length}
      />

      <Hero onExplore={handleScrollToProjects} />

      <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

      <AboutSection onOpenContact={() => setIsContactOpen(true)} />

      <CapabilitiesSection />

      <Footer onOpenContact={() => setIsContactOpen(true)} />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
