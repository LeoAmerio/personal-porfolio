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
    // <div className="bg-gray-900 rounded-lg overflow-hidden group hover:bg-gray-800 transition-colors">
    //   <div className="relative h-48">
    //     <Image src={certificate.image || "/placeholder.svg"} alt={certificate.title} fill className="object-cover" />
    //   </div>
    //   <div className="p-4">
    //     <h2 className="text-xl font-semibold mb-2">{certificate.title}</h2>
    //     <p className="text-gray-400 mb-1">
    //       {t("issuer")} {certificate.issuer}
    //     </p>
    //     <p className="text-gray-400 mb-4">
    //       {t("date")} {certificate.date}
    //     </p>
    //     <Button variant="outline" style={{ color: 'black' }} size="sm" asChild className="w-full">
    //       <Link href={certificate.link} className="inline-flex items-center justify-center">
    //         {t("view_certificate")}
    //         <ExternalLink className="ml-2 h-4 w-4" />
    //       </Link>
    //     </Button>
    //   </div>
    // </div>
    <div className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 border border-gray-700 hover:border-blue-500/30">
      <div className="relative h-48">
        <Image
          src={certificate.image || "/placeholder.svg"}
          alt={certificate.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{certificate.title}</h2>
        <p className="text-gray-400 mb-1">
          {t("issuer")} {certificate.issuer}
        </p>
        <p className="text-gray-400 mb-4">
          {t("date")} {certificate.date}
        </p>
        <Button variant="outline" style={{ color: 'black' }}  size="sm" asChild className="w-full">
          <Link href={certificate.link} className="inline-flex items-center justify-center">
            {t("view_certificate")}
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

