import { useLanguage } from "@/context/language-context"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  id: string
  title: string
  image: string
  description?: string;
}

export function ProjectCard({ id, title, image, description }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <Link key={id} href={`/projects/${id}`} className="group">
      <div className="bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
        <div className="relative aspect-video">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 line-clamp-2">{description?.substring(0, 100)}...</p>
          <div className="mt-4 flex justify-end">
            <span className="text-blue-400 text-sm flex items-center">
              {t('view_project')}
              <ChevronRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

