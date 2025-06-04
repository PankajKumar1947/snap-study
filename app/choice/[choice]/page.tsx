"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Computer, Smartphone, Zap, Bot, Wrench, Building, ArrowRight, BookOpen, Users, Star } from "lucide-react"
import { useParams } from "next/navigation"

const branches = [
    {
        id: "cse",
        name: "CSE",
        fullName: "Computer Science Engineering",
        description: "Software development, algorithms, and programming",
        icon: Computer,
        image: "/placeholder.svg?height=200&width=300",
        students: "12,500+",
        materials: "2,800+",
        gradient: "from-violet-500/20 to-violet-600/10",
        iconColor: "text-violet-400",
        popular: true,
    },
    {
        id: "it",
        name: "IT",
        fullName: "Information Technology",
        description: "Network systems, databases, and IT infrastructure",
        icon: Smartphone,
        image: "/placeholder.svg?height=200&width=300",
        students: "8,200+",
        materials: "2,100+",
        gradient: "from-purple-500/20 to-purple-600/10",
        iconColor: "text-purple-400",
        popular: false,
    },
    {
        id: "ece",
        name: "ECE",
        fullName: "Electronics & Communication",
        description: "Circuit design, communication systems, and electronics",
        icon: Zap,
        image: "/placeholder.svg?height=200&width=300",
        students: "9,800+",
        materials: "2,400+",
        gradient: "from-indigo-500/20 to-indigo-600/10",
        iconColor: "text-indigo-400",
        popular: false,
    },
    {
        id: "aiml",
        name: "AIML",
        fullName: "AI & Machine Learning",
        description: "Artificial intelligence, ML algorithms, and data science",
        icon: Bot,
        image: "/placeholder.svg?height=200&width=300",
        students: "6,500+",
        materials: "1,900+",
        gradient: "from-violet-600/20 to-violet-700/10",
        iconColor: "text-violet-500",
        popular: true,
    },
    {
        id: "me",
        name: "ME",
        fullName: "Mechanical Engineering",
        description: "Mechanical systems, thermodynamics, and manufacturing",
        icon: Wrench,
        image: "/placeholder.svg?height=200&width=300",
        students: "7,300+",
        materials: "2,200+",
        gradient: "from-purple-600/20 to-purple-700/10",
        iconColor: "text-purple-500",
        popular: false,
    },
    {
        id: "civil",
        name: "CIVIL",
        fullName: "Civil Engineering",
        description: "Construction, structural design, and infrastructure",
        icon: Building,
        image: "/placeholder.svg?height=200&width=300",
        students: "8,900+",
        materials: "2,300+",
        gradient: "from-indigo-600/20 to-indigo-700/10",
        iconColor: "text-indigo-500",
        popular: false,
    },
]

const semesters = [
    {
        id: "sem1",
        name: "SEMESTER-1",
        description: "Foundation courses and basic concepts",
        subjects: 6,
        duration: "6 months",
    },
    {
        id: "sem2",
        name: "SEMESTER-2",
        description: "Core fundamentals and practical applications",
        subjects: 7,
        duration: "6 months",
    },
    {
        id: "sem3",
        name: "SEMESTER-3",
        description: "Advanced topics and specialization begins",
        subjects: 8,
        duration: "6 months",
    },
    {
        id: "sem4",
        name: "SEMESTER-4",
        description: "In-depth study and project work",
        subjects: 8,
        duration: "6 months",
    },
    {
        id: "sem5",
        name: "SEMESTER-5",
        description: "Specialization and elective courses",
        subjects: 7,
        duration: "6 months",
    },
    {
        id: "sem6",
        name: "SEMESTER-6",
        description: "Advanced projects and industry exposure",
        subjects: 7,
        duration: "6 months",
    },
    {
        id: "sem7",
        name: "SEMESTER-7",
        description: "Final year projects and internships",
        subjects: 6,
        duration: "6 months",
    },
    {
        id: "sem8",
        name: "SEMESTER-8",
        description: "Capstone projects and placement preparation",
        subjects: 5,
        duration: "6 months",
    },
]

export default function OrganiserPage() {
    const [selectedBranch, setSelectedBranch] = useState<string | null>(null)
    const [selectedSemester, setSelectedSemester] = useState<string | null>(null)
    const choice = useParams().choice;

    const handleBranchSelect = (branchId: string) => {
        setSelectedBranch(branchId)
        setSelectedSemester(null) // Reset semester when branch changes
    }

    const handleSemesterSelect = (semesterId: string) => {
        setSelectedSemester(semesterId)
    }

    const handleProceed = () => {
        if (selectedBranch && selectedSemester) {
            // Navigate to the specific organiser page
            window.location.href = `${choice}/${selectedBranch}/${selectedSemester}`
        }
    }

    return (
        <div className="relative z-10 pt-8 sm:pt-12 pb-16 sm:pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center mb-4 sm:mb-6 bg-black/30 backdrop-blur-2xl border border-violet-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-2xl shadow-violet-500/10">
                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-violet-400" />
                        <span className="text-violet-400 font-semibold text-sm sm:text-base">Study Organiser</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
                        Get Your{" "}
                        <span className="bg-gradient-to-r from-violet-400 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                            Organiser
                        </span>
                    </h1>
                    <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
                        Select your branch and semester to access personalized study materials and resources
                    </p>
                </div>

                {/* Branch Selection */}
                <div className="mb-12 sm:mb-16">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 sm:mb-12 text-center">
                        Select Your Branch
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {branches.map((branch) => (
                            <div key={branch.id} className="group">
                                <div
                                    className={`relative bg-black/20 backdrop-blur-2xl border rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 shadow-2xl shadow-violet-500/10 hover:shadow-violet-500/20 overflow-hidden cursor-pointer ${selectedBranch === branch.id
                                        ? "border-violet-400/60 bg-violet-500/10"
                                        : "border-violet-500/20 hover:border-violet-400/40"
                                        }`}
                                    onClick={() => handleBranchSelect(branch.id)}
                                >
                                    {/* Glass effects */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${branch.gradient} rounded-2xl sm:rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                                    ></div>

                                    <div className="relative z-10">
                                        {/* Popular Badge */}
                                        {branch.popular && (
                                            <div className="absolute -top-2 -right-2">
                                                <Badge className="bg-gradient-to-r from-violet-500/80 to-violet-600/80 text-white border border-violet-400/30 font-bold">
                                                    <Star className="w-3 h-3 mr-1 fill-current" />
                                                    Popular
                                                </Badge>
                                            </div>
                                        )}

                                        {/* Branch Image */}
                                        <div className="relative mb-6 overflow-hidden rounded-xl">
                                            <img
                                                src={branch.image || "/placeholder.svg"}
                                                alt={branch.fullName}
                                                className="w-full h-32 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                            <div className="absolute bottom-3 right-3">
                                                <div
                                                    className={`w-10 h-10 bg-gradient-to-br from-violet-500/30 to-violet-600/30 backdrop-blur-xl rounded-lg flex items-center justify-center border border-violet-500/30`}
                                                >
                                                    <branch.icon className={`h-5 w-5 ${branch.iconColor}`} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Branch Info */}
                                        <div className="text-center">
                                            <h3 className="text-white text-xl sm:text-2xl font-black mb-2">{branch.name}</h3>
                                            <h4 className="text-violet-400 text-sm sm:text-base font-semibold mb-3">{branch.fullName}</h4>
                                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">{branch.description}</p>

                                            {/* Stats */}
                                            <div className="flex justify-between items-center mb-4">
                                                <div className="text-center">
                                                    <div className="flex items-center text-violet-400 text-xs">
                                                        <Users className="w-3 h-3 mr-1" />
                                                        <span>{branch.students}</span>
                                                    </div>
                                                    <div className="text-gray-500 text-xs">Students</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="flex items-center text-purple-400 text-xs">
                                                        <BookOpen className="w-3 h-3 mr-1" />
                                                        <span>{branch.materials}</span>
                                                    </div>
                                                    <div className="text-gray-500 text-xs">Materials</div>
                                                </div>
                                            </div>

                                            {/* Select Button */}
                                            <Button
                                                className={`w-full transition-all duration-300 ${selectedBranch === branch.id
                                                    ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white"
                                                    : "bg-black/30 border border-violet-500/30 text-violet-400 hover:bg-violet-500/10"
                                                    }`}
                                                variant={selectedBranch === branch.id ? "default" : "outline"}
                                            >
                                                {selectedBranch === branch.id ? "Selected" : "Select"}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Semester Selection */}
                {selectedBranch && (
                    <div className="mb-12 sm:mb-16">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 sm:mb-12 text-center">
                            Select Your Semester
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {semesters.map((semester) => (
                                <div key={semester.id} className="group">
                                    <div
                                        className={`relative bg-black/20 backdrop-blur-2xl border rounded-2xl p-6 transition-all duration-500 hover:scale-105 shadow-xl shadow-violet-500/10 overflow-hidden cursor-pointer ${selectedSemester === semester.id
                                            ? "border-violet-400/60 bg-violet-500/10"
                                            : "border-violet-500/20 hover:border-violet-400/40"
                                            }`}
                                        onClick={() => handleSemesterSelect(semester.id)}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl"></div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-600/10 rounded-2xl opacity-50"></div>

                                        <div className="relative z-10 text-center">
                                            <h3 className="text-white text-lg font-bold mb-2">{semester.name}</h3>
                                            <p className="text-gray-300 text-sm mb-4">{semester.description}</p>
                                            <div className="flex justify-between text-xs text-gray-400 mb-4">
                                                <span>{semester.subjects} subjects</span>
                                                <span>{semester.duration}</span>
                                            </div>
                                            <Button
                                                className={`w-full text-sm transition-all duration-300 ${selectedSemester === semester.id
                                                    ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white"
                                                    : "bg-black/30 border border-violet-500/30 text-violet-400 hover:bg-violet-500/10"
                                                    }`}
                                                variant={selectedSemester === semester.id ? "default" : "outline"}
                                            >
                                                {selectedSemester === semester.id ? "Selected" : "Select"}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Proceed Button */}
                {selectedBranch && selectedSemester && (
                    <div className="text-center">
                        <div className="relative inline-block">
                            <div className="bg-black/20 backdrop-blur-2xl border border-violet-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-violet-500/20">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-600/10 rounded-2xl"></div>

                                <div className="relative z-10">
                                    <p className="text-gray-300 text-sm sm:text-base mb-4">
                                        Ready to access your personalized study organiser?
                                    </p>
                                    <Button
                                        onClick={handleProceed}
                                        className="group bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 border border-violet-400/20"
                                    >
                                        Access My Organiser
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
