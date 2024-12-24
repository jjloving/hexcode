'use client'

import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: readonly string[]
  index: number
}

export function ProjectCard({ title, description, image, technologies, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-blue-950/30 rounded-lg border border-blue-900/50 overflow-hidden hover:border-blue-400/50 transition-colors">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-gray-200">{title}</h3>
          <p className="text-gray-400">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge 
                key={tech}
                variant="secondary"
                className="bg-blue-400/10 text-blue-400 hover:bg-blue-400/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
} 