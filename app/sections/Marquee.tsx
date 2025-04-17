"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ImageMarqueeProps {
  images: string[]
  autoplaySpeed?: number
  className?: string
}

export function ImageMarquee({ images, autoplaySpeed = 3000, className }: ImageMarqueeProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)

  const totalImages = images.length

  // Calculate indices for visible images
  const getPrevIndex = (index: number) => (index === 0 ? totalImages - 1 : index - 1)
  const getNextIndex = (index: number) => (index === totalImages - 1 ? 0 : index + 1)

  const prevIndex = getPrevIndex(currentIndex)
  const nextIndex = getNextIndex(currentIndex)
  const prevPrevIndex = getPrevIndex(prevIndex)
  const nextNextIndex = getNextIndex(nextIndex)

  // Handle navigation
  const goToNext = () => {
    setCurrentIndex(getNextIndex(currentIndex))
  }

  const goToPrev = () => {
    setCurrentIndex(getPrevIndex(currentIndex))
  }

  // Reset autoplay timer when manually navigating
  const resetAutoplayTimer = () => {
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current)
    }

    if (isAutoPlaying) {
      autoplayTimerRef.current = setTimeout(goToNext, autoplaySpeed)
    }
  }

  // Handle button clicks
  const handlePrevClick = () => {
    goToPrev()
    resetAutoplayTimer()
  }

  const handleNextClick = () => {
    goToNext()
    resetAutoplayTimer()
  }

  // Toggle autoplay
  const toggleAutoplay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  // Set up autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      autoplayTimerRef.current = setTimeout(goToNext, autoplaySpeed)
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current)
      }
    }
  }, [currentIndex, isAutoPlaying, autoplaySpeed])

  return (
    <div className={cn("relative w-full overflow-hidden py-10", className)}>
      <div className="relative flex h-[300px] md:h-[400px] items-center justify-center">
        {/* Previous images */}
        <div className="absolute left-0 md:left-[5%] z-10 transition-all duration-500 opacity-40 scale-75 transform -translate-x-1/2">
          <Image
            src={images[prevPrevIndex] || "/placeholder.svg"}
            alt="Previous image"
            width={300}
            height={300}
            className="rounded-lg object-cover w-[150px] h-[200px] md:w-[200px] md:h-[250px]"
          />
        </div>

        <div className="absolute left-[20%] md:left-[25%] z-20 transition-all duration-500 opacity-70 scale-85 transform -translate-x-1/2">
          <Image
            src={images[prevIndex] || "/placeholder.svg"}
            alt="Previous image"
            width={300}
            height={300}
            className="rounded-lg object-cover w-[180px] h-[230px] md:w-[220px] md:h-[270px]"
          />
        </div>

        {/* Center (current) image */}
        <div className="z-30 transition-all duration-500 transform scale-100">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt="Current image"
            width={400}
            height={400}
            className="rounded-lg shadow-xl object-cover w-[220px] h-[280px] md:w-[280px] md:h-[350px]"
            priority
          />
        </div>

        {/* Next images */}
        <div className="absolute right-[20%] md:right-[25%] z-20 transition-all duration-500 opacity-70 scale-85 transform translate-x-1/2">
          <Image
            src={images[nextIndex] || "/placeholder.svg"}
            alt="Next image"
            width={300}
            height={300}
            className="rounded-lg object-cover w-[180px] h-[230px] md:w-[220px] md:h-[270px]"
          />
        </div>

        <div className="absolute right-0 md:right-[5%] z-10 transition-all duration-500 opacity-40 scale-75 transform translate-x-1/2">
          <Image
            src={images[nextNextIndex] || "/placeholder.svg"}
            alt="Next image"
            width={300}
            height={300}
            className="rounded-lg object-cover w-[150px] h-[200px] md:w-[200px] md:h-[250px]"
          />
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={handlePrevClick}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button variant="outline" size="sm" onClick={toggleAutoplay} className="min-w-24">
          {isAutoPlaying ? "Pause" : "Play"}
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={handleNextClick}
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Image indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex ? "bg-primary w-4" : "bg-muted",
            )}
            onClick={() => {
              setCurrentIndex(index)
              resetAutoplayTimer()
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
