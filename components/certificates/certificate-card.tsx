"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Certificate } from "@/data/certificates"
import { useLanguage } from "@/context/language-context"

interface CertificateCardProps {
  certificate: Certificate
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const { t } = useLanguage()

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden group hover:bg-gray-800 transition-colors">
      <div className="relative h-48">
        <Image src={certificate.image || "/placeholder.svg"} alt={certificate.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{certificate.title}</h2>
        <p className="text-gray-400 mb-1">
          {t("issuer")} {certificate.issuer}
        </p>
        <p className="text-gray-400 mb-4">
          {t("date")} {certificate.date}
        </p>
        <Button variant="outline" style={{ color: 'black' }} size="sm" asChild className="w-full">
          <Link href={certificate.link} className="inline-flex items-center justify-center">
            {t("view_certificate")}
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

