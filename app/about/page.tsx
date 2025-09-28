import { BlogHeader } from "@/components/blog-header"

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
              <h2 className="text-2xl font-semibold text-foreground mb-4">Skills & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "TypeScript", "React", "Next.js", "CSS", "HTML", "Node.js", "Git"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
