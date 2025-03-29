"use client"

import { CardLink } from "./card-link"
import { useLanguage } from "@/context/language-context"

export function CertificatesCard() {
  const { t } = useLanguage()

  return (
    <CardLink
      href="/certificates"
      title={t("courses_certificates")}
      description={t("view_certifications")}
      gradient={true}
    />
  )
}

