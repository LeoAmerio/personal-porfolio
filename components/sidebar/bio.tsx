"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export function Bio() {
  const [showMoreBio, setShowMoreBio] = useState(false)
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="text-gray-300 text-lg leading-relaxed">{t("bio_paragraph_1")}</p>

        {showMoreBio && <p className="text-gray-300 text-lg leading-relaxed">{t("bio_paragraph_2")}</p>}
      </div>

      <Button variant="outline" style={{ color: "black" }} className="rounded-full" onClick={() => setShowMoreBio(!showMoreBio)}>
        <p style={{ color: 'dark'}}>{showMoreBio ? t("show_less") : t("more_about_me")}</p>
      </Button>
    </div>
  )
}

