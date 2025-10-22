export default function Projects() {
  const projects = [
    {
      title: "Online Course Enrollment System",
      description:
        "A comprehensive enrollment management platform allowing students to register for courses, track enrollment status, and receive automatic email notifications. Integrated payment gateway with admin dashboard for course and student management.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "SendGrid"],
      link: "https://github.com/chanukacsj/online-course-enrollment-system-frontend.git",
    },
    {
      title: "Smart Hotel Booking Website",
      description:
        "Hotel reservation platform with online room booking, customer reviews, secure PayHere payment integration, and manager dashboard for booking and occupancy management. Focused on responsive UI/UX design.",
      technologies: ["Java", "Spring Boot", "MySQL", "Bootstrap", "PayHere"],
      link: "https://github.com/chanukacsj/Smart-Hotel-Booking-WebSite",
    },
    {
      title: "Smart Parking Management System",
      description:
        "Microservice-based parking management system enabling users to search, reserve, and manage urban parking spaces in real-time. Integrates service discovery, centralized configuration, API routing, and role-based access.",
      technologies: ["Java", "Spring Boot", "Spring Cloud", "MySQL", "Microservices"],
      link: "https://github.com/chanukacsj/spms.git",
    },
    {
      title: "SpendWise - Expense Tracker",
      description:
        "Mobile app for managing daily income and expenses with transaction categorization (Food, Travel, Bills, Shopping) and weekly/monthly summaries through charts and dashboards.",
      technologies: ["React Native", "Firebase", "Mobile Development"],
      link: "https://github.com/chanukacsj/SpendWise-mobile-app",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-6 border border-border rounded-lg hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:gap-2 transition-all text-sm font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
