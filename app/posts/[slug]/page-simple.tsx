"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { BlogPost } from "@/lib/blog-data"

interface BlogPostClientProps {
  post: BlogPost
}

export function BlogPostSimple({ post }: BlogPostClientProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <Link
        href="/posts"
        className={cn(
          "inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        )}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to all posts
      </Link>

      <article>
        <header 
          className={cn(
            "mb-8 transition-all duration-500 delay-100",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div 
            className="flex items-center gap-4 text-sm text-muted-foreground mb-4"
            data-blog-meta={post.slug}
          >
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 
            className="text-4xl font-bold text-foreground mb-4 text-balance"
            data-blog-title={post.slug}
          >
            {post.title}
          </h1>

          <p 
            className="text-xl text-muted-foreground leading-relaxed text-pretty mb-6"
            data-blog-excerpt={post.slug}
          >
            {post.excerpt}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-muted-foreground" />
              {post.tags.map((tag, i) => (
                <span 
                  key={tag} 
                  className={cn(
                    "px-2 py-1 bg-accent text-accent-foreground text-sm rounded-md transition-all duration-300",
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${200 + i * 50}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div
          className={cn(
            "transition-all duration-700 delay-200",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <Card className="p-8">
            <div
              className="prose prose-lg max-w-none
                prose-headings:text-foreground 
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-code:bg-accent prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                prose-pre:bg-accent prose-pre:border prose-pre:border-border
                prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
                prose-li:text-muted-foreground
                dark:prose-invert"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/\n/g, "<br />")
                  .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
                  .replace(/`([^`]+)`/g, "<code>$1</code>")
                  .replace(/^# (.*$)/gm, "<h1>$1</h1>")
                  .replace(/^## (.*$)/gm, "<h2>$1</h2>")
                  .replace(/^### (.*$)/gm, "<h3>$1</h3>"),
              }}
            />
          </Card>
        </div>
      </article>

      <div 
        className={cn(
          "mt-12 pt-8 border-t border-border transition-all duration-700 delay-300",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="flex justify-between items-center">
          <Link href="/posts" className="text-primary hover:underline">
            ← All Posts
          </Link>
          <Link href="/" className="text-primary hover:underline">
            Home →
          </Link>
        </div>
      </div>
    </div>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

