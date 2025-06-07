import {
  ArrowRight,
  Home,
  Info,
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Heart,
  Github,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-2xl border-t border-violet-500/20 pt-12 sm:pt-16 pb-6 sm:pb-8 relative overflow-hidden">
      {/* Glass effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl shadow-violet-500/30">
                  <span className="text-white font-black text-lg sm:text-xl">S</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl sm:rounded-2xl blur-lg opacity-50 -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl sm:rounded-2xl"></div>
              </div>
              <div>
                <span className="text-white font-black text-lg sm:text-xl">SnapStudy</span>
                <div className="text-violet-400 text-xs">MAKAUT EDITION</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Empowering MAKAUT students with comprehensive study resources, organized materials, and a supportive
              learning community.
            </p>
            <div className="flex space-x-3">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full h-9 w-9 text-gray-400 hover:text-violet-400 hover:bg-violet-500/10"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full h-9 w-9 text-gray-400 hover:text-violet-400 hover:bg-violet-500/10"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full h-9 w-9 text-gray-400 hover:text-violet-400 hover:bg-violet-500/10"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="https://github.com/PankajKumar1947" target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full h-9 w-9 text-gray-400 hover:text-violet-400 hover:bg-violet-500/10"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/", icon: Home },
                { name: "About", href: "/about", icon: Info },
                { name: "Organiser", href: "/choice/organiser", icon: Home },
                { name: "PYQ", href: "/choice/pyq", icon: Home },
                { name: "Lectures", href: "/choice/playlist", icon: Home },
                { name: "Notice", href: "/news", icon: Home },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-violet-400 transition-colors group"
                  >
                    <link.icon className="h-4 w-4 mr-2 text-violet-500 group-hover:text-violet-400" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: "Contribute", href: "/donate", icon: Heart },
                { name: "Report Bug", href: "/donate", icon: Home },
                {
                  name: "GitHub Repository",
                  href: "https://github.com/PankajKumar1947/snap-study",
                  icon: Github,
                },
                { name: "Documentation", href: "#", icon: Home },
                { name: "FAQ", href: "#", icon: Home },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-violet-400 transition-colors group"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <link.icon className="h-4 w-4 mr-2 text-violet-500 group-hover:text-violet-400" />
                    <span>{link.name}</span>
                    {link.href.startsWith("http") && <ExternalLink className="h-3 w-3 ml-1 opacity-70" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400">
                <MapPin className="h-5 w-5 mr-2 text-violet-500 flex-shrink-0 mt-0.5" />
                <span>Salt Lake, Sector V, Kolkata, West Bengal, India</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2 text-violet-500" />
                <a href="mailto:contact@snapstudy.com" className="hover:text-violet-400 transition-colors">
                  contact@snapstudy.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2 text-violet-500" />
                <a href="tel:+919876543210" className="hover:text-violet-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Project Link */}
        <div className="relative bg-black/20 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-600/10 rounded-2xl opacity-50"></div>

          <div className="relative z-10">
            <a
              href="https://snapstudy-makaut.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between"
            >
              <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-violet-400 transition-colors">
                snapstudy-makaut
              </div>
              <ArrowRight className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white group-hover:text-violet-400 group-hover:translate-x-2 transition-all" />
            </a>
          </div>
        </div>

        <div className="border-t border-violet-500/20 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 sm:mb-0">© 2024 by SnapStudy. All rights reserved.</p>
            <p className="text-gray-400">
              Created with <Heart className="h-3 w-3 inline text-red-500 fill-current animate-pulse" /> by{" "}
              <a
                href="https://github.com/PankajKumar1947"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 transition-colors font-medium"
              >
                Pankaj Kumar
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
