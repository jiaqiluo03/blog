"use client"

import Link from "next/link"
import { CometCard } from "@/components/ui/comet-card"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
        <Card className="group cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                <time dateTime={date}>{date}</time>
              </Badge>
              <Badge variant="outline" className="border-muted-foreground/20 text-muted-foreground">
                {readTime}
              </Badge>
            </div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors text-balance">
              {title}
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-pretty">{excerpt}</p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground rounded-md transition-all duration-300">
              <span className="text-sm font-medium">Read more</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </CardContent>
        </Card>
      </Link>
    </CometCard>
  )
}
