"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Play, Eye, Code, Palette, Box, ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/data/projects"
import { ImageModal } from "@/components/ui/image-modal"
import { VideoModal } from "@/components/ui/video-modal"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProject, setSelectedProject] = useState(null)
  const [isGridView, setIsGridView] = useState(true)
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
  } | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const categories = [
    { id: "all", label: "All Projects", icon: Box },
    { id: "Next.js", label: "Web Dev", icon: Code },
    { id: "Graphics Design", label: "Graphics", icon: Palette },
    { id: "3D Animation", label: "Animation", icon: Play },
  ]

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" ? true : project.tags.includes(filter)
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 space-y-12">
      {/* Header Section */}
      <motion.section 
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Creative Portfolio
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Explore my diverse collection of projects spanning web development, 
          graphic design, and 3D animation.
        </p>
      </motion.section>

      {/* Search and Filter Section */}
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full px-4 py-2 bg-blue-950/30 border border-blue-900/50 rounded-lg 
                     text-gray-200 focus:outline-none focus:border-blue-400 transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter and View Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={filter === category.id ? "default" : "outline"}
                  onClick={() => setFilter(category.id)}
                  className="capitalize space-x-2"
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </Button>
              )
            })}
          </div>

          <div className="flex gap-2">
            <Button
              variant={isGridView ? "default" : "outline"}
              onClick={() => setIsGridView(true)}
              size="sm"
            >
              Grid
            </Button>
            <Button
              variant={!isGridView ? "default" : "outline"}
              onClick={() => setIsGridView(false)}
              size="sm"
            >
              List
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid/List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${filter}-${isGridView}`}
          variants={container}
          initial="hidden"
          animate="show"
          className={isGridView 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-6"
          }
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={item}
              className="group"
              layoutId={project.id.toString()}
            >
              <Card className={`bg-blue-950/30 border-blue-900/50 overflow-hidden hover:border-blue-400/50 
                transition-all duration-300 ${!isGridView ? "flex flex-col md:flex-row" : ""}`}
              >
                <div className={`relative ${isGridView ? "h-48" : "h-64 md:w-64"} overflow-hidden`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="flex-1 flex flex-col">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-200">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary"
                          className="bg-blue-400/10 text-blue-400 hover:bg-blue-400/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {(project.demoUrl || project.videoUrl) && (
                      <Button 
                        size="sm" 
                        className="w-full group"
                        onClick={project.type === 'design' ? 
                          (e) => {
                            e.preventDefault();
                            setSelectedImage({ url: project.image, title: project.title })
                          } : 
                          undefined
                        }
                        asChild={project.type !== 'design'}
                      >
                        {project.type === 'design' ? (
                          <div className="flex items-center justify-center">
                            View Image
                            <Eye className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        ) : project.type === 'animation' ? (
                          <div 
                            className="flex items-center justify-center cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedVideo({ url: project.videoUrl!, title: project.title })
                            }}
                          >
                            Watch
                            <Play className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        ) : (
                          <a 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            Live Demo
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </a>
                        )}
                      </Button>
                    )}
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No Results Message */}
      {filteredProjects.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-400 py-12"
        >
          <p className="text-xl">No projects found matching your criteria</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => {
              setFilter("all")
              setSearchTerm("")
            }}
          >
            Reset Filters
          </Button>
        </motion.div>
      )}

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageUrl={selectedImage.url}
          title={selectedImage.title}
        />
      )}

      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}
    </div>
  )
}