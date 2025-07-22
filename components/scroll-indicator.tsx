"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate opacity based on scroll position
      // Start fading out immediately and be completely invisible by 300px of scroll
      const scrollY = window.scrollY
      const newOpacity = Math.max(0, 1 - scrollY / 300)
      setOpacity(newOpacity)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 mt-4 transition-opacity duration-200"
      style={{ opacity }}
    >
      <div className="rounded-full px-8 py-3 bg-transparent flex flex-col items-center">
        <span className="text-3xl font-medium bg-gradient-to-r from-[#4B9EF4] via-[#9B6BF7] via-[#E85EE3] to-[#F7936F] bg-clip-text text-transparent mb-2">
          Scroll to Learn More
        </span>
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </div>
    </div>
  )
}
