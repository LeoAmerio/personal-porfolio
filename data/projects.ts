import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Built with Next.js, Node.js, and PostgreSQL.",
    mainImage: "/placeholder.svg?height=600&width=800",
    screenshots: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
    repoLink: "https://github.com/username/ecommerce-platform",
  },
  {
    id: "2",
    title: "Task Management App",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "A collaborative task management application with real-time updates, task assignment, and progress tracking. Implemented using React, NestJS, and WebSockets.",
    mainImage: "/placeholder.svg?height=600&width=800",
    screenshots: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
    repoLink: "https://github.com/username/task-management",
  },
  {
    id: "3",
    title: "Analytics Dashboard",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "A data visualization dashboard for business analytics with interactive charts, filters, and exportable reports. Built with Next.js, D3.js, and AWS services.",
    mainImage: "/placeholder.svg?height=600&width=800",
    screenshots: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
    repoLink: "https://github.com/username/analytics-dashboard",
  },
]

