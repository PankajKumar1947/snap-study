"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, Search, Grid } from "lucide-react"
import { useParams } from "next/navigation"
import UploadingSoon from "@/components/uploading-soon"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface Subject {
    subject: string;
    code: string;
    organiser: string;
    pyqLink: [];
    playlist: [];
}

interface PyqLink {
    year: number;
    link: string;
}

function convertToArray(pyqData: PyqLink) {
    const year = parseInt(Object.keys(pyqData)[0]);
    const link = Object.values(pyqData)[0];
    return [year, link];

}

export default function OrganiserDetailPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [filteredSubjects, setFilteredSubjects] = useState<Subject[]>([]);
    const choice = useParams().choice
    const branchName = useParams().branch
    const semesterName = useParams().semester
    const url = process.env.NEXT_PUBLIC_BASE_URL! + "/" + branchName + `.json`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                //@ts-ignore
                setSubjects(result[semesterName]);
            }
            catch (err) {
                console.log("Can't fetch the data");
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
        window.scroll(0, 0);
    }, [])

    useEffect(() => {
        const filtered = subjects.filter((subject) => {
            return subject.subject.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredSubjects(filtered);
    }, [searchTerm, subjects]);

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
                    {subjects?.length === 0 ? <UploadingSoon /> :
                        <div className={"grid sm:grid-cols-2 gap-6"}>
                            {
                                filteredSubjects?.map((subject, ind: number) => (
                                    <div key={ind} className="group">
                                        <div className="relative bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-500 hover:scale-105 shadow-2xl shadow-violet-500/10 overflow-hidden">
                                            {/* Glass effects */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-600/10 rounded-2xl sm:rounded-3xl opacity-50"></div>

                                            <h3 className="text-white text-lg font-bold">{subject.subject}</h3>
                                            <div className="flex items-center gap-2 justify-between">
                                                <p className="text-violet-400 text-sm font-medium">
                                                    {subject.code} • 3 Credits
                                                </p>
                                                <div className="z-10">
                                                    {
                                                        choice === "pyq" ?
                                                            <Dialog>
                                                                <DialogTrigger className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white text-sm px-4 py-2 rounded-lg flex items-center">
                                                                    <BookOpen className="w-4 h-4 mr-2" />
                                                                    View PYQs</DialogTrigger>
                                                                <DialogContent className="bg-voilet-500/30 text-white max-w-4xl backdrop-blur-2xl">
                                                                    <DialogHeader>
                                                                        <DialogTitle className="text-2xl text-center">Previous Year Questions</DialogTitle>
                                                                        <DialogDescription>
                                                                            {
                                                                                subject.pyqLink.length > 0 && subject?.pyqLink.map((pyq, ind) => (
                                                                                    <div key={ind} className="bg-white/10 border border-violet-500/30 rounded-lg px-4 py-2 text-lg font-semibold text-violet-400 my-2 flex justify-between items-center">
                                                                                        <div>
                                                                                            {convertToArray(pyq)[0]}
                                                                                        </div>

                                                                                        <div>
                                                                                            {/* @ts-ignore */}
                                                                                            <a href={convertToArray(pyq)[1]} target="_blank" className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white text-sm px-4 py-2 rounded-lg flex items-center">
                                                                                                <BookOpen className="w-4 h-4 mr-2" />
                                                                                                Study Now
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                ))
                                                                            }
                                                                        </DialogDescription>
                                                                    </DialogHeader>
                                                                </DialogContent>
                                                            </Dialog>
                                                            :
                                                            <>
                                                                {/* @ts-ignore */}
                                                                <a href={subject[choice]} target="_blank" className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white text-sm px-4 py-2 rounded-lg flex items-center">
                                                                    <BookOpen className="w-4 h-4 mr-2" />
                                                                    Study Now
                                                                </a>
                                                            </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
