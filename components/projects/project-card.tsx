import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  id: string
  title: string
  image: string
}

export function ProjectCard({ id, title, image }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`} className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden group">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <span className="text-white font-medium">{title}</span>
      </div>
    </Link>
  )
}

