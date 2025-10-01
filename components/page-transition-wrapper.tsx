"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { ReactNode, useLayoutEffect, useRef, useState } from "react"

interface PageTransitionWrapperProps {
  children: ReactNode
}

export function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  const pathname = usePathname()
  const [displayPath, setDisplayPath] = useState(pathname)
  const prevPathnameRef = useRef(pathname)

  useLayoutEffect(() => {
    if (pathname !== displayPath) {
      setDisplayPath(pathname)
    }
  }, [pathname, displayPath])

  const getDirection = () => {
    const prev = prevPathnameRef.current
    const current = pathname

    if (prev === "/about" && current === "/posts") {
      return 1 // about -> posts
    } else if (prev === "/posts" && current === "/about") {
      return -1 // posts -> about
    }
    
    prevPathnameRef.current = current
    return current === "/posts" ? 1 : current === "/about" ? -1 : 0
  }

  const direction = getDirection()

  const variants = {
    initial: {
      x: direction > 0 ? "100%" : direction < 0 ? "-100%" : 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: direction > 0 ? "-100%" : direction < 0 ? "100%" : 0,
      opacity: 0,
    },
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

