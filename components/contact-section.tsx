"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageCircle,
    Users,
    HeadphonesIcon,
    ArrowRight,
    CheckCircle,
} from "lucide-react"

const contactInfo = [
    {
        icon: Mail,
        title: "Email Us",
        description: "Get in touch via email",
        value: "support@snapstudy.com",
        action: "mailto:support@snapstudy.com",
        gradient: "from-violet-500/20 to-violet-600/10",
    },
    {
        icon: Phone,
        title: "Call Us",
        description: "Speak with our support team",
        value: "+91 98765 43210",
        action: "tel:+919876543210",
        gradient: "from-purple-500/20 to-purple-600/10",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        description: "Our office location",
        value: "Salt Lake, Kolkata, WB",
        action: "#",
        gradient: "from-indigo-500/20 to-indigo-600/10",
    },
    {
        icon: Clock,
        title: "Support Hours",
        description: "We're here to help",
        value: "24/7 Available",
        action: "#",
        gradient: "from-violet-600/20 to-violet-700/10",
    },
]

const supportOptions = [
    {
        icon: MessageCircle,
        title: "Live Chat",
        description: "Get instant help from our support team",
        available: true,
    },
    {
        icon: Users,
        title: "Community Forum",
        description: "Connect with other students and get peer support",
        available: true,
    },
    {
        icon: HeadphonesIcon,
        title: "Video Call Support",
        description: "Schedule a one-on-one video session",
        available: true,
    },
]

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
    }

    return (
        <section className="py-16 sm:py-20 md:py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
                        Get in Touch
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
                        Have questions? We're here to help. Reach out to us through any of the channels below.
                    </p>
                </div>

                {/* Contact Info Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="group">
                            <a
                                href={info.action}
                                className="block relative bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-500 text-center hover:scale-105 shadow-2xl shadow-violet-500/10 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${info.gradient} rounded-2xl sm:rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                                ></div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500/30 to-violet-600/30 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-violet-500/30 group-hover:scale-110 transition-transform duration-300">
                                        <info.icon className="h-8 w-8 text-violet-400" />
                                    </div>
                                    <h3 className="text-white text-base sm:text-lg font-bold mb-2">{info.title}</h3>
                                    <p className="text-gray-400 text-xs sm:text-sm mb-3">{info.description}</p>
                                    <p className="text-violet-400 text-sm sm:text-base font-semibold">{info.value}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
                    {/* Contact Form */}
                    <div className="relative">
                        <div className="bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-500 shadow-2xl shadow-violet-500/10 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-600/10 rounded-2xl sm:rounded-3xl opacity-50"></div>

                            <div className="relative z-10">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Send us a Message</h3>

                                {isSubmitted && (
                                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                                        <span className="text-green-400 text-sm">
                                            Message sent successfully! We'll get back to you soon.
                                        </span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="technical">Technical Support</option>
                                            <option value="billing">Billing Question</option>
                                            <option value="feature">Feature Request</option>
                                            <option value="partnership">Partnership</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 resize-none"
                                            placeholder="Tell us how we can help you..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold rounded-xl shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 border border-violet-400/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                                Send Message
                                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Support Options */}
                    <div className="space-y-6 sm:space-y-8">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Other Ways to Reach Us</h3>
                            <div className="space-y-4 sm:space-y-6">
                                {supportOptions.map((option, index) => (
                                    <div key={index} className="group">
                                        <div className="relative bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl p-6 hover:border-violet-400/40 transition-all duration-500 shadow-xl shadow-violet-500/10 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl"></div>
                                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-600/10 rounded-2xl opacity-50"></div>

                                            <div className="relative z-10 flex items-center">
                                                <div className="w-12 h-12 bg-gradient-to-br from-violet-500/30 to-violet-600/30 rounded-xl flex items-center justify-center mr-4 border border-violet-500/30 group-hover:scale-110 transition-transform duration-300">
                                                    <option.icon className="h-6 w-6 text-violet-400" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="text-white text-base sm:text-lg font-bold">{option.title}</h4>
                                                        {option.available && (
                                                            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/30">
                                                                Available
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-gray-300 text-sm sm:text-base mt-1">{option.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ Link */}
                        <div className="relative">
                            <div className="bg-black/20 backdrop-blur-2xl border border-violet-500/20 rounded-2xl p-6 sm:p-8 hover:border-violet-400/40 transition-all duration-500 shadow-2xl shadow-violet-500/10 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-600/10 rounded-2xl opacity-50"></div>

                                <div className="relative z-10">
                                    <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Frequently Asked Questions</h4>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                        Find quick answers to common questions about SnapStudy, our services, and how to get the most out of
                                        our platform.
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="group border-2 border-violet-500/50 text-white hover:bg-violet-500/10 hover:border-violet-400 px-6 py-2 text-sm rounded-xl backdrop-blur-2xl transition-all duration-300 hover:scale-105 bg-black/20"
                                    >
                                        View FAQ
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
