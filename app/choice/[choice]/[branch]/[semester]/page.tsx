"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    BookOpen,
    Star,
    ArrowLeft,
    Search,
    Grid,
    List,
    Bookmark,
} from "lucide-react"
import Link from "next/link"
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
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedFilter, setSelectedFilter] = useState("all")

    const branchName = useParams().branch
    const semesterName = useParams().semester

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Easy":
                return "text-green-400 bg-green-500/20 border-green-500/30"
            case "Medium":
                return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30"
            case "Hard":
                return "text-red-400 bg-red-500/20 border-red-500/30"
            default:
                return "text-gray-400 bg-gray-500/20 border-gray-500/30"
        }
    }

    return (
        <div className="relative z-10 pt-8 sm:pt-12 pb-16 sm:pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8 sm:mb-12">

                    <div className="text-center">
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
                </div>


                {/* Controls */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12">
                    {/* Search */}
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

                    {/* Filter */}
                    <select
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                        className="px-4 py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                    >
                        <option value="all">All Subjects</option>
                        <option value="popular">Popular</option>
                        <option value="recent">Recently Updated</option>
                        <option value="progress">High Progress</option>
                    </select>

                    {/* View Mode */}
                    <div className="flex bg-black/30 border border-violet-500/30 rounded-xl p-1">
                        <Button
                            variant={viewMode === "grid" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setViewMode("grid")}
                            className={viewMode === "grid" ? "bg-violet-500 text-white" : "text-gray-400 hover:text-white"}
                        >
                            <Grid className="w-4 h-4" />
                        </Button>
                        <Button
                            variant={viewMode === "list" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setViewMode("list")}
                            className={viewMode === "list" ? "bg-violet-500 text-white" : "text-gray-400 hover:text-white"}
                        >
                            <List className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <div className="">
                    <div className="mb-8 sm:mb-12">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Your Subjects</h2>
                        <div className={viewMode === "grid" ? "grid sm:grid-cols-2 gap-6" : "space-y-4"}>
                            {subjects.map((subject) => (
                                <div key={subject.id} className="group">
                                    <div className="relative bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-500 hover:scale-105 shadow-2xl shadow-violet-500/10 overflow-hidden">
                                        {/* Glass effects */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-600/10 rounded-2xl sm:rounded-3xl opacity-50"></div>

                                        <div className="relative z-10">
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <h3 className="text-white text-lg font-bold">{subject.name}</h3>
                                                        {subject.popular && (
                                                            <Badge className="bg-gradient-to-r from-violet-500/80 to-violet-600/80 text-white border border-violet-400/30 text-xs">
                                                                <Star className="w-3 h-3 mr-1 fill-current" />
                                                                Popular
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <p className="text-violet-400 text-sm font-medium">
                                                        {subject.code} • {subject.credits} Credits
                                                    </p>
                                                </div>
                                                <Badge className={`text-xs ${getDifficultyColor(subject.difficulty)}`}>
                                                    {subject.difficulty}
                                                </Badge>
                                            </div>

                                            {/* Progress */}
                                            <div className="mb-4">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-gray-300 text-sm">Progress</span>
                                                    <span className="text-violet-400 text-sm font-semibold">{subject.progress}%</span>
                                                </div>
                                                <div className="w-full bg-gray-700/50 rounded-full h-2">
                                                    <div
                                                        className="bg-gradient-to-r from-violet-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                                                        style={{ width: `${subject.progress}%` }}
                                                    ></div>
                                                </div>
                                            </div>

                                            {/* Stats */}
                                            <div className="grid grid-cols-3 gap-4 mb-4">
                                                <div className="text-center">
                                                    <div className="text-violet-400 text-sm font-bold">{subject.materials}</div>
                                                    <div className="text-gray-500 text-xs">Materials</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-purple-400 text-sm font-bold">{subject.videos}</div>
                                                    <div className="text-gray-500 text-xs">Videos</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-indigo-400 text-sm font-bold">{subject.assignments}</div>
                                                    <div className="text-gray-500 text-xs">Assignments</div>
                                                </div>
                                            </div>

                                            {/* Instructor */}
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="text-gray-300 text-sm">
                                                    <span className="text-gray-500">Instructor:</span> {subject.instructor}
                                                </div>
                                                <div className="text-gray-500 text-xs">{subject.lastUpdated}</div>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex gap-2">
                                                <Button className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white text-sm">
                                                    <BookOpen className="w-4 h-4 mr-2" />
                                                    Study Now
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="border-violet-500/30 text-violet-400 hover:bg-violet-500/10"
                                                >
                                                    <Bookmark className="w-4 h-4" />
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
        </div>
    )
}
