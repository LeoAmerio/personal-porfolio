"use client"

import Image from "next/image"
import { CardLink } from "./card-link"
import { useLanguage } from "@/context/language-context"

export function ExperienceCard() {
  const { t } = useLanguage()

  return (
    <CardLink href="/experiences" title={t("experience")} description={t("professional_journey")}>
      <div className="flex -space-x-2 mt-4">
        {[1, 2, 3].map((i) => (
          <Image
            key={i}
            src="/placeholder.svg"
            alt={`Company ${i}`}
            width={40}
            height={40}
            className="rounded-full border-2 border-gray-900"
          />
        ))}
      </div>
    </CardLink>
  )
}

