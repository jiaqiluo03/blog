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

export const BlogPostCardWithFocus = React.memo(
  ({ title, excerpt, date, slug, readTime, index, hovered, setHovered }: BlogPostCardProps) => {
    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-50",
        )}
      >
        <Card
          className={cn(
            "p-6 transition-all duration-300 ease-out",
            hovered === index
              ? "bg-accent/80 shadow-lg scale-[1.02] border-accent-foreground/20"
              : "hover:bg-accent/50",
          )}
        >
          <Link href={`/posts/${slug}`} className="block">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <time dateTime={date}>{date}</time>
              <span>•</span>
              <span>{readTime}</span>
            </div>

            <h2 className="text-xl font-semibold text-foreground mb-3 text-balance">{title}</h2>

            <p className="text-muted-foreground leading-relaxed text-pretty">{excerpt}</p>
          </Link>
        </Card>
      </div>
    )
  },
)

BlogPostCardWithFocus.displayName = "BlogPostCardWithFocus"

interface BlogPostsWithFocusProps {
  posts: Array<{
    title: string
    excerpt: string
    date: string
    slug: string
    readTime: string
  }>
}

export function BlogPostsWithFocus({ posts }: BlogPostsWithFocusProps) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {posts.map((post, index) => (
        <BlogPostCardWithFocus
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
