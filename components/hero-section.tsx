import { Button } from "@/components/ui/button"
import {
  Star,
  Sparkles,
  Crown,
  Lightbulb,
  Rocket,
  Play,
  ChevronRight,
  Download,
  Zap,
  Shield,
  Target,
} from "lucide-react"

const achievements = [
  { icon: Crown, label: "Top Rated", value: "#1" },
  { icon: Lightbulb, label: "Innovation", value: "2024" },
  { icon: Rocket, label: "Growth", value: "300%" },
]

const stats = [
  { icon: Zap, value: "99.9%", label: "Uptime", color: "text-violet-400" },
  { icon: Shield, value: "24/7", label: "Support", color: "text-purple-400" },
  { icon: Target, value: "95%", label: "Success Rate", color: "text-indigo-400" },
]

export default function HeroSection() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center mb-6 sm:mb-8 bg-black/30 backdrop-blur-2xl border border-violet-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-2xl shadow-violet-500/10">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-violet-400 fill-current" />
            <span className="text-violet-400 font-semibold text-sm sm:text-base">Trusted by 50,000+ Students</span>
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 ml-2 text-violet-300" />
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-none tracking-tight">
            Explore Latest
            <span className="block bg-gradient-to-r from-violet-400 via-violet-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
              MAKAUT Study Material
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-black/20 backdrop-blur-xl border border-violet-500/20 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 flex items-center space-x-1.5 sm:space-x-2"
              >
                <achievement.icon className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" />
                <span className="text-violet-400 font-bold text-xs sm:text-sm">{achievement.value}</span>
                <span className="text-gray-400 text-xs">{achievement.label}</span>
              </div>
            ))}
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Organised with ease, designed for excellence
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 border border-violet-400/20 sm:w-auto"
            >
              <Play className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
              Start Learning
              <ChevronRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl sm:max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-violet-400/40 transition-all duration-300 hover:scale-105 shadow-xl shadow-violet-500/5">
                  <div
                    className={`w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-violet-500/30 group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon className={`h-5 w-5 sm:h-7 sm:w-7 ${stat.color}`} />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-xs sm:text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
