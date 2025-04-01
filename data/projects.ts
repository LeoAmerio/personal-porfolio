import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform for Notion Templates",
    image: "/notion-project/notion-home.png",
    description:
      "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Built with Next.js, Node.js, and PostgreSQL.",
    mainImage: "/notion-project/notion-home.png",
    screenshots: [
      "/notion-project/template-detail.png",
      "/notion-project/login.png",
      "/notion-project/admin-dash.png",
    ],
    repoLink: "https://github.com/LeoAmerio/marketplace",
    repoBackLink: "https://github.com/LeoAmerio/marketplace-api"
  },
  {
    id: "2",
    title: "Finance Tracker App",
    image: "/finanzapp-project/home-finan.png",
    description:
      "A collaborative task management application with real-time updates, task assignment, and progress tracking. Implemented using React, NestJS, and WebSockets.",
    mainImage: "/finanzapp-project/home-finan.png",
    screenshots: [
      "/finanzapp-project/gastos.png",
      "/finanzapp-project/international.png",
      "/finanzapp-project/merval.png",
      "/finanzapp-project/investments.png",
    ],
    repoLink: "https://github.com/LeoAmerio/finanzapp",
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

