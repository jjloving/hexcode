"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Pencil, Trash2 } from "lucide-react"

export function PagesTab() {
  const [pages, setPages] = useState([
    {
      id: "1",
      title: "About",
      slug: "about",
      content: "About page content..."
    },
    {
      id: "2",
      title: "Resume",
      slug: "resume",
      content: "Resume page content..."
    }
  ])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-200">Pages</h2>
      
      <div className="grid gap-6">
        {pages.map((page) => (
          <div
            key={page.id}
            className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-6"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-200">{page.title}</h3>
                <p className="text-gray-400 mt-2">/{page.slug}</p>
              </div>
              <div className="flex space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-blue-950/90 border-blue-900/50">
                    <DialogHeader>
                      <DialogTitle>Edit Page</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input
                        defaultValue={page.title}
                        className="bg-blue-950/20"
                      />
                      <Textarea
                        defaultValue={page.content}
                        className="bg-blue-950/20 min-h-[200px]"
                      />
                      <Button className="w-full">Save Changes</Button>
                    </div>
                  </DialogContent>
                </Dialog>
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