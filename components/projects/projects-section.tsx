"use client"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "./project-card"
import type { Project } from "@/types/project"
import { useLanguage } from "@/context/language-context"

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t } = useLanguage()

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-mono">{t("my_projects")}</h2>
        <Button variant="ghost" size="icon">
          <span className="sr-only">View all projects</span>→
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} id={project.id} title={project.title} image={project.image} />
        ))}
      </div>
    </section>
  )
}

