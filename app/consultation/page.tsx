"use client"
import React, { useState } from "react"
import Layout from "../components/Layout"
import { Calendar, Clock, User, Mail, MessageSquare } from "lucide-react"

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    reason: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/app/api/pages/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        alert("Appointment request sent successfully!")
        setFormData({ name: "", email: "", date: "", time: "", reason: "" })
      } else {
        alert(`Error: ${data.message}`)
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Something went wrong, please try again.")
    }
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Book a Consultation</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 md:p-8 overflow-hidden">
          {/** Input Fields **/}
          {[
            { id: "name", label: "Name", type: "text", icon: User, placeholder: "Your Name" },
            { id: "email", label: "Email", type: "email", icon: Mail, placeholder: "you@example.com" },
            { id: "date", label: "Preferred Date", type: "date", icon: Calendar },
            { id: "time", label: "Preferred Time", type: "time", icon: Clock },
          ].map(({ id, label, type, icon: Icon, placeholder }) => (
            <div key={id} className="mb-6">
              <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
                {label}
              </label>
              <div className="relative">
                <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={formData[id as keyof typeof formData]}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-md focus:ring-zinc-500 focus:border-zinc-500 text-sm"
                  placeholder={placeholder}
                />
              </div>
            </div>
          ))}

          {/** Reason for Consultation **/}
          <div className="mb-6">
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
              Reason for Consultation
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-md focus:ring-zinc-500 focus:border-zinc-500 text-sm"
                rows={4}
                placeholder="Briefly describe your reason for consultation"
              ></textarea>
            </div>
          </div>

          {/** Submit Button **/}
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
          >
            Book Consultation
          </button>
        </form>
      </div>
    </Layout>
  )
}
