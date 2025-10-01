"use client"

import { usePathname } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"

interface PageTransitionWrapperProps {
  children: ReactNode
}

export function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 100)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div 
      className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      key={pathname}
    >
      {children}
    </div>
  )
}

