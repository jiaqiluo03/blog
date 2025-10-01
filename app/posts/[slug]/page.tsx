import { notFound } from "next/navigation"
import { BlogHeader } from "@/components/blog-header"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data"
import { BlogPostSimple } from "./page-simple"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <BlogPostSimple post={post} />
      </main>
    </div>
  )
}
