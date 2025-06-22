import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Arjun Kumar",
    role: "CSE Final Year",
    content:
      "SnapStudy transformed my academic journey. The organized materials and expert guidance helped me achieve a 9.2 CGPA!",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "ECE 3rd Year",
    content:
      "The live lectures and doubt sessions are incredible. I finally understand complex concepts that seemed impossible before.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6">
            Student Success Stories
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light">Real results from real students</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="relative bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-500 hover:scale-105 shadow-2xl shadow-violet-500/10 overflow-hidden">
                {/* Glass effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-violet-400/30 mr-3 sm:mr-4"
                      />
                      <div>
                        <h4 className="text-white font-bold text-sm sm:text-base">{testimonial.name}</h4>
                        <p className="text-violet-400 text-xs sm:text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic">"{testimonial.content}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
