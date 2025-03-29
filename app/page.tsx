"use client"
import React from 'react'
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar/sidebar"
import { ProjectsSection } from "@/components/projects/projects-section"
import { StackSection } from "@/components/stack/stack-section"
import { CertificatesCard } from "@/components/card-link/certificates-card"
import { ExperienceCard } from "@/components/card-link/experience-card"
import { projects } from "@/data/projects"
import { techStack } from "@/data/tech-stack"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="fixed top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Right Content */}
        <div className="space-y-8">
          {/* Menu Button - Only show on mobile */}
          <div className="flex justify-end lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          {/* Projects Section */}
          <ProjectsSection projects={projects} />

          {/* Stack Section */}
          <StackSection techStack={techStack} />

          {/* Certificates and Experience Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CertificatesCard />
            <ExperienceCard />
          </div>
        </div>
      </div>
    </div>
  )
}

