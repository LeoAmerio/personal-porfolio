"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"
type TranslationKey = keyof typeof translations

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  more_about_me: {
    en: "More about Me",
    es: "Más sobre Mí",
  },
  show_less: {
    en: "Show Less",
    es: "Mostrar Menos",
  },
  back_to_portfolio: {
    en: "Back to Portfolio",
    es: "Volver al Portafolio",
  },
  view_repository: {
    en: "View Repository",
    es: "Ver Repositorio",
  },
  view_certificate: {
    en: "View Certificate",
    es: "Ver Certificado",
  },

  // Bio
  bio_paragraph_1: {
    en: "I specialize in crafting visually striking and user-friendly digital experiences. With a passion for blending aesthetics and functionality, I bring ideas to life, creating innovative solutions in the dynamic world of web design.",
    es: "Me especializo en crear experiencias digitales visualmente impactantes y fáciles de usar. Con pasión por combinar estética y funcionalidad, doy vida a ideas, creando soluciones innovadoras en el dinámico mundo del diseño web.",
  },
  bio_paragraph_2: {
    en: "Passionate about continuous learning and staying at the forefront of technology trends and best practices.",
    es: "Apasionado por el aprendizaje continuo y por mantenerme a la vanguardia de las tendencias tecnológicas y las mejores prácticas.",
  },

  // Footer
  copyright: {
    en: "© by Leo",
    es: "© por Leo",
  },
  licensing: {
    en: "Licensing",
    es: "Licencias",
  },

  // Sections
  my_projects: {
    en: "My Projects",
    es: "Mis Proyectos",
  },
  my_stack: {
    en: "My Stack",
    es: "Mi Stack",
  },
  courses_certificates: {
    en: "Courses & Certificates",
    es: "Cursos y Certificados",
  },
  view_certifications: {
    en: "View my professional certifications and completed courses",
    es: "Ver mis certificaciones profesionales y cursos completados",
  },
  experience: {
    en: "Experience",
    es: "Experiencia",
  },
  professional_journey: {
    en: "My professional journey and work history",
    es: "Mi trayectoria profesional e historial laboral",
  },

  // Project details
  title: {
    en: "Title:",
    es: "Título:",
  },
  description: {
    en: "Description:",
    es: "Descripción:",
  },
  repo_link: {
    en: "Link to repo:",
    es: "Link al repo:",
  },

  // Certificates page
  courses_certificates_title: {
    en: "Courses & Certificates",
    es: "Cursos y Certificados",
  },
  issuer: {
    en: "Issuer:",
    es: "Emisor:",
  },
  date: {
    en: "Date:",
    es: "Fecha:",
  },

  // Experience page
  work_experience: {
    en: "Work Experience",
    es: "Experiencia Laboral",
  },
  projects_responsibilities: {
    en: "Projects & Responsibilities",
    es: "Proyectos y Responsabilidades",
  },

  // Language switcher
  switch_to_english: {
    en: "Switch to English",
    es: "Cambiar a Inglés",
  },
  switch_to_spanish: {
    en: "Switch to Spanish",
    es: "Cambiar a Español",
  },
  language: {
    en: "EN",
    es: "ES",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: TranslationKey): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`)
      return key
    }
    return translations[key][language]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

