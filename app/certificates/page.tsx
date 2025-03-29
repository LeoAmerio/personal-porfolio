"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { CertificateCard } from "@/components/certificates/certificate-card"
import { certificates } from "@/data/certificates"
import { useLanguage } from "@/context/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Certificates() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <div className="fixed top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>

      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("back_to_portfolio")}
        </Link>

        <h1 className="text-4xl font-mono mb-8">Courses & Certificates</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </div>
  )
}

