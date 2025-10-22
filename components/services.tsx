export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and modern web applications using React, TypeScript, and Tailwind CSS.",
      icon: "🌐",
    },
    {
      title: "Frontend Development",
      description: "Creating beautiful, user-friendly interfaces with focus on performance and accessibility.",
      icon: "🎨",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and experiences that engage and delight users.",
      icon: "✨",
    },
    {
      title: "Backend Development",
      description: "REST API design (Spring Boot, Node.js).Database design & ORM (Hibernate, MySQL, MongoDB)",
      icon: "🖥️",
    },
    {
      title: "Database Management",
      description: "MySQL, MongoDB setup. ERD design, query optimization, relationships ",
      icon: "🛢",
    },
    {
      title: "Mobile App Design & Development",
      description: "I build high-performance, cross-platform mobile apps with React Native, focusing on smooth iOS/Android experiences, intuitive UI/UX, and seamless backend integration.",
      icon: "📱",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I offer a range of services to help bring your ideas to life with modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-background hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
