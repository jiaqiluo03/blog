import Link from "next/link"
import { Card } from "@/components/ui/card"

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
  readTime: string
}

export function BlogPostCard({ title, excerpt, date, slug, readTime }: BlogPostCardProps) {
  return (
    <Card className="p-6 hover:bg-accent/50 transition-colors">
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
  )
}
