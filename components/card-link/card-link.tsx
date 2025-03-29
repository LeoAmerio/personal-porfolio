import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface CardLinkProps {
  href: string
  title: string
  description: string
  gradient?: boolean
  children?: ReactNode
}

export function CardLink({ href, title, description, gradient = false, children }: CardLinkProps) {
  const bgClasses = gradient
    ? "bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700"
    : "bg-gray-900 hover:bg-gray-800"

  return (
    <Link href={href} className="block">
      <section className={`relative overflow-hidden rounded-xl ${bgClasses} p-6 h-full transition-colors`}>
        <h2 className="text-2xl font-mono mb-4">{title}</h2>
        <p className="text-gray-400 mb-4">{description}</p>
        {children}
        <Button variant="ghost" style={{ color: 'black' }} size="icon" className="absolute right-4 top-4">
          <p ><span className="sr-only">View {title}</span>→</p>
        </Button>
      </section>
    </Link>
  )
}

