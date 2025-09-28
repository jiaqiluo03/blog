"use client"

import Link from "next/link"
import { CometCard } from "@/components/ui/comet-card"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface BlogPostCardCometProps {
  title: string
  excerpt: string
  date: string
  slug: string
  readTime: string
}

export function BlogPostCardComet({ title, excerpt, date, slug, readTime }: BlogPostCardCometProps) {
  return (
    <CometCard className="w-full">
      <Link href={`/posts/${slug}`} className="block">
        <Card className="group cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-border hover:bg-card/80">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <time dateTime={date}>{date}</time>
              <span>{readTime}</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors text-balance">
              {title}
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-pretty">{excerpt}</p>
            <div className="mt-4">
              <span className="text-sm font-medium text-primary group-hover:underline">Read more →</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </CometCard>
  )
}
