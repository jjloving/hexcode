"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { projects } from "@/data/projects"

export function ProjectCarousel() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {projects.slice(0, 3).map((project) => (
            <CarouselItem key={project.id}>
              <Card className="bg-blue-950/30 border-blue-900/50">
                <CardContent className="p-0">
                  <div className="relative h-[400px] w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-200">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild>
                      <Link href={project.link}>
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Project {current} of {count}
      </div>
    </div>
  )
}