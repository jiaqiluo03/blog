"use client"

import { useState, useMemo } from "react"
import { BlogHeader } from "@/components/blog-header"
import { BlogPostsWithFocus } from "@/components/blog-post-card-with-focus"
import { Pagination } from "@/components/pagination"
import { getAllBlogPosts } from "@/lib/blog-data"

const POSTS_PER_PAGE = 5

export default function PostsPage() {
  const allPosts = getAllBlogPosts()
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = useMemo(() => allPosts.slice(startIndex, endIndex), [allPosts, startIndex, endIndex])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">All Posts</h1>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            A collection of articles about web development, design, and technology.
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(endIndex, allPosts.length)} of {allPosts.length} posts
          </div>
        </div>

        <BlogPostsWithFocus posts={currentPosts} />

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </main>
    </div>
  )
}
