"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ExperienceCard } from "@/components/experiences/experience-card"
import { experiences } from "@/data/experiences"
import { useLanguage } from "@/context/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Experiences() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="fixed top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("back_to_portfolio")}
        </Link>

        <h1 className="text-4xl font-mono mb-12">{t("work_experience")}</h1>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} isLast={index === experiences.length - 1} />
          ))}
        </div>
      </div>
    </div>
  )
}

