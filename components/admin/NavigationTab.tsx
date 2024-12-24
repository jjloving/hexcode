"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, GripVertical, Pencil, Trash2 } from "lucide-react"

export function NavigationTab() {
  const [navItems, setNavItems] = useState([
    { id: "1", label: "Home", href: "/", order: 1 },
    { id: "2", label: "About", href: "/about", order: 2 },
    { id: "3", label: "Projects", href: "/projects", order: 3 },
    { id: "4", label: "Resume", href: "/resume", order: 4 }
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-200">Navigation</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" /> Add Link
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-blue-950/90 border-blue-900/50">
            <DialogHeader>
              <DialogTitle>Add Navigation Link</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Label" className="bg-blue-950/20" />
              <Input placeholder="URL" className="bg-blue-950/20" />
              <Button className="w-full">Add Link</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
              <div>
                <p className="text-gray-200 font-medium">{item.label}</p>
                <p className="text-gray-400 text-sm">{item.href}</p>
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
        ))}
      </div>
    </div>
  )
}