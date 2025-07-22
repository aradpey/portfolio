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
  BarChart3,
  Brain,
  Server,
  Zap,
  BookOpen,
} from "lucide-react"

interface Skill {
  name: string
  icon: React.ReactNode
}

export function SkillsGrid() {
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
    { name: "React.js", icon: <Layers className="w-8 h-8 text-[#4B9EF4]" /> },
    { name: "Redux.js", icon: <Zap className="w-8 h-8 text-[#E85EE3]" /> },
    { name: "Next.js", icon: <Globe className="w-8 h-8 text-white" /> },
    { name: "C/C++", icon: <Cpu className="w-8 h-8 text-[#9B6BF7]" /> },
    { name: "Java", icon: <Coffee className="w-8 h-8 text-[#F7936F]" /> },
    { name: "Clojure", icon: <TerminalSquare className="w-8 h-8 text-[#E85EE3]" /> },
    { name: "HTML/CSS", icon: <FileType className="w-8 h-8 text-[#E85EE3]" /> },
    { name: "PHP", icon: <Server className="w-8 h-8 text-[#9B6BF7]" /> },
    { name: "SQL", icon: <Database className="w-8 h-8 text-[#4B9EF4]" /> },
    { name: "MySQL", icon: <Database className="w-8 h-8 text-[#F7936F]" /> },
    { name: "NoSQL", icon: <Database className="w-8 h-8 text-[#E85EE3]" /> },
    { name: "AWS", icon: <Cloud className="w-8 h-8 text-[#F7936F]" /> },
    { name: "Data Analysis", icon: <BarChart3 className="w-8 h-8 text-[#4B9EF4]" /> },
    { name: "Data Science", icon: <Brain className="w-8 h-8 text-[#9B6BF7]" /> },
    { name: "Jupyter", icon: <BookOpen className="w-8 h-8 text-[#E85EE3]" /> },
  ]

  return (
    <div ref={sectionRef} className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2
        className={`text-4xl font-light text-center mb-12 bg-gradient-to-r from-[#4B9EF4] via-[#9B6BF7] via-[#E85EE3] to-[#F7936F] bg-clip-text text-transparent gradient-glow transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        My Skills
      </h2>

      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center justify-center p-4 rounded-xl bg-[#0A0C12] border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-[#0E1117] group`}
            style={{
              transitionDelay: `${300 + index * 50}ms`,
            }}
          >
            <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <span className="text-sm text-center font-medium text-white group-hover:text-gray-200 transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
