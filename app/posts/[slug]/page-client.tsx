"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { BlogPost } from "@/lib/blog-data"

interface BlogPostClientProps {
  post: BlogPost
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href="/posts"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to all posts
      </Link>

      <article>
        <motion.header 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <motion.div 
            layoutId={`blog-meta-${post.slug}`}
            className="flex items-center gap-4 text-sm text-muted-foreground mb-4"
          >
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </motion.div>

          <motion.h1 
            layoutId={`blog-title-${post.slug}`}
            className="text-4xl font-bold text-foreground mb-4 text-balance"
          >
            {post.title}
          </motion.h1>

          <motion.p 
            layoutId={`blog-excerpt-${post.slug}`}
            className="text-xl text-muted-foreground leading-relaxed text-pretty mb-6"
          >
            {post.excerpt}
          </motion.p>

          {post.tags && post.tags.length > 0 && (
            <motion.div 
              className="flex items-center gap-2 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <Tag className="w-4 h-4 text-muted-foreground" />
              {post.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-accent text-accent-foreground text-sm rounded-md">
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
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
        </motion.div>
      </article>

      <motion.div 
        className="mt-12 pt-8 border-t border-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <Link href="/posts" className="text-primary hover:underline">
            ← All Posts
          </Link>
          <Link href="/" className="text-primary hover:underline">
            Home →
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

