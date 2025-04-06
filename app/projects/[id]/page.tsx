"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, Maximize2, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { use, useState } from "react";
import { ImageLightbox } from "@/components/lightbox/image-lightbox";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const searchParams = use(params as any) as { id: string };
  const project = projects.find((p) => p.id === searchParams.id) || projects[0];
  const { t } = useLanguage();
  console.log(project);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Combine main image and screenshots for the lightbox
  const allImages = [
    project.mainImage || "/placeholder.svg",
    ...(project.screenshots || []),
  ];

  // Open lightbox with specific image
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Header with language switcher */}
      <header className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-sm z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-mono">
            Leonardo A.
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("back_to_portfolio")}
          </Link>

          <h1 className="text-3xl font-bold mb-8">{project.title}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
            {/* Left side - Images */}
            <div className="space-y-4">
              {/* Main image */}
              <div
                className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden group cursor-pointer shadow-lg"
                onClick={() => openLightbox(0)}
              >
                <Image
                  src={project.mainImage || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Maximize2 className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Screenshots */}
              <div className="grid grid-cols-3 gap-4">
                {project.screenshots?.map((screenshot, index) => (
                  <div
                    key={index}
                    className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden group cursor-pointer shadow-lg"
                    onClick={() => openLightbox(index + 1)}
                  >
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <Maximize2 className="h-6 w-6 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Project details */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg text-gray-400 mb-2">{t("title")}</h2>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>

                <div>
                  <h2 className="text-lg text-gray-400 mb-2">
                    {t("description")}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-lg text-gray-400 mb-2">
                    {t("repo_link")}
                  </h2>
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
                  {project.linkPage && (
                    <Button
                      variant="outline"
                      style={{ color: "black", margin: 2 }}
                      className="inline-flex items-center"
                      asChild
                    >
                      <Link
                        href={project.linkPage || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LineChart />
                        {t("view_live")}
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={allImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
