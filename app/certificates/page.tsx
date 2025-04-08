"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { CertificateCard } from "@/components/certificates/certificate-card"
import { certificates } from "@/data/certificates"
import { useLanguage } from "@/context/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ImageLightbox } from "@/components/lightbox/image-lightbox"

export default function Certificates() {
  const { t } = useLanguage()

  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Get all certificate images for the lightbox
  const certificateImages = certificates.map((cert) => cert.image)

  // Function to open lightbox with specific certificate
  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

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
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("back_to_portfolio")}
          </Link>

          <h1 className="text-4xl font-bold mb-12">
            <span className="text-blue-400">#</span> {t("courses_certificates_title")}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <CertificateCard key={cert.id} certificate={cert} onView={() => openLightbox(index)} />
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox images={certificateImages} initialIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} />
      )}
    </div>
  )
}

