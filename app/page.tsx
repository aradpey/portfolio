"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { DownloadButton } from "@/components/download-button";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsGrid } from "@/components/skills-grid";
import { ContactForm } from "@/components/contact-form";

export default function HomePage() {
  const [starsFaded, setStarsFaded] = useState(false);
  const [starsZoomed, setStarsZoomed] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [starsScale, setStarsScale] = useState(1);
  const [invertAmount, setInvertAmount] = useState(0);
  const skillsSectionRef = useRef<HTMLDivElement>(null);

  // Add this useEffect for scroll locking
  useEffect(() => {
    // Lock scrolling until content is visible
    if (!contentVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [contentVisible]);

  useEffect(() => {
    const timer1 = setTimeout(() => setStarsFaded(true), 500);
    const timer2 = setTimeout(() => setStarsZoomed(true), 2500);
    const timer3 = setTimeout(() => setContentVisible(true), 4000); // Increased from 4000 to 5000

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleScroll = () => {
    if (!skillsSectionRef.current) return;

    const rect = skillsSectionRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Calculate how far we've scrolled into the skills section
    if (rect.top <= viewportHeight) {
      // Calculate scroll progress (0 to 1) with easing
      const rawProgress = Math.min(
        Math.max(0, (viewportHeight - rect.top) / viewportHeight),
        1
      );

      // Apply easing function to make transitions smoother
      // This is a simple cubic ease-in-out function
      const scrollProgress =
        rawProgress < 0.5
          ? 4 * rawProgress * rawProgress * rawProgress
          : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2;

      // Scale from 1 to 1.25 based on scroll progress
      const newScale = 1 + scrollProgress * 0.25;
      setStarsScale(newScale);

      // Set invert amount (0% to 100%) based on scroll progress
      setInvertAmount(scrollProgress * 100);
    } else {
      setStarsScale(1);
      setInvertAmount(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#08090D] text-white">
      {/* Stars background with zoom and invert effects */}
      <div
        className={`fixed inset-0 z-0 transition-all duration-1500 ease-in-out 
          ${starsFaded ? "opacity-100" : "opacity-0"}`}
        style={{
          transform: `scale(${starsZoomed ? starsScale : 1.25})`,
          transformOrigin: "center",
          filter: `invert(${invertAmount}%)`,
          transition:
            "transform 1.5s cubic-bezier(0.4, 0, 0.2, 1), filter 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Stars />
      </div>

      {/* Download Resume Button */}
      <DownloadButton visible={contentVisible} />

      {/* Hero Section */}
      <section
        className={`relative z-10 flex min-h-screen flex-col items-center justify-center -mt-10 px-8 text-center transition-all duration-1500 ease-in-out ${
          contentVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl font-light leading-relaxed md:text-6xl lg:text-7xl">
            Hello, I&apos;m
          </h1>
          <div className="text-6xl font-bold leading-relaxed md:text-7xl lg:text-8xl">
            <span className="gradient-glow bg-gradient-to-r from-[#4B9EF4] via-[#9B6BF7] via-[#E85EE3] to-[#F7936F] bg-clip-text text-transparent inline-block pt-0 pb-5 my-1.5">
              Ahoura
              <br />
              Radpey
            </span>
          </div>
          <div className="text-3xl font-light leading-relaxed md:text-4xl lg:text-5xl">
            <TypeWriter />
          </div>
          <p className="text-xl font-light leading-relaxed md:text-2xl">
            Specializing in{" "}
            <span className="gradient-glow bg-gradient-to-r from-[#4B9EF4] via-[#9B6BF7] via-[#E85EE3] to-[#F7936F] bg-clip-text text-transparent font-medium">
              Python
            </span>{" "}
            and{" "}
            <span className="gradient-glow bg-gradient-to-r from-[#4B9EF4] via-[#9B6BF7] via-[#E85EE3] to-[#F7936F] bg-clip-text text-transparent font-medium">
              TypeScript
            </span>{" "}
            development, building responsive and scalable web applications.
          </p>
        </div>

        <ScrollIndicator />
      </section>

      {/* Projects Section */}
      <section
        ref={skillsSectionRef}
        className="relative z-10 flex flex-col items-center justify-center px-8 py-12"
      >
        <ProjectsSection />
      </section>

      {/* Skills Section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-8 py-12">
        <SkillsGrid />
      </section>

      {/* Contact Section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-8 py-12">
        <ContactForm />
      </section>
    </div>
  );
}

function TypeWriter() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = [
    "Python programmer",
    "computer engineer",
    "full stack developer",
    "TypeScript expert",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, phrases, typingSpeed]);

  return (
    <div className="flex justify-center items-center my-[-2px]">
      <span className="whitespace-nowrap leading-relaxed">
        I&apos;m a&nbsp;
      </span>
      <span className="gradient-glow bg-gradient-to-r from-[#4B9EF4] via-[#9B6BF7] via-[#E85EE3] to-[#F7936F] bg-clip-text text-transparent inline-flex items-center">
        <span className="whitespace-nowrap leading-relaxed">{displayText}</span>
        <span
          className="inline-block w-[2px] bg-[#F7936F] animate-blink"
          style={{ height: "1em", marginLeft: "2px" }}
        ></span>
      </span>
    </div>
  );
}

function Stars() {
  const stars = useMemo(() => {
    return Array.from({ length: 100 }).map(() => ({
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.8 + 0.2,
      animationDelay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="relative h-full w-full">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: "3s",
          }}
        />
      ))}
    </div>
  );
}
