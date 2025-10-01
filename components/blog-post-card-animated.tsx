"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
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

export const BlogPostCardAnimated = React.memo(
  ({ title, excerpt, date, slug, readTime, index, hovered, setHovered }: BlogPostCardProps) => {
    const router = useRouter()
    const [isNavigating, setIsNavigating] = useState(false)

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault()
      setIsNavigating(true)
      
      // Small delay to allow the animation to start
      setTimeout(() => {
        router.push(`/posts/${slug}`)
      }, 100)
    }

    return (
      <motion.div
        layout
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "relative",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-50",
        )}
        animate={{
          scale: hovered === index ? 1.02 : 1,
          transition: { duration: 0.3 },
        }}
      >
        <motion.div
          layoutId={`blog-card-${slug}`}
          className="relative"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <Card
            className={cn(
              "p-6 transition-all duration-300 ease-out cursor-pointer overflow-hidden",
              hovered === index
                ? "bg-accent/80 shadow-lg border-accent-foreground/20"
                : "hover:bg-accent/50",
              isNavigating && "scale-105"
            )}
            onClick={handleClick}
          >
            <motion.div layoutId={`blog-meta-${slug}`} className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <time dateTime={date}>{date}</time>
              <span>•</span>
              <span>{readTime}</span>
            </motion.div>

            <motion.h2 
              layoutId={`blog-title-${slug}`}
              className="text-xl font-semibold text-foreground mb-3 text-balance"
            >
              {title}
            </motion.h2>

            <motion.p 
              layoutId={`blog-excerpt-${slug}`}
              className="text-muted-foreground leading-relaxed text-pretty"
            >
              {excerpt}
            </motion.p>
          </Card>
        </motion.div>

        {/* Overlay during navigation */}
        {isNavigating && (
          <motion.div
            className="absolute inset-0 bg-background/50 z-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>
    )
  },
)

BlogPostCardAnimated.displayName = "BlogPostCardAnimated"

interface BlogPostsAnimatedProps {
  posts: Array<{
    title: string
    excerpt: string
    date: string
    slug: string
    readTime: string
  }>
}

export function BlogPostsAnimated({ posts }: BlogPostsAnimatedProps) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {posts.map((post, index) => (
        <BlogPostCardAnimated
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
    </motion.div>
  )
}

