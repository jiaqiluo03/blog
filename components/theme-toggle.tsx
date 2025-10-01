"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={(e) => toggleTheme(e)} 
      className="h-9 w-9 px-0 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all text-secondary dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all text-primary dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
