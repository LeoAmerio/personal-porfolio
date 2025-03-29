"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import type { Experience } from "@/data/experiences"
import { useLanguage } from "@/context/language-context"

interface ExperienceCardProps {
  experience: Experience
  isLast: boolean
}

export function ExperienceCard({ experience, isLast }: ExperienceCardProps) {
  const { t } = useLanguage()

  return (
    <div className="relative">
      {!isLast && <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-gray-700" 
             style={{ height: 'calc(100% + 50px)' }} // Extender la línea más allá del contenedor
        />}

      <div className="flex gap-8">
        <div className="relative z-10">
          <div className="w-16 h-16 bg-gray-900 rounded-full overflow-hidden flex items-center justify-center border-2 border-blue-600">
            <Image
              src={experience.logo || "/placeholder.svg"}
              alt={experience.company}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">{experience.company}</h2>
            <div className="text-gray-400">
              {experience.startDate} - {experience.endDate}
            </div>
          </div>

          <h3 className="text-xl text-blue-400 mb-4">{experience.role}</h3>

          <div className="mb-6 flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-800">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <h4 className="text-lg font-medium mb-4">{t("projects_responsibilities")}</h4>
            <ul className="space-y-2">
              {experience.projects.map((project, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

