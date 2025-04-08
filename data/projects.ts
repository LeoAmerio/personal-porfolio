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
    title: "Housinger",
    image: "/housinger/housi-landing.png",
    description:
      "A data visualization dashboard for business analytics with interactive charts, filters, and exportable reports. Built with Next.js, D3.js, and AWS services.",
    mainImage: "/housinger/housi-landing.png",
    screenshots: [
      "/housinger/housi-home.png",
      "/housinger/housi-services.png",
      "/housinger/housi-events.png",
      "/housinger/housin-msg.png",
      "/housinger/housi-msg-2.png",
    ],
    repoLink: "https://github.com/LeoAmerio/IW-Front",
    linkPage: "https://iw-front.vercel.app/"
  },
]

