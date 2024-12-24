"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Pencil, Trash2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

export function ProjectsTab() {
  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution built with Next.js and MongoDB",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop",
      tags: ["Next.js", "MongoDB", "TailwindCSS"],
      demoLink: "#",
      githubLink: "#",
      featured: true
    }
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-200">Projects</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" /> Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-blue-950/90 border-blue-900/50">
            <DialogHeader>
              <DialogTitle>Add New Project</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Project Title" className="bg-blue-950/20" />
              <Textarea placeholder="Project Description" className="bg-blue-950/20" />
              <Input placeholder="Image URL" className="bg-blue-950/20" />
              <Input placeholder="Tags (comma separated)" className="bg-blue-950/20" />
              <Input placeholder="Demo Link" className="bg-blue-950/20" />
              <Input placeholder="GitHub Link" className="bg-blue-950/20" />
              <Button className="w-full">Save Project</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-6"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-200">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}