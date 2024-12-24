"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Maximize2, Volume2, VolumeX } from "lucide-react"
import { useState } from "react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title: string
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleFullscreen = () => {
    const videoElement = document.querySelector('video')
    if (!videoElement) return

    if (!isFullscreen) {
      videoElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
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
              onClick={() => setIsMuted(!isMuted)}
              className="text-white/75 hover:text-white hover:bg-white/10"
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleFullscreen}
              className="text-white/75 hover:text-white hover:bg-white/10"
            >
              <Maximize2 className="h-5 w-5" />
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

        {/* Video Container */}
        <div className="relative w-full h-[90vh] flex items-center justify-center bg-black">
          <video
            src={videoUrl}
            controls
            autoPlay
            muted={isMuted}
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  )
} 