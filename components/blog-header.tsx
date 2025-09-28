import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function BlogHeader() {
  return (
    <header className="border-b border-border/40">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="block">
              <h1 className="text-2xl font-bold text-foreground">Alex Chen</h1>
              <p className="text-muted-foreground mt-1">Frontend Developer</p>
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-8">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/posts" className="text-muted-foreground hover:text-foreground transition-colors">
                Posts
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
