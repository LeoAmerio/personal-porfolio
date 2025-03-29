export interface Experience {
  id: string
  company: string
  logo: string
  role: string
  startDate: string
  endDate: string
  technologies: string[]
  projects: string[]
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Phinx Labs",
    logo: "/placeholder.svg?height=100&width=100",
    role: "Semi-Senior Full Stack Developer",
    startDate: "October 2024",
    endDate: "Present",
    technologies: ["React", "Node.js", "Nest.js", "PostgreSQL", "Docker"],
    projects: [
      "Developed a scalable e-commerce platform handling 10,000+ daily users",
      "Implemented real-time analytics dashboard for business intelligence",
      "Led a team of 5 developers to deliver client projects on time and within budget",
    ],
  },
  {
    id: "2",
    company: "CobroExpress",
    logo: "/placeholder.svg?height=100&width=100",
    role: "Fullstack Developer",
    startDate: "July 2023",
    endDate: "October 2024",
    technologies: ["C#", ".Net Core", "Blazor", "Javascript", "SQL Server"],
    projects: [
      "Built responsive web applications for enterprise clients",
      "Optimized application performance, reducing load time by 40%",
      "Collaborated with UX/UI designers to implement pixel-perfect designs",
    ],
  },
  {
    id: "3",
    company: "Exeo IT",
    logo: "/placeholder.svg?height=100&width=100",
    role: "Junior Web Developer",
    startDate: "July 2022",
    endDate: "Present",
    technologies: ["Typescript", "React", "MUI", "AWS"],
    projects: [
      "Developed and maintained client websites and web applications",
      "Created custom WordPress themes and plugins",
      "Assisted in migrating legacy applications to modern frameworks",
    ],
  },
  {
    id: "4",
    company: "Polex SRL",
    logo: "/placeholder.svg?height=500&width=500",
    role: "Junior Web Developer",
    startDate: "January 2020",
    endDate: "July 2022",
    technologies: ["Typescript", "React", "MUI", "C#", "NodeJs"],
    projects: [
      "Developed and maintained client websites and web applications",
      "Created custom WordPress themes and plugins",
      "Assisted in migrating legacy applications to modern frameworks",
    ],
  },
]

