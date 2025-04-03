"use client"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "./project-card"
import type { Project } from "@/types/project"
import { useLanguage } from "@/context/language-context"
import { ChevronRight } from "lucide-react"

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t } = useLanguage()

  return (
    <>
    <section className="px-6 py-16 bg-black bg-opacity-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">
            <span className="text-blue-400">#</span> {t("my_projects")}
          </h2>
          {/* <Button variant="ghost" className="group">
            <span className="mr-2">View all</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} id={project.id} title={project.title} image={project.image} description={project.description} />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

