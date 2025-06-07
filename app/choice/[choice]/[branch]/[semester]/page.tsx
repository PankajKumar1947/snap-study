"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, Search, Grid } from "lucide-react"
import { useParams } from "next/navigation"
// Mock data for CSE Semester 1
const subjects = [
    {
        id: "math1",
        name: "Engineering Mathematics I",
        code: "MA101",
        credits: 4,
        materials: 45,
        videos: 12,
        assignments: 8,
        progress: 75,
        difficulty: "Medium",
        instructor: "Dr. Rajesh Kumar",
        lastUpdated: "2 days ago",
        popular: true,
    },
    {
        id: "physics",
        name: "Engineering Physics",
        code: "PH101",
        credits: 3,
        materials: 38,
        videos: 15,
        assignments: 6,
        progress: 60,
        difficulty: "Hard",
        instructor: "Prof. Anita Sharma",
        lastUpdated: "1 day ago",
        popular: false,
    },
    {
        id: "chemistry",
        name: "Engineering Chemistry",
        code: "CH101",
        credits: 3,
        materials: 32,
        videos: 10,
        assignments: 5,
        progress: 85,
        difficulty: "Easy",
        instructor: "Dr. Suresh Patel",
        lastUpdated: "3 days ago",
        popular: false,
    },
    {
        id: "programming",
        name: "Programming Fundamentals",
        code: "CS101",
        credits: 4,
        materials: 52,
        videos: 20,
        assignments: 12,
        progress: 90,
        difficulty: "Medium",
        instructor: "Prof. Priya Singh",
        lastUpdated: "1 day ago",
        popular: true,
    },
    {
        id: "english",
        name: "Technical English",
        code: "EN101",
        credits: 2,
        materials: 25,
        videos: 8,
        assignments: 4,
        progress: 95,
        difficulty: "Easy",
        instructor: "Ms. Sarah Johnson",
        lastUpdated: "4 days ago",
        popular: false,
    },
    {
        id: "workshop",
        name: "Workshop Practice",
        code: "WS101",
        credits: 2,
        materials: 18,
        videos: 6,
        assignments: 3,
        progress: 40,
        difficulty: "Medium",
        instructor: "Mr. Ravi Mehta",
        lastUpdated: "5 days ago",
        popular: false,
    },
]

export default function OrganiserDetailPage() {
    const [searchTerm, setSearchTerm] = useState("")

    const branchName = useParams().branch
    const semesterName = useParams().semester

    return (
        <div className="relative z-10 pt-8 sm:pt-12 pb-16 sm:pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-8 sm:mb-12">
                        <div className="inline-flex items-center mb-4 bg-black/30 backdrop-blur-2xl border border-violet-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-2xl shadow-violet-500/10">
                            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-violet-400" />
                            <span className="text-violet-400 font-semibold text-sm sm:text-base">
                                {branchName} • {semesterName}
                            </span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                            Your Study{" "}
                            <span className="bg-gradient-to-r from-violet-400 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                                Organiser
                            </span>
                        </h1>
                        <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
                            Access all your study materials, assignments, and resources in one organized place
                        </p>
                    </div>


                {/* Controls */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search subjects, materials, or instructors..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                        />
                    </div>

                    <div className="flex bg-black/30 border border-violet-500/30 rounded-xl p-1">
                        <Button
                            variant="default"
                            size="sm"
                            className="bg-violet-500 text-white h-full"
                        >
                            <Grid className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <div className="mb-8 sm:mb-12">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Your Subjects</h2>
                    <div className={"grid sm:grid-cols-2 gap-6"}>
                        {subjects.map((subject) => (
                            <div key={subject.id} className="group">
                                <div className="relative bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-500 hover:scale-105 shadow-2xl shadow-violet-500/10 overflow-hidden">
                                    {/* Glass effects */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-600/10 rounded-2xl sm:rounded-3xl opacity-50"></div>

                                    <h3 className="text-white text-lg font-bold">{subject.name}</h3>
                                    <div className="flex items-center gap-2 justify-between">
                                        <p className="text-violet-400 text-sm font-medium">
                                            {subject.code} • {subject.credits} Credits
                                        </p>
                                        <div>
                                            <Button className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white text-sm">
                                                <BookOpen className="w-4 h-4 mr-2" />
                                                Study Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
