"use client"

import { useState, useEffect } from "react"

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400/60 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-300/40 rounded-full animate-ping delay-500"></div>
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-indigo-500/50 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-violet-400/40 rounded-full animate-ping delay-1500"></div>

      {/* Mouse follower effect */}
      <div
        className="absolute w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    </div>
  )
}
