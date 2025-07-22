"use client";

import { Download } from "lucide-react";
import Link from "next/link";

export function DownloadButton({ visible = true }: { visible?: boolean }) {
  return (
    <div
      className={`fixed top-4 right-4 z-50 transition-opacity duration-1500 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ marginRight: "20px" }}
    >
      <Link
        href="/resume/Ahoura Radpey Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all"
        style={{
          boxShadow: "0 0 8px rgba(155, 107, 247, 0.3)",
        }}
      >
        {/* Gradient border */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(to right, #4B9EF4, #9B6BF7, #E85EE3, #F7936F)",
            opacity: 0.2,
          }}
        ></span>

        {/* Background */}
        <span className="absolute inset-0 rounded-full bg-[#08090D]/90"></span>

        {/* Hover background */}
        <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-[#4B9EF4] via-[#9B6BF7] via-[#E85EE3] to-[#F7936F]"></span>

        {/* Text and icon */}
        <span className="relative z-10 flex items-center gap-1">
          <span className="bg-gradient-to-r from-[#4B9EF4] via-[#9B6BF7] via-[#E85EE3] to-[#F7936F] bg-clip-text text-transparent font-semibold transition-colors duration-300 group-hover:text-white">
            Download Resume
          </span>
          <Download
            size={14}
            className="text-[#E85EE3] transition-colors duration-300 group-hover:text-white"
          />
        </span>
      </Link>
    </div>
  );
}
