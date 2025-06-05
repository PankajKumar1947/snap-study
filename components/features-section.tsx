import { Badge } from "@/components/ui/badge"
import { FileText, GraduationCap, ArrowRight, CalendarHeart, Book } from "lucide-react"
import Link from "next/link"

const features = [
  {
    title: "Latest News and Updates",
    description:"Get the latest news and updates from MAKAUT, including important announcements and events.",
    link: "/news",
    icon: CalendarHeart,
    badge: "News",
    gradient: "from-violet-500/10 via-violet-600/5 to-transparent",
    count: "Latest",
    label: "News",
    accentColor: "violet",
  },
  {
    title: "Chapter Wise Youtube Lectures",
    description: "Engaging and informative lectures delivered by top instructors on a wide range of topics for all chapters. ",
    link: "/choice/playlist",
    icon: GraduationCap,
    badge: "Youtube",
    gradient: "from-purple-500/10 via-purple-600/5 to-transparent",
    count: "200+",
    label: "Lectures",
    accentColor: "purple",
  },
  {
    title: "Previous Year Questions",
    description:"Access comprehensive solved PYQs from the last 10 years with detailed step-by-step explanations and expert insights",
    link: "/choice/pyqs",
    icon: FileText,
    badge: "PYQs",
    gradient: "from-violet-500/10 via-violet-600/5 to-transparent",
    count: "2,500+",
    label: "Questions",
    accentColor: "violet",
  },
  {
    title: "Makaut Organisers",
    description: "Access PDFs of organisers for all the semesters of all the branches of MAKAUT",
    link: "/choice/organisers",
    icon: Book,
    badge: "PDFs",
    gradient: "from-indigo-500/10 via-indigo-600/5 to-transparent",
    count: "200+",
    label: "Organisers",
    accentColor: "indigo",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            Everything You Need to Excel
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive study resources designed specifically for MAKAUT students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div
                className={`relative bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-500 hover:scale-105 shadow-2xl shadow-violet-500/10 hover:shadow-violet-500/20 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl sm:rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="relative">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-gradient-to-br from-${feature.accentColor}-500/30 to-${feature.accentColor}-700/30 backdrop-blur-xl rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-${feature.accentColor}-500/30`}
                      >
                        <feature.icon
                          className={`h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 text-${feature.accentColor}-400`}
                        />
                      </div>
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-${feature.accentColor}-500/20 to-${feature.accentColor}-700/20 rounded-xl sm:rounded-2xl blur-lg opacity-50 -z-10 group-hover:opacity-75 transition-opacity duration-300`}
                      ></div>
                    </div>
                    <Badge
                      className={`bg-gradient-to-r from-${feature.accentColor}-500/80 to-${feature.accentColor}-600/80 backdrop-blur-xl text-white border border-${feature.accentColor}-400/30 font-bold px-2 sm:px-3 py-1 text-xs sm:text-sm`}
                    >
                      {feature.badge}
                    </Badge>
                  </div>

                  <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="text-center">
                      <div className={`text-lg sm:text-xl font-black text-${feature.accentColor}-400`}>
                        {feature.count}
                      </div>
                      <div className="text-gray-400 text-xs sm:text-sm">{feature.label}</div>
                    </div>
                    <Link href={feature.link}
                      className={`text-violet-500 hover:text-violet-800 font-semibold group/btn text-sm sm:text-base flex justify-between gap-x-4 items-center px-4 py-2 rounded-3xl overflow-hidden`}
                    >
                      Learn More
                      <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
