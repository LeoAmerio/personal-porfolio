"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export function Bio() {
  const [showMoreBio, setShowMoreBio] = useState(false)
  const { t } = useLanguage()

  return (
    <>
      <section className="px-6 py-8 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-12 items-center">
          {/* Left - Bio */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-blue-400">FullStack</span> <br />Developer
              </h2>
              {/* <p className="text-gray-400">Creating digital experiences that matter</p> */}
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">{t("bio_paragraph_1")}</p>

              {showMoreBio && <p className="text-gray-300 text-lg leading-relaxed">{t("bio_paragraph_2")}</p>}

              <Button variant="outline" style={{ color: "black" }} className="rounded-full" onClick={() => setShowMoreBio(!showMoreBio)}>
                <p style={{ color: 'dark' }}>{showMoreBio ? t("show_less") : t("more_about_me")}</p>
              </Button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

