import { BlogHeader } from "@/components/blog-header"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

// Skills data with categories and descriptions
const skills = [
  {
    name: "JavaScript",
    category: "Language",
    description: "Modern ES6+ JavaScript for dynamic web applications",
    icon: "🟨"
  },
  {
    name: "TypeScript",
    category: "Language", 
    description: "Type-safe JavaScript for scalable applications",
    icon: "🔷"
  },
  {
    name: "React",
    category: "Framework",
    description: "Component-based UI library for interactive interfaces",
    icon: "⚛️"
  },
  {
    name: "Next.js",
    category: "Framework",
    description: "Full-stack React framework with SSR and SSG",
    icon: "▲"
  },
  {
    name: "CSS",
    category: "Styling",
    description: "Modern CSS with Grid, Flexbox, and animations",
    icon: "🎨"
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Utility-first CSS framework for rapid UI development",
    icon: "💨"
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Server-side JavaScript runtime environment",
    icon: "🟢"
  },
  {
    name: "Git",
    category: "Tool",
    description: "Version control for collaborative development",
    icon: "📚"
  },
  {
    name: "HTML",
    category: "Language",
    description: "Semantic markup for accessible web content",
    icon: "🌐"
  },
  {
    name: "GraphQL",
    category: "API",
    description: "Query language for efficient data fetching",
    icon: "🔗"
  }
]

const firstRow = skills.slice(0, Math.ceil(skills.length / 2))
const secondRow = skills.slice(Math.ceil(skills.length / 2))

const SkillCard = ({
  name,
  category,
  description,
  icon,
}: {
  name: string
  category: string
  description: string
  icon: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 transition-all duration-200",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="text-2xl">{icon}</div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-foreground">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-muted-foreground">{category}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {description}
      </blockquote>
    </figure>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-balance">About Me</h1>

          <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-6">
            <p className="text-pretty">
              I'm a frontend developer passionate about creating accessible, performant web experiences. My work focuses
              on the intersection of design and engineering, building interfaces that are both beautiful and functional.
            </p>

            <p className="text-pretty">
              Currently, I'm a Senior Frontend Engineer at a tech company, where I specialize in React, TypeScript, and
              modern web technologies. I contribute to design systems and help teams build scalable, maintainable
              applications.
            </p>

            <p className="text-pretty">
              When I'm not coding, you'll find me reading about web standards, experimenting with new technologies, or
              sharing knowledge through writing and speaking at conferences.
            </p>

            <div className="pt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Skills & Technologies</h2>
              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
                <Marquee pauseOnHover className="[--duration:25s]">
                  {firstRow.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:25s]">
                  {secondRow.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
