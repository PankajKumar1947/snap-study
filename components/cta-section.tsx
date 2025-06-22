import { Button } from "@/components/ui/button"
import { Star, Sparkles, Clock } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Ultimate Glass Card */}
        <div className="relative bg-black/20 backdrop-blur-2xl border border-violet-500/30 rounded-2xl sm:rounded-3xl shadow-2xl shadow-violet-500/20 overflow-hidden">
          {/* Enhanced glass effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl sm:rounded-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-600/10 rounded-2xl sm:rounded-3xl"></div>

          <div className="relative z-10 p-8 sm:p-12 md:p-16">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400 fill-current" />
                ))}
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
              Ready to Ace Your Exams?
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Join thousands of successful MAKAUT students who have transformed their academic journey with SnapStudy
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 border border-violet-400/20 w-full sm:w-auto"
              >
                <Sparkles className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-violet-500/50 text-white hover:bg-violet-500/10 hover:border-violet-400 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-xl sm:rounded-2xl backdrop-blur-2xl transition-all duration-300 hover:scale-105 bg-black/20 w-full sm:w-auto"
              >
                <Clock className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
