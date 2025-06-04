"use client"

import { Button } from "@/components/ui/button"
import { Bell, Calendar, Badge, Search, Bookmark, ChevronRight, Clock, Eye, Share2, TrendingUp } from "lucide-react"
import { useState } from "react"

const notices = [
    {
        id: 1,
        title: "Mid-Semester Examination Schedule Released",
        excerpt:
            "The examination schedule for mid-semester exams has been published. Students are advised to check their respective timetables.",
        category: "exam",
        priority: "high",
        date: "2024-01-15",
        time: "10:30 AM",
        author: "Academic Office",
        views: 2450,
        isNew: true,
        isPinned: true,
        tags: ["examination", "schedule", "important"],
        readTime: "2 min read",
    },
    {
        id: 2,
        title: "Annual Tech Fest 2024 - Registration Open",
        excerpt:
            "Join us for the biggest technical festival of the year. Register now for various competitions, workshops, and events.",
        category: "events",
        priority: "medium",
        date: "2024-01-14",
        time: "2:15 PM",
        author: "Student Affairs",
        views: 1890,
        isNew: true,
        isPinned: false,
        tags: ["techfest", "registration", "events"],
        readTime: "3 min read",
    },
    {
        id: 3,
        title: "Library Hours Extended During Exam Period",
        excerpt:
            "The central library will remain open 24/7 during the examination period to facilitate student preparation.",
        category: "academic",
        priority: "medium",
        date: "2024-01-13",
        time: "4:45 PM",
        author: "Library Administration",
        views: 1234,
        isNew: false,
        isPinned: true,
        tags: ["library", "exam", "facilities"],
        readTime: "1 min read",
    },
    {
        id: 4,
        title: "Semester Results Declaration - Winter 2023",
        excerpt:
            "Results for the Winter 2023 semester have been declared. Students can check their results on the official portal.",
        category: "results",
        priority: "high",
        date: "2024-01-12",
        time: "11:00 AM",
        author: "Examination Cell",
        views: 3567,
        isNew: false,
        isPinned: false,
        tags: ["results", "semester", "grades"],
        readTime: "2 min read",
    },
    {
        id: 5,
        title: "Workshop on AI and Machine Learning",
        excerpt:
            "A comprehensive workshop on AI/ML fundamentals will be conducted by industry experts. Limited seats available.",
        category: "events",
        priority: "medium",
        date: "2024-01-11",
        time: "9:30 AM",
        author: "CSE Department",
        views: 987,
        isNew: false,
        isPinned: false,
        tags: ["workshop", "AI", "ML", "technology"],
        readTime: "4 min read",
    },
    {
        id: 6,
        title: "New Admission Guidelines 2024-25",
        excerpt: "Updated admission guidelines and eligibility criteria for the academic year 2024-25 have been published.",
        category: "admission",
        priority: "low",
        date: "2024-01-10",
        time: "3:20 PM",
        author: "Admission Office",
        views: 756,
        isNew: false,
        isPinned: false,
        tags: ["admission", "guidelines", "eligibility"],
        readTime: "5 min read",
    },
]

export default function NewsPage() {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")
    const [sortBy, setSortBy] = useState("latest")

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "high":
                return "text-red-400 bg-red-500/20 border-red-500/30"
            case "medium":
                return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30"
            case "low":
                return "text-green-400 bg-green-500/20 border-green-500/30"
            default:
                return "text-gray-400 bg-gray-500/20 border-gray-500/30"
        }
    }

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "academic":
                return "text-violet-400 bg-violet-500/20 border-violet-500/30"
            case "exam":
                return "text-purple-400 bg-purple-500/20 border-purple-500/30"
            case "events":
                return "text-indigo-400 bg-indigo-500/20 border-indigo-500/30"
            case "admission":
                return "text-violet-500 bg-violet-600/20 border-violet-600/30"
            case "results":
                return "text-purple-500 bg-purple-600/20 border-purple-600/30"
            default:
                return "text-gray-400 bg-gray-500/20 border-gray-500/30"
        }
    }

    const filteredNotices = notices.filter((notice) => {
        const matchesCategory = selectedCategory === "all" || notice.category === selectedCategory
        const matchesSearch =
            notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            notice.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })
    return (
        <div className="relative z-10 pt-8 sm:pt-12 pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center mb-4 sm:mb-6 bg-black/30 backdrop-blur-2xl border border-violet-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-2xl shadow-violet-500/10">
                    <Bell className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-violet-400" />
                    <span className="text-violet-400 font-semibold text-sm sm:text-base">Latest Updates</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
                    Notice{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                        Board
                    </span>
                </h1>
                <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
                    Stay updated with the latest announcements, exam schedules, events, and important notices from MAKAUT
                </p>
            </div>

            {/* Filters and Search */}
            <div className="mb-8 sm:mb-12 flex justify-between">
                <div className="relative w-3/4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search notices..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                    />
                </div>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-1/4 px-4 py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                >
                    <option value="latest">Latest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="priority">By Priority</option>
                    <option value="popular">Most Viewed</option>
                </select>
            </div>


            {/* Notices List */}
            <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">All Notices ({filteredNotices.length})</h2>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <TrendingUp className="w-4 h-4" />
                        Showing {filteredNotices.length} results
                    </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                    {filteredNotices.map((notice) => (
                        <div key={notice.id} className="group">
                            <div className="relative bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-500 hover:scale-[1.02] shadow-2xl shadow-violet-500/10 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-600/10 rounded-2xl sm:rounded-3xl opacity-50"></div>

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                {notice.isPinned && (
                                                    <Badge className="bg-gradient-to-r from-violet-500/80 to-violet-600/80 text-white border border-violet-400/30 text-xs">
                                                        Pinned
                                                    </Badge>
                                                )}
                                                {notice.isNew && (
                                                    <Badge className="bg-gradient-to-r from-green-500/80 to-green-600/80 text-white border border-green-400/30 text-xs">
                                                        New
                                                    </Badge>
                                                )}
                                                <Badge className={`text-xs ${getPriorityColor(notice.priority)}`}>{notice.priority}</Badge>
                                                <Badge className={`text-xs ${getCategoryColor(notice.category)}`}>{notice.category}</Badge>
                                            </div>
                                            <h3 className="text-white text-lg sm:text-xl font-bold mb-2 group-hover:text-violet-400 transition-colors">
                                                {notice.title}
                                            </h3>
                                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">{notice.excerpt}</p>
                                        </div>

                                        <div className="flex sm:flex-col items-center sm:items-end gap-2">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-gray-400 hover:text-violet-400 hover:bg-violet-500/10"
                                            >
                                                <Bookmark className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-gray-400 hover:text-violet-400 hover:bg-violet-500/10"
                                            >
                                                <Share2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {notice.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-black/30 text-violet-400 text-xs px-2 py-1 rounded-lg border border-violet-500/20"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Footer */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-violet-500/20">
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {notice.date}
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="w-4 h-4 mr-1" />
                                                {notice.time}
                                            </div>
                                            <div className="flex items-center">
                                                <Eye className="w-4 h-4 mr-1" />
                                                {notice.views.toLocaleString()} views
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between sm:justify-end gap-4">
                                            <div className="text-sm text-gray-400">
                                                By {notice.author} • {notice.readTime}
                                            </div>
                                            <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white text-sm">
                                                Read Full Notice
                                                <ChevronRight className="ml-1 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More */}
                <div className="text-center pt-8">
                    <Button
                        variant="outline"
                        className="border-2 border-violet-500/50 text-white hover:bg-violet-500/10 hover:border-violet-400 px-8 py-3 text-base rounded-xl backdrop-blur-2xl transition-all duration-300 hover:scale-105 bg-black/20"
                    >
                        Load More Notices
                    </Button>
                </div>
            </div>
        </div>
    )
}