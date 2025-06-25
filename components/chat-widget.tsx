"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, Bot, Phone } from "lucide-react"

interface Message {
    id: string
    text: string
    sender: "user" | "bot"
    timestamp: Date
}

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState < Message[] > ([
        {
            id: "1",
            text: "Hello! 👋 How can I help you plan your Nepal adventure today?",
            sender: "bot",
            timestamp: new Date(),
        },
    ])
    const [inputMessage, setInputMessage] = useState("")
    const [userInfo, setUserInfo] = useState({ name: "", email: "" })
    const [showContactForm, setShowContactForm] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef < HTMLDivElement > (null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const sendToWhatsApp = async (message: string, name: string, email: string) => {
        // Your WhatsApp number (replace with your actual number)
        const whatsappNumber = "9779842597331" // Replace with your WhatsApp number

        const whatsappMessage = `🏔️ *New Inquiry from HikeHigh Nepal Website*

👤 *Name:* ${name}
📧 *Email:* ${email}
💬 *Message:* ${message}

⏰ *Time:* ${new Date().toLocaleString()}
🌐 *Source:* Website Chat Widget`

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

        // Open WhatsApp in a new tab (this will work on both mobile and desktop)
        window.open(whatsappUrl, "_blank")
    }

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return

        if (!showContactForm) {
            setShowContactForm(true)
            return
        }

        if (!userInfo.name || !userInfo.email) {
            alert("Please provide your name and email to continue.")
            return
        }

        setIsLoading(true)

        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputMessage,
            sender: "user",
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])

        // Send to WhatsApp
        try {
            await sendToWhatsApp(inputMessage, userInfo.name, userInfo.email)

            // Add bot response
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: "Thank you for your message! 🙏 Our team will reply to you shortly. We've also sent your inquiry to our WhatsApp for faster response.",
                sender: "bot",
                timestamp: new Date(),
            }

            setTimeout(() => {
                setMessages((prev) => [...prev, botMessage])
                setIsLoading(false)
            }, 1000)
        } catch (error) {
            console.error("Error sending to WhatsApp:", error)

            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: "Thank you for your message! 🙏 Our team will reply to you shortly.",
                sender: "bot",
                timestamp: new Date(),
            }

            setTimeout(() => {
                setMessages((prev) => [...prev, errorMessage])
                setIsLoading(false)
            }, 1000)
        }

        setInputMessage("")
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    const toggleChat = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {/* Chat Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <Button
                    onClick={toggleChat}
                    className={`w-14 h-14 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${isOpen
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                        }`}
                    aria-label={isOpen ? "Close chat" : "Open chat"}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
                </Button>

                {/* Notification Badge */}
                {!isOpen && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                        <span className="text-xs font-bold text-white">1</span>
                    </div>
                )}
            </div>

            {/* Chat Widget */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-80 md:w-96 z-50 animate-fade-in-up">
                    <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-md overflow-hidden">
                        {/* Header */}
                        <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <MessageCircle className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg font-semibold">HikeHigh Nepal</CardTitle>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="text-sm text-orange-100">Online now</span>
                                        </div>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm" onClick={toggleChat} className="text-white hover:bg-white/20 p-1">
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardHeader>

                        {/* Messages */}
                        <CardContent className="p-0">
                            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`max-w-xs px-4 py-2 rounded-2xl ${message.sender === "user"
                                                    ? "bg-gradient-to-r from-orange-600 to-red-600 text-white"
                                                    : "bg-white text-gray-800 shadow-md"
                                                }`}
                                        >
                                            <div className="flex items-start space-x-2">
                                                {message.sender === "bot" && <Bot className="h-4 w-4 mt-1 text-orange-600 flex-shrink-0" />}
                                                <p className="text-sm leading-relaxed">{message.text}</p>
                                            </div>
                                            <p className={`text-xs mt-1 ${message.sender === "user" ? "text-orange-100" : "text-gray-500"}`}>
                                                {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-white text-gray-800 shadow-md max-w-xs px-4 py-2 rounded-2xl">
                                            <div className="flex items-center space-x-2">
                                                <Bot className="h-4 w-4 text-orange-600" />
                                                <div className="flex space-x-1">
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-400"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>

                            {/* Contact Form */}
                            {showContactForm && (
                                <div className="p-4 bg-orange-50 border-t">
                                    <p className="text-sm text-gray-700 mb-3 font-medium">Please provide your details to continue:</p>
                                    <div className="space-y-3">
                                        <Input
                                            placeholder="Your Name"
                                            value={userInfo.name}
                                            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                                            className="text-sm"
                                        />
                                        <Input
                                            type="email"
                                            placeholder="Your Email"
                                            value={userInfo.email}
                                            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                                            className="text-sm"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Input Area */}
                            <div className="p-4 border-t bg-white">
                                <div className="flex space-x-2">
                                    <Textarea
                                        placeholder={
                                            showContactForm
                                                ? "Type your message about Nepal trekking..."
                                                : "Ask us about trekking"
                                        }
                                        value={inputMessage}
                                        onChange={(e) => setInputMessage(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        className="flex-1 min-h-[40px] max-h-24 resize-none text-sm"
                                        rows={1}
                                    />
                                    <Button
                                        onClick={handleSendMessage}
                                        disabled={!inputMessage.trim() || isLoading}
                                        className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-3 py-2 h-auto"
                                    >
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </div>

                                {/* Quick Actions */}
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {["Everest Base Camp info", "Annapurna Circuit", "Peak climbing", "Custom trek"].map(
                                        (action, index) => (
                                            <Badge
                                                key={index}
                                                variant="secondary"
                                                className="cursor-pointer hover:bg-orange-100 hover:text-orange-800 transition-colors text-xs px-2 py-1"
                                                onClick={() => setInputMessage(action)}
                                            >
                                                {action}
                                            </Badge>
                                        ),
                                    )}
                                </div>

                                {/* WhatsApp Direct Link */}
                                <div className="mt-3 pt-3 border-t">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full text-green-600 border-green-600 hover:bg-green-50"
                                        onClick={() => window.open("https://wa.me/9779842597331", "_blank")}
                                    >
                                        <Phone className="h-4 w-4 mr-2" />
                                        Chat on WhatsApp Directly
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </>
    )
}
