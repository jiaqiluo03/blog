import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="block group">
              <h1 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                Alex Chen
              </h1>
              <p className="text-muted-foreground mt-1 group-hover:text-foreground transition-colors duration-200">
                Frontend Developer
              </p>
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-8">
              <Link 
                href="/about" 
                className="text-muted-foreground hover:text-foreground transition-all duration-200 relative group"
              >
                <span className="relative z-10">About</span>
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link 
                href="/posts" 
                className="text-muted-foreground hover:text-foreground transition-all duration-200 relative group"
              >
                <span className="relative z-10">Posts</span>
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
