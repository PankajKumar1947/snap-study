export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-2xl border-t border-violet-500/20 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 md:mb-0">
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
          <p className="text-gray-400 text-center md:text-right font-light text-sm sm:text-base">
            © 2024 SnapStudy. Empowering MAKAUT students to achieve excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}
