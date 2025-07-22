"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import {
  Code,
  FileType,
  Database,
  Coffee,
  Cpu,
  Cloud,
  Braces,
  FileCode,
  TerminalSquare,
  Layers,
  Globe,
} from "lucide-react"

interface Skill {
  name: string
  icon: React.ReactNode
}

export function SkillsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const skills: Skill[] = [
    { name: "Python", icon: <FileCode className="w-8 h-8 text-[#4B9EF4]" /> },
    { name: "TypeScript", icon: <Code className="w-8 h-8 text-[#9B6BF7]" /> },
    { name: "JavaScript", icon: <Braces className="w-8 h-8 text-[#F7936F]" /> },
    { name: "React", icon: <Layers className="w-8 h-8 text-[#4B9EF4]" /> },
    { name: "Next.js", icon: <Globe className="w-8 h-8 text-white" /> },
    { name: "HTML/CSS/PHP", icon: <FileType className="w-8 h-8 text-[#E85EE3]" /> },
    { name: "SQL", icon: <Database className="w-8 h-8 text-[#4B9EF4]" /> },
    { name: "Java", icon: <Coffee className="w-8 h-8 text-[#F7936F]" /> },
    { name: "C++", icon: <Cpu className="w-8 h-8 text-[#9B6BF7]" /> },
    { name: "Clojure", icon: <TerminalSquare className="w-8 h-8 text-[#E85EE3]" /> },
    { name: "AWS", icon: <Cloud className="w-8 h-8 text-[#F7936F]" /> },
  ]

  // Duplicate skills for seamless looping
  const allSkills = [...skills, ...skills]

  return (
    <div ref={sectionRef} className="w-screen overflow-hidden px-4 py-8">
      <h2
        className={`text-4xl font-light text-center mb-8 bg-gradient-to-r from-[#4B9EF4] via-[#9B6BF7] via-[#E85EE3] to-[#F7936F] bg-clip-text text-transparent gradient-glow transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        My Skills
      </h2>

      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          className="w-[200%] flex items-center gap-8 animate-carousel"
          style={{
            animationDuration: "30s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {allSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex flex-col items-center justify-center min-w-[120px] h-[120px] rounded-xl bg-[#0A0C12] p-3"
            >
              <div className="w-12 h-12 mb-2 flex items-center justify-center">{skill.icon}</div>
              <span className="text-sm text-center font-medium text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
