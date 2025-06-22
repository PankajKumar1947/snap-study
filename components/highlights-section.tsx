import { BookOpen, Users, Award, TrendingUp } from "lucide-react"

const highlights = [
  {
    icon: BookOpen,
    title: "10,000+ Study Materials",
    description: "Comprehensive collection of notes, papers, and resources curated by experts",
    gradient: "from-violet-500/30 via-violet-600/20 to-transparent",
    iconGradient: "from-violet-400 to-violet-600",
  },
  {
    icon: Users,
    title: "50,000+ Students",
    description: "Join our thriving community of successful MAKAUT students worldwide",
    gradient: "from-purple-500/30 via-purple-600/20 to-transparent",
    iconGradient: "from-purple-400 to-purple-600",
  },
  {
    icon: Award,
    title: "Expert Curated",
    description: "All content reviewed and approved by top performers and faculty members",
    gradient: "from-violet-600/30 via-violet-700/20 to-transparent",
    iconGradient: "from-violet-500 to-violet-700",
  },
  {
    icon: TrendingUp,
    title: "95% Success Rate",
    description: "Students consistently report improved grades and academic performance",
    gradient: "from-indigo-500/30 via-indigo-600/20 to-transparent",
    iconGradient: "from-indigo-400 to-indigo-600",
  },
]

export default function HighlightsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            Main Highlights
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light">Why thousands of students choose SnapStudy</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="group">
              <div className="relative bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-500 text-center hover:scale-105 shadow-2xl shadow-violet-500/10 hover:shadow-violet-500/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} rounded-2xl sm:rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="relative mx-auto mb-4 sm:mb-6">
                    <div
                      className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${highlight.iconGradient} rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-violet-500/25 border border-violet-400/30`}
                    >
                      <highlight.icon className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${highlight.iconGradient} rounded-2xl sm:rounded-3xl blur-xl opacity-50 -z-10 group-hover:opacity-75 transition-opacity duration-300`}
                    ></div>
                    <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-xl sm:rounded-2xl"></div>
                  </div>
                  <h3 className="text-white text-base sm:text-lg font-bold mb-3 sm:mb-4">{highlight.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
