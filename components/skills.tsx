export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python"],
    },
    {
      category: "Frontend",
      skills: ["React", "Tailwind CSS", "Bootstrap", "HTML/CSS"],
    },
    {
      category: "Backend",
      skills: ["Spring Boot", "Node.js", "Express", "Hibernate"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "Firebase"],
    },
    {
      category: "Mobile Development",
      skills: ["React Native"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      category: "Other Competencies",
      skills: ["JWT Authentication", "OOP", "REST APIs", "UI/UX Design"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
