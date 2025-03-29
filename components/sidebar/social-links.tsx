"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export function SocialLinks() {
  const { t } = useLanguage()

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        {/* Twitter icon commented out
        <Button variant="ghost" size="icon" asChild>
          <Link href="#">
            <Twitter className="w-5 h-5" />
          </Link>
        </Button>
        */}

        <Button variant="ghost" size="icon" asChild>
          <Link href="https://www.linkedin.com/in/leonardo-amerio/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
          </Link>
        </Button>

        {/* YouTube icon commented out */}
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://github.com/LeoAmerio" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
          </Link>
        </Button>
        
      </div>
      <div className="text-gray-400 text-sm">
        <p>{t("copyright")}</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white">
            {t("licensing")}
          </Link>
          <Link href="#" className="hover:text-white">
            404
          </Link>
        </div>
      </div>
    </div>
  )
}

