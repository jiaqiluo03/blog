"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface TimelineItemProps {
  year: string
  title: string
  company?: string
  description: string
  skills?: string[]
  isLast?: boolean
  index: number
}

export function TimelineItem({
  year,
  title,
  company,
  description,
  skills = [],
  isLast = false,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex gap-6 pb-8"
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
          className="w-3 h-3 bg-orange-500 rounded-full border-2 border-background shadow-lg z-10"
        />
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
            className="w-px bg-gradient-to-b from-orange-500 to-border mt-2 flex-1"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-sm text-muted-foreground font-mono">{year}</span>
          <span className="text-muted-foreground">—</span>
          <span className="text-sm text-muted-foreground uppercase tracking-wide">Present</span>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>

        {company && <p className="text-orange-500 font-semibold mb-3 text-base">{company}</p>}

        <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>

        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.2 + 0.8 + skillIndex * 0.1,
                }}
              >
                <Badge variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
