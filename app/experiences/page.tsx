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
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Header with language switcher */}
      <header className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-sm z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-mono">
            LEO A.
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="pt-20 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back button */}
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("back_to_portfolio")}
          </Link>

          <h1 className="text-4xl font-bold mb-12">
            <span className="text-blue-400">#</span> {t("work_experience")}
          </h1>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} isLast={index === experiences.length - 1} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

