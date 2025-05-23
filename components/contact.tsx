"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Form submitted:", formData)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitError("There was an error submitting the form. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section section-light">
      <div className="container-custom">
        <h2 className="section-heading">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="scroll-trigger">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-cyan-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Email</h4>
                    <a
                      href="mailto:reddy.karthik0314@gmail.com"
                      className="text-gray-600 hover:text-cyan-600 transition-colors"
                    >
                      reddy.karthik0314@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-cyan-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Phone</h4>
                    <a href="tel:+919966408139" className="text-gray-600 hover:text-cyan-600 transition-colors">
                      +91-9966408139
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-cyan-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-gray-600">Symbiosis Institute of Technology, Pune, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-trigger">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-700">
                    Thank you for your message! I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <p className="text-red-700">{submitError}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border-gray-300 focus:border-cyan-400 focus:ring-cyan-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border-gray-300 focus:border-cyan-400 focus:ring-cyan-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full border-gray-300 focus:border-cyan-400 focus:ring-cyan-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full border-gray-300 focus:border-cyan-400 focus:ring-cyan-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
