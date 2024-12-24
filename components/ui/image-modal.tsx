"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { X, ZoomIn, ZoomOut, Download } from "lucide-react"
import { useState } from "react"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  title: string
}

export function ImageModal({ isOpen, onClose, imageUrl, title }: ImageModalProps) {
  const [scale, setScale] = useState(1)

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 2))
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5))
  
  const handleDownload = async () => {
    const response = await fetch(imageUrl)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${title}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-[95vw] p-0 overflow-hidden bg-black/90 border-blue-900/50">
        {/* Header */}
        <div className="p-4 bg-gradient-to-b from-black/60 to-transparent absolute top-0 left-0 right-0 z-50 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white/90">{title}</h2>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleZoomOut}
              className="text-white/75 hover:text-white hover:bg-white/10"
            >
              <ZoomOut className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleZoomIn}
              className="text-white/75 hover:text-white hover:bg-white/10"
            >
              <ZoomIn className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDownload}
              className="text-white/75 hover:text-white hover:bg-white/10"
            >
              <Download className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white/75 hover:text-white hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative w-full h-[90vh] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="relative transition-transform duration-200 ease-out cursor-zoom-in"
              style={{ 
                transform: `scale(${scale})`,
                width: '100%',
                height: '100%'
              }}
            >
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-contain"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 left-0 right-0 z-50">
          <p className="text-sm text-white/75 text-center">
            Click and drag to pan • Use buttons or scroll to zoom
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
} 