"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Search, X } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="relative z-50 bg-black/20 backdrop-blur-2xl border-b border-violet-500/20 shadow-2xl shadow-violet-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-violet-500 via-violet-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-all duration-300">
                <span className="text-white font-black text-lg sm:text-xl md:text-2xl">S</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl sm:rounded-2xl blur-lg opacity-50 -z-10 group-hover:opacity-75 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl sm:rounded-2xl"></div>
            </div>
            <div>
              <span className="text-white font-black text-lg sm:text-xl md:text-2xl tracking-tight">SnapStudy</span>
              <div className="text-violet-400 text-xs sm:text-xs md:text-xs font-medium tracking-wider">
                MAKAUT EDITION
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {["Home", "Notice", "Organiser", "PYQ", "Lectures"].map((item, index) => (
              <Link
                key={item}
                href="#"
                className={`${index === 0 ? "text-white font-semibold" : "text-gray-300"} hover:text-violet-400 transition-all duration-300 font-medium text-sm xl:text-base relative group py-2`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                {index === 0 && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-purple-500"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-violet-500/20 hover:text-violet-400 transition-all duration-300 rounded-lg sm:rounded-xl backdrop-blur-sm w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
            >
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-violet-500/20 transition-all duration-300 rounded-lg sm:rounded-xl w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/80 backdrop-blur-2xl border-t border-violet-500/20">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            {["Home", "Notice", "Organiser", "PYQ", "Lectures"].map((item, index) => (
              <Link
                key={item}
                href="#"
                className="block text-white hover:text-violet-400 transition-all duration-300 font-medium text-base sm:text-lg py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl hover:bg-violet-500/10"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
