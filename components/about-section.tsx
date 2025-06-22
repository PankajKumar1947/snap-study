import { Button } from "@/components/ui/button"
import {
    Users,
    Target,
    Award,
    BookOpen,
    Lightbulb,
    Heart,
    ArrowRight,
    CheckCircle,
    Zap,
    Shield,
    Globe,
} from "lucide-react"

const values = [
    {
        icon: Target,
        title: "Excellence",
        description: "We strive for academic excellence in everything we do, ensuring top-quality content and resources.",
        gradient: "from-violet-500/20 to-violet-600/10",
    },
    {
        icon: Heart,
        title: "Student-Centric",
        description: "Every decision we make is centered around improving student outcomes and learning experiences.",
        gradient: "from-purple-500/20 to-purple-600/10",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We continuously innovate to bring cutting-edge learning solutions to MAKAUT students.",
        gradient: "from-indigo-500/20 to-indigo-600/10",
    },
    {
        icon: Globe,
        title: "Accessibility",
        description: "Making quality education accessible to every MAKAUT student, regardless of their background.",
        gradient: "from-violet-600/20 to-violet-700/10",
    },
]

const achievements = [
    { icon: Users, value: "50,000+", label: "Active Students" },
    { icon: BookOpen, value: "10,000+", label: "Study Materials" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: Zap, value: "24/7", label: "Support Available" },
]

const features = [
    "Comprehensive study materials curated by experts",
    "Live interactive sessions with top faculty",
    "AI-powered personalized learning paths",
    "Previous year questions with detailed solutions",
    "Real-time doubt resolution and support",
    "Mobile-first design for learning on the go",
]

export default function AboutSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
                        About SnapStudy
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
                        Empowering MAKAUT students with innovative learning solutions and comprehensive study resources
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 mb-16 sm:mb-20">
                    {/* Story Section */}
                    <div className="relative">
                        <div className="bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-500 shadow-2xl shadow-violet-500/10 overflow-hidden">
                            {/* Glass effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-600/10 rounded-2xl sm:rounded-3xl opacity-50"></div>

                            <div className="relative z-10">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Our Story</h3>
                                <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                                    <p>
                                        Founded in 2020 by a group of MAKAUT alumni, SnapStudy was born from the frustration of scattered
                                        study materials and lack of organized resources for university students.
                                    </p>
                                    <p>
                                        We recognized that MAKAUT students needed a centralized platform that could provide quality study
                                        materials, expert guidance, and a supportive learning community.
                                    </p>
                                    <p>
                                        Today, we're proud to serve over 50,000 students across various MAKAUT colleges, helping them
                                        achieve academic excellence and build successful careers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="space-y-6 sm:space-y-8">
                        {/* Mission */}
                        <div className="relative">
                            <div className="bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-500 shadow-2xl shadow-violet-500/10 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-600/10 rounded-2xl sm:rounded-3xl opacity-50"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500/30 to-violet-600/30 rounded-xl flex items-center justify-center mr-4 border border-violet-500/30">
                                            <Target className="h-6 w-6 text-violet-400" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white">Our Mission</h3>
                                    </div>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                        To democratize quality education for MAKAUT students by providing comprehensive, organized, and
                                        accessible study resources that enable academic excellence.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="relative">
                            <div className="bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-500 shadow-2xl shadow-violet-500/10 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-600/10 rounded-2xl sm:rounded-3xl opacity-50"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mr-4 border border-purple-500/30">
                                            <Shield className="h-6 w-6 text-purple-400" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white">Our Vision</h3>
                                    </div>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                        To become the leading educational platform for MAKAUT students, fostering a community of learners
                                        who achieve academic success and professional growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-16 sm:mb-20">
                    <div className="text-center mb-12 sm:mb-16">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">Our Core Values</h3>
                        <p className="text-gray-400 text-sm sm:text-base">The principles that guide everything we do</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="group">
                                <div className="relative bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-500 text-center hover:scale-105 shadow-2xl shadow-violet-500/10 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl sm:rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                                    ></div>

                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-gradient-to-br from-violet-500/30 to-violet-600/30 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-violet-500/30 group-hover:scale-110 transition-transform duration-300">
                                            <value.icon className="h-8 w-8 text-violet-400" />
                                        </div>
                                        <h4 className="text-white text-base sm:text-lg font-bold mb-3">{value.title}</h4>
                                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements Grid */}
                <div className="mb-16 sm:mb-20">
                    <div className="text-center mb-12 sm:mb-16">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">Our Achievements</h3>
                        <p className="text-gray-400 text-sm sm:text-base">Numbers that speak for our impact</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="group">
                                <div className="bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-300 hover:scale-105 shadow-xl shadow-violet-500/5 text-center">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-violet-500/30 group-hover:scale-110 transition-transform">
                                        <achievement.icon className="h-6 w-6 sm:h-8 sm:w-8 text-violet-400" />
                                    </div>
                                    <div className="text-xl sm:text-2xl font-black text-white mb-1">{achievement.value}</div>
                                    <div className="text-gray-400 text-xs sm:text-sm font-medium">{achievement.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* What We Offer */}
                <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8">What We Offer</h3>
                        <div className="space-y-3 sm:space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-violet-400 mr-3 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-500 shadow-2xl shadow-violet-500/10 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-600/10 rounded-2xl sm:rounded-3xl opacity-50"></div>

                            <div className="relative z-10">
                                <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Join Our Community</h4>
                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                                    Become part of a thriving community of MAKAUT students who are committed to academic excellence and
                                    mutual support.
                                </p>
                                <Button className="group bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-bold rounded-xl shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 border border-violet-400/20 w-full sm:w-auto">
                                    Get Started Today
                                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
