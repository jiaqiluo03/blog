import { BlogHeader } from "@/components/blog-header"
import { BlogPostCardComet } from "@/components/blog-post-card-comet"
import { getAllBlogPosts } from "@/lib/blog-data"

export default function HomePage() {
  const blogPosts = getAllBlogPosts().slice(0, 4) // Show first 4 posts

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-4 text-balance">
            Latest Posts
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            Thoughts on web development, design patterns, and building better user experiences.
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <BlogPostCardComet
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              slug={post.slug}
              readTime={post.readTime}
            />
          ))}
        </div>
      </main>

      <footer className="border-t border-border/40 mt-20 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© 2025 Alex Chen. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="https://twitter.com" className="hover:text-primary transition-colors font-medium">
                Twitter
              </a>
              <a href="https://github.com" className="hover:text-primary transition-colors font-medium">
                GitHub
              </a>
              <a href="https://linkedin.com" className="hover:text-primary transition-colors font-medium">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
