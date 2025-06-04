"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Heart,
    Gift,
    Users,
    BookOpen,
    Video,
    FileText,
    Bug,
    Github,
    ExternalLink,
    ArrowRight,
} from "lucide-react"

const contributionTypes = [
    {
        id: "lectures",
        title: "YouTube Lectures",
        description: "Share educational video content to help fellow students learn better",
        icon: Video,
        color: "violet",
        steps: [
            "Fork the repository to your GitHub account",
            "Choose the Department for which you want to make contribution",
            "Make changes to the JSON file containing the lecture links",
            "Submit a pull request with a clear description of the changes you've made",
        ],
        requirements: ["Valid YouTube links", "Proper categorization", "Quality content"],
        reward: "Recognition as contributor",
    },
    {
        id: "materials",
        title: "Study Materials & PYQs",
        description: "Contribute PDFs of organizers, previous year questions, and study materials",
        icon: FileText,
        color: "purple",
        steps: [
            "Ensure submitted PDFs are accurate representations of previous year questions and organizers",
            "Provide relevant metadata such as your name, organiser for which semester, and subject for each submission",
            "Fill out the form from given links with all required information",
            "Submitted PDFs will be reviewed for quality and relevance before publication",
        ],
        requirements: ["High-quality PDFs", "Accurate metadata", "Relevant content"],
        reward: "Featured contributor status",
    },
    {
        id: "bugs",
        title: "Bug Reports",
        description: "Help us improve by reporting bugs and suggesting enhancements",
        icon: Bug,
        color: "indigo",
        steps: [
            "Identify and document the bug or issue",
            "Provide detailed steps to reproduce the problem",
            "Include screenshots or screen recordings if possible",
            "Submit the report through our GitHub issues or contact form",
        ],
        requirements: ["Clear description", "Reproduction steps", "Browser/device info"],
        reward: "Bug bounty recognition",
    },
]

const stats = [
    { label: "Contributors", value: "150+", icon: Users },
    { label: "Materials Added", value: "2,500+", icon: BookOpen },
    { label: "Video Lectures", value: "800+", icon: Video },
    { label: "Students Helped", value: "50,000+", icon: Heart },
]

export default function DonatePage() {

    return (
        <div className="relative z-10 pt-8 sm:pt-12 pb-16 sm:pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center mb-4 sm:mb-6 bg-black/30 backdrop-blur-2xl border border-violet-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-2xl shadow-violet-500/10">
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-red-600 fill-current" />
                        <span className="text-violet-400 font-semibold text-sm sm:text-base">Support SnapStudy</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
                        Contribute &{" "}
                        <span className="bg-gradient-to-r from-violet-400 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                            Support
                        </span>
                    </h1>
                    <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
                        Help us build the best educational platform for MAKAUT students. Contribute content, report bugs, or
                        support us financially.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="group">
                            <div className="bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl p-4 sm:p-6 hover:border-violet-400/40 transition-all duration-300 hover:scale-105 shadow-xl shadow-violet-500/5">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-violet-500/30">
                                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-violet-400" />
                                </div>
                                <div className="text-center">
                                    <div className="text-lg sm:text-xl font-black text-white mb-1">{stat.value}</div>
                                    <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contribution Types */}
                <div className="mb-12 sm:mb-16">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 sm:mb-12 text-center">
                        Ways to Contribute
                    </h2>
                    <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                        {contributionTypes.map((type) => (
                            <div key={type.id} className="group">
                                <div className="relative bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-500 hover:scale-105 shadow-2xl shadow-violet-500/10 overflow-hidden h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br from-${type.color}-500/10 via-transparent to-${type.color}-600/10 rounded-2xl sm:rounded-3xl opacity-50`}
                                    ></div>

                                    <div className="relative z-10">
                                        <div
                                            className={`w-16 h-16 bg-gradient-to-br from-${type.color}-500/30 to-${type.color}-600/30 rounded-2xl flex items-center justify-center mb-6 border border-${type.color}-500/30`}
                                        >
                                            <type.icon className={`h-8 w-8 text-${type.color}-400`} />
                                        </div>

                                        <h3 className="text-white text-xl font-bold mb-3">{type.title}</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed mb-6">{type.description}</p>

                                        <div className="mb-6">
                                            <h4 className="text-white text-sm font-semibold mb-3">Guidelines:</h4>
                                            <ol className="space-y-2">
                                                {type.steps.map((step, index) => (
                                                    <li key={index} className="flex items-start text-gray-300 text-sm">
                                                        <span className="text-violet-400 font-bold mr-2 mt-0.5">{index + 1}.</span>
                                                        <span>{step}</span>
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="text-white text-sm font-semibold mb-3">Requirements:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {type.requirements.map((req, index) => (
                                                    <Badge
                                                        key={index}
                                                        className={`bg-${type.color}-500/20 text-${type.color}-400 border border-${type.color}-500/30 text-xs`}
                                                    >
                                                        {req}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="text-xs text-gray-400">
                                                <Gift className="w-3 h-3 inline mr-1" />
                                                {type.reward}
                                            </div>
                                            <Button
                                                className={`bg-gradient-to-r from-${type.color}-500 to-${type.color}-600 hover:from-${type.color}-600 hover:to-${type.color}-700 text-white text-sm`}
                                            >
                                                {type.id === "bugs" ? "Report Bug" : "Contribute"}
                                                <ExternalLink className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="relative inline-block max-w-2xl">
                        <div className="bg-black/20 backdrop-blur-2xl border border-violet-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-violet-500/20">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-600/10 rounded-2xl"></div>

                            <div className="relative z-10">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Join Our Community</h3>
                                <p className="text-gray-300 text-sm sm:text-base mb-6">
                                    Whether you contribute content, report bugs, or provide financial support, you're helping thousands
                                    of students succeed in their academic journey.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button className="group bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-6 py-3 font-bold rounded-xl">
                                        <Github className="mr-2 h-5 w-5" />
                                        View on GitHub
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="border-violet-500/50 text-violet-400 hover:bg-violet-500/10 px-6 py-3 rounded-xl"
                                    >
                                        <Heart className="mr-2 h-5 w-5" />
                                        Become a Supporter
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
