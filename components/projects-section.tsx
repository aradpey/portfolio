"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface ProjectProps {
  title: string
  description: string
  index: number
  imageUrl?: string
  projectUrl?: string
}

function Project({ title, description, index, imageUrl, projectUrl }: ProjectProps) {
  const projectRef = useRef<HTMLDivElement>(null)
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

    if (projectRef.current) {
      observer.observe(projectRef.current)
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current)
      }
    }
  }, [])

  const initialTransform = index % 2 === 0 ? "-translate-x-[50px]" : "translate-x-[50px]"

  const ProjectWrapper = projectUrl ? Link : "div"
  const wrapperProps = projectUrl ? { href: projectUrl, target: "_blank", rel: "noopener noreferrer" } : {}

  return (
    <div
      ref={projectRef}
      className={`flex flex-col items-center transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${initialTransform}`
      }`}
    >
      <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-[#4B9EF4] via-[#9B6BF7] via-[#E85EE3] to-[#F7936F] bg-clip-text text-transparent">
        {title}
      </h3>
      <ProjectWrapper {...wrapperProps} className="block w-full mb-4 group">
        <div
          className="w-full aspect-video rounded-xl overflow-hidden relative transition-all duration-300 group-hover:scale-[1.02]"
          style={{
            background: "linear-gradient(to right, #4B9EF4, #9B6BF7, #E85EE3, #F7936F)",
            padding: "2px",
          }}
        >
          <div className="w-full h-full rounded-[10px] bg-[#0A0C12] flex items-center justify-center overflow-hidden">
            {imageUrl ? (
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={title}
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-gray-500">Project {index + 1} Image</div>
            )}
          </div>

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
            style={{
              boxShadow: "0 0 15px rgba(155, 107, 247, 0.5), 0 0 15px rgba(232, 94, 227, 0.5)",
            }}
          ></div>
        </div>
      </ProjectWrapper>
      <p className="text-center text-gray-300 max-w-md">{description}</p>
    </div>
  )
}

export function ProjectsSection() {
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

  const projects = [
    {
      title: "NBA Today's Game Tracker",
      description:
        "A serverless API that delivers real-time NBA game schedules, live scores, game statuses, and detailed player box scores via a Python-based endpoint deployed on Vercel.",
      imageUrl: "/images/projects/nba-today.png",
      projectUrl: "https://nbas-today-test.vercel.app/",
    },
    {
      title: "Clippage",
      description:
        "A platform for users to schedule, create, and automate short-form storytelling content, powered by a robust SQL database, a dynamic TypeScript frontend, and a scalable Python backend.",
      imageUrl: "/images/projects/clippage.png",
      projectUrl: "https://clippage.vercel.app/",
    },
    {
      title: "Covgenie",
      description:
        "A fully functional end-to-end SaaS web application that allows users to generate personalized cover letters using AI. It supports user account creation, authentication, Stripe-powered payments, secure Supabase database integration, and a responsive dashboard for managing activity. Built to streamline the cover letter writing process with a fast, intuitive interface.",
      imageUrl: "/images/projects/covgenie.png",
      projectUrl: "http://covgenie.com",
    },
    {
      title: "FreeBrowserTools",
      description:
        "A privacy-first web platform offering a suite of fast, browser-based tools for developers, designers, and creators. Built to be completely free and accessible, each tool runs locally to ensure user data stays secure. Designed for speed, simplicity, and real-world utility.",
      imageUrl: "/images/projects/freebrowsertools.png",
      projectUrl: "http://freebrowsertools.dev",
    },
  ]

  return (
    <div ref={sectionRef} className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2
        className={`text-4xl font-light text-center mb-8 bg-gradient-to-r from-[#4B9EF4] via-[#9B6BF7] via-[#E85EE3] to-[#F7936F] bg-clip-text text-transparent gradient-glow transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  )
}
