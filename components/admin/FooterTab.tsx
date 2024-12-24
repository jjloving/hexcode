"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function FooterTab() {
  const [content, setContent] = useState(`
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Footer content -->
      </div>
    </div>
  `)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-200">Footer</h2>
      
      <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-6">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="bg-blue-950/20 min-h-[300px] mb-4"
        />
        <Button>Save Changes</Button>
      </div>
    </div>
  )
}