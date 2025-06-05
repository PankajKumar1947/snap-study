"use client"

import { Button } from "@/components/ui/button"
import { Bell, Calendar, Badge, Search, Bookmark, ChevronRight, Clock, Eye, Share2, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

const fetchNotices = async () => {
    const response = await fetch("https://makaut1.ucanapply.com/smartexam/public/api/notice-data");
    const data = await response.json();
    return data
}

export default function NewsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [sortBy, setSortBy] = useState("latest")
    const [notices, setNotices] = useState([])


    const filteredNotices = notices.filter((notice: any) => {
        const matchesSearch = notice?.notice_title?.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesSearch
    })

    useEffect(() => {
        fetchNotices().then((data) => {
            setNotices(data?.data)
        })
    }, [])

    useEffect(()=>{
        if(sortBy === "latest"){
            //@ts-ignore
            setNotices(notices.sort((a: any, b: any) => new Date(b.notice_date) - new Date(a.notice_date)))
        }
        if(sortBy === "oldest"){
            //@ts-ignore
            setNotices(notices.sort((a: any, b: any) => new Date(a.notice_date) - new Date(b.notice_date)))
        }
    },[sortBy])

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
            <div className="mb-8 sm:mb-12 flex justify-between sm:gap-10">
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
                    className="w-1/4 px-4 py-3 bg-black/90 border border-violet-500/30 rounded-xl text-white focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                >
                    <option value="latest">Latest First</option>
                    <option value="oldest">Oldest First</option>
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
                    {filteredNotices?.map((notice: any) => (
                        <div key={notice.id} className="group">
                            <div className="relative bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-500 hover:scale-[1.02] shadow-2xl shadow-violet-500/10 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-600/10 rounded-2xl sm:rounded-3xl opacity-50"></div>

                                <div className="relative z-10">
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge className={"text-red-400 bg-red-500/20 border-red-500/30"}>{notice.priority}</Badge>
                                                <Badge className={"text-yellow-400 bg-yellow-500/20 border-yellow-500/30"}>{notice.priority}</Badge>
                                                <Badge className={"text-green-400 bg-green-500/20 border-green-500/30"}>{notice.priority}</Badge>
                                                <Badge className={"text-gray-400 bg-gray-500/20 border-gray-500/30"}>{notice.category}</Badge>
                                            </div>
                                            <h3 className="text-white text-lg sm:text-xl font-bold group-hover:text-violet-400 transition-colors">
                                                {notice?.notice_title}
                                            </h3>
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

                                    {/* Footer */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:pt-4 border-t border-violet-500/20">
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {notice?.notice_date}
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="w-4 h-4 mr-1" />
                                                {notice?.updated_at}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between sm:justify-end gap-4">
                                            <a href={notice?.file_path} target="_blank" className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white text-sm px-4 py-2 rounded-lg flex items-center">
                                                Read Full Notice
                                                <ChevronRight className="ml-1 h-4 w-4" />
                                            </a>
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