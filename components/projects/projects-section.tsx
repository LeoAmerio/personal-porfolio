"use client";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "./project-card";
import type { Project } from "@/types/project";
import { useLanguage } from "@/context/language-context";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t } = useLanguage();

  return (
    <>
      <section className="px-6 py-16 bg-black bg-opacity-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">
              <span className="text-blue-400">#</span> {t("my_projects")}
            </h2>
            <Button variant="ghost" className="group">
              <span className="mr-2">View all</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group"
              >
                <div className="bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 line-clamp-2">
                      {project.description?.substring(0, 100)}...
                    </p>
                    <div className="mt-4 flex justify-end">
                      <span className="text-blue-400 text-sm flex items-center">
                        View Project{" "}
                        <ChevronRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OLD SECTION */}
      {/* <section className="px-6 py-16 bg-black bg-opacity-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">
            <span className="text-blue-400">#</span> {t("my_projects")}
          </h2>
          {/* <Button variant="ghost" className="group">
            <span className="mr-2">View all</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} id={project.id} title={project.title} image={project.image} description={project.description} />
          ))}
        </div>
      </div>
    </section> */}
    </>
  );
}
