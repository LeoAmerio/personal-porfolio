"use client"

import Image from "next/image"
import { CardLink } from "./card-link"
import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function ExperienceCard() {
  const { t } = useLanguage()

  return (
    // <CardLink href="/experiences" title={t("experience")} description={t("professional_journey")}>
    //   <div className="flex -space-x-2 mt-4">
    //     {[1, 2, 3].map((i) => (
    //       <Image
    //         key={i}
    //         src="/placeholder.svg"
    //         alt={`Company ${i}`}
    //         width={40}
    //         height={40}
    //         className="rounded-full border-2 border-gray-900"
    //       />
    //     ))}
    //   </div>
    // </CardLink>

    <Link href="/experiences" className="group">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 h-full border border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-500/30">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
          {t("experience")}
        </h3>
        <p className="text-gray-400 mb-6">{t("professional_journey")}</p>
        <div className="flex -space-x-2 mb-4">
          {[1, 2, 3].map((i) => (
            <Image
              key={i}
              src="/placeholder.svg"
              alt={`Company ${i}`}
              width={40}
              height={40}
              className="rounded-full border-2 border-gray-800"
            />
          ))}
        </div>
        <div className="flex justify-end">
          <span className="text-blue-400 flex items-center">
            <ExternalLink className="mr-2 w-4 h-4" />
            {t('view_all')}
          </span>
        </div>
      </div>
    </Link>
  )
}

