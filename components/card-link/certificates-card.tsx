"use client";

import Link from "next/link";
import { CardLink } from "./card-link";
import { useLanguage } from "@/context/language-context";
import { ExternalLink } from "lucide-react";

export function CertificatesCard() {
  const { t } = useLanguage();

  return (
    // <CardLink
    //   href="/certificates"
    //   title={t("courses_certificates")}
    //   description={t("view_certifications")}
    //   gradient={true}
    // />

    <Link href="/certificates" className="group">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 h-full border border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-500/30">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
          {t("courses_certificates")}
        </h3>
        <p className="text-gray-400 mb-6">{t("view_certifications")}</p>
        <div className="flex justify-end">
          <span className="text-blue-400 flex items-center">
            <ExternalLink className="mr-2 w-4 h-4" />
            {t('view_all')}
          </span>
        </div>
      </div>
    </Link>

    // <Link href="/certificates" className="group">
    //   <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 h-full border border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-500/30">
    //     <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
    //       {t("courses_certificates")}
    //     </h3>
    //     <p className="text-gray-400 mb-6">{t("view_certifications")}</p>
    //     <div className="flex justify-end">
    //       <span className="text-blue-400 flex items-center">
    //         <ExternalLink className="mr-2 w-4 h-4" />
    //         {t('view_all')}
    //       </span>
    //     </div>
    //   </div>
    // </Link>
  );
}
