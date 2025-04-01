"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { use } from "react";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const searchParams = use(params as any) as { id: string };
  const project = projects.find((p) => p.id === searchParams.id) || projects[0];
  const { t } = useLanguage();
  console.log(project)
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="fixed top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>

      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("back_to_portfolio")}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
          <div className="space-y-4">
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src={project.mainImage || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {project.screenshots?.map((screenshot, index) => (
                <div
                  key={index}
                  className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden"
                >
                  <Image
                    src={screenshot || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 space-y-6">
            <div>
              <h2 className="text-xl text-gray-400 mb-2">{t("title")}</h2>
              <h1 className="text-3xl font-mono">{project.title}</h1>
            </div>

            <div>
              <h2 className="text-xl text-gray-400 mb-2">{t("description")}</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="text-xl text-gray-400 mb-2">{t("repo_link")}</h2>
              <Button
                variant="outline"
                style={{ color: "black" }}
                className="inline-flex items-center"
                asChild
              >
                <Link
                  href={project.repoLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  {t("view_repository")}
                </Link>
              </Button>
              {project.repoBackLink && (
                <Button
                  variant="outline"
                  style={{ color: "black", margin: 2 }}
                  className="inline-flex items-center"
                  asChild
                >
                  <Link
                    href={project.repoBackLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    {t("view_back_repository")}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
