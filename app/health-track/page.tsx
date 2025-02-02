"use client"

import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import { Trash2, Weight, Activity, Moon, Footprints } from "lucide-react"

type HealthData = {
  id: string
  weight: string
  bloodPressure: string
  sleepHours: string
  steps: string
}

export default function HealthTrack() {
  const [healthData, setHealthData] = useState<HealthData>({
    id: "",
    weight: "",
    bloodPressure: "",
    sleepHours: "",
    steps: "",
  })

  const [savedData, setSavedData] = useState<HealthData[]>([])

  useEffect(() => {
    const storedData = localStorage.getItem("healthData")
    if (storedData) {
      setSavedData(JSON.parse(storedData))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setHealthData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newEntry = { ...healthData, id: Date.now().toString() }
    const updatedData = [newEntry, ...savedData]
    setSavedData(updatedData)
    localStorage.setItem("healthData", JSON.stringify(updatedData))
    setHealthData({ id: "", weight: "", bloodPressure: "", sleepHours: "", steps: "" })
  }

  const handleDelete = (id: string) => {
    const updatedData = savedData.filter((data) => data.id !== id)
    setSavedData(updatedData)
    localStorage.setItem("healthData", JSON.stringify(updatedData))
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Health Tracking</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Log Your Health Data</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                Weight (kg)
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Weight className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={healthData.weight}
                  onChange={handleChange}
                  className="focus:ring-zinc-500 focus:border-zinc-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="70"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="bloodPressure" className="block text-sm font-medium text-gray-700 mb-1">
                Blood Pressure
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Activity className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  id="bloodPressure"
                  name="bloodPressure"
                  value={healthData.bloodPressure}
                  onChange={handleChange}
                  placeholder="120/80"
                  className="focus:ring-zinc-500 focus:border-zinc-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="sleepHours" className="block text-sm font-medium text-gray-700 mb-1">
                Sleep (hours)
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Moon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="number"
                  id="sleepHours"
                  name="sleepHours"
                  value={healthData.sleepHours}
                  onChange={handleChange}
                  className="focus:ring-zinc-500 focus:border-zinc-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="8"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="steps" className="block text-sm font-medium text-gray-700 mb-1">
                Steps
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Footprints className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="number"
                  id="steps"
                  name="steps"
                  value={healthData.steps}
                  onChange={handleChange}
                  className="focus:ring-zinc-500 focus:border-zinc-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="10000"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
            >
              Save Data
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Health Log</h2>
          {savedData.length > 0 ? (
            <div className="space-y-4">
              {savedData.map((data) => (
                <div key={data.id} className="bg-white p-6 rounded-lg shadow-md relative">
                  <button
                    onClick={() => handleDelete(data.id)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Delete log"
                  >
                    <Trash2 size={20} />
                  </button>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-md">
                      <p className="text-sm text-gray-500">Weight</p>
                      <p className="text-lg font-semibold text-blue-600">{data.weight} kg</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-md">
                      <p className="text-sm text-gray-500">Blood Pressure</p>
                      <p className="text-lg font-semibold text-green-600">{data.bloodPressure}</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-md">
                      <p className="text-sm text-gray-500">Sleep</p>
                      <p className="text-lg font-semibold text-purple-600">{data.sleepHours} hours</p>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-md">
                      <p className="text-sm text-gray-500">Steps</p>
                      <p className="text-lg font-semibold text-orange-600">{data.steps}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No health data logged yet.</p>
          )}
        </div>
      </div>
    </Layout>
  )
}

