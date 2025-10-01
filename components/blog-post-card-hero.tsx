"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
  readTime: string
  index: number
  hovered: number | null
  setHovered: React.Dispatch<React.SetStateAction<number | null>>
}

export const BlogPostCardHero = React.memo(
  ({ title, excerpt, date, slug, readTime, index, hovered, setHovered }: BlogPostCardProps) => {
    const [isTransitioning, setIsTransitioning] = useState(false)

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Don't prevent default - let normal navigation work
      setIsTransitioning(true)
    }

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "transition-all duration-300 ease-out relative",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-50",
        )}
        style={{
          transform: hovered === index ? "scale(1.02)" : "scale(1)",
        }}
      >
        <Card
          className={cn(
            "p-6 transition-all duration-500 ease-out relative overflow-hidden",
            hovered === index
              ? "bg-accent/80 shadow-lg border-accent-foreground/20"
              : "hover:bg-accent/50",
            isTransitioning && "animate-pulse"
          )}
        >
          <Link 
            href={`/posts/${slug}`} 
            className="block"
            onClick={handleClick}
          >
            <div 
              className="flex items-center gap-2 text-sm text-muted-foreground mb-3 transition-all duration-300"
              data-blog-meta={slug}
            >
              <time dateTime={date}>{date}</time>
              <span>•</span>
              <span>{readTime}</span>
            </div>

            <h2 
              className="text-xl font-semibold text-foreground mb-3 text-balance transition-all duration-300"
              data-blog-title={slug}
            >
              {title}
            </h2>

            <p 
              className="text-muted-foreground leading-relaxed text-pretty transition-all duration-300"
              data-blog-excerpt={slug}
            >
              {excerpt}
            </p>
          </Link>

          {/* Ripple effect on click */}
          {isTransitioning && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 animate-pulse pointer-events-none" />
          )}
        </Card>

        {/* Hover glow effect */}
        {hovered === index && (
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-50 -z-10 transition-opacity duration-500" />
        )}
      </div>
    )
  },
)

BlogPostCardHero.displayName = "BlogPostCardHero"

interface BlogPostsHeroProps {
  posts: Array<{
    title: string
    excerpt: string
    date: string
    slug: string
    readTime: string
  }>
}

export function BlogPostsHero({ posts }: BlogPostsHeroProps) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {posts.map((post, index) => (
        <BlogPostCardHero
          key={post.slug}
          title={post.title}
          excerpt={post.excerpt}
          date={post.date}
          slug={post.slug}
          readTime={post.readTime}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  )
}

