"use client"
import React from 'react';

import { useState } from "react"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts"

const BMIChart = ({ bmi }) => {
  const categories = [
    { name: "Underweight", color: "#7FFFD4", range: [0, 18.5] },
    { name: "Normal", color: "#40E0D0", range: [18.5, 24.9] },
    { name: "Overweight", color: "#9370DB", range: [24.9, 29.9] },
    { name: "Obese", color: "#FF69B4", range: [29.9, 100] },
  ]

  const getBMICategory = (bmi) => {
    for (const category of categories) {
      if (bmi >= category.range[0] && bmi < category.range[1]) {
        return category.name
      }
    }
    return "Obese"
  }

  const getIndicatorPosition = (bmi) => {
    const minBMI = 15
    const maxBMI = 40
    const position = ((bmi - minBMI) / (maxBMI - minBMI)) * 100
    return Math.min(Math.max(position, 0), 100)
  }

  return (
    <div className="w-full mt-4">
      <div className="flex justify-between mb-2">
        <span className="text-lg font-semibold">BMI: {bmi}</span>
        <span className="text-lg font-semibold text-green-500">{getBMICategory(bmi)}</span>
      </div>
      <div className="relative h-8 rounded-full overflow-hidden">
        {categories.map((category, index) => (
          <div
            key={index}
            className="absolute h-full"
            style={{
              backgroundColor: category.color,
              left: `${(category.range[0] - 15) * 4}%`,
              width: `${(category.range[1] - category.range[0]) * 4}%`,
            }}
          ></div>
        ))}
        <div
          className="absolute w-0.5 h-full bg-black"
          style={{ left: `${getIndicatorPosition(bmi)}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-1 text-sm text-gray-600">
        <span>15</span>
        <span>18.5</span>
        <span>24.9</span>
        <span>29.9</span>
        <span>40</span>
      </div>
    </div>
  )
}

export default function ProgressPage() {
  const [userName, setUserName] = useState("John Doe") // Simulating a logged-in user
  const [showBMI, setShowBMI] = useState(false)
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [gender, setGender] = useState("")
  const [birthday, setBirthday] = useState("")
  const [bmi, setBMI] = useState(null)

  const data = [
    {
      name: "Steps",
      progress: 75,
      fill: "#8884d8",
    },
    {
      name: "Calories",
      progress: 60,
      fill: "#83a6ed",
    },
    {
      name: "Exercise",
      progress: 45,
      fill: "#8dd1e1",
    },
  ]

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100
      const weightInKg = parseFloat(weight)
      const bmiValue = weightInKg / (heightInMeters * heightInMeters)
      setBMI(bmiValue.toFixed(1))
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-xl font-semibold">Welcome back, {userName}!</h2>
        </div>
      </div>
      <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Progress</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-blue-800">Fitness Progress</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="10%"
                    outerRadius="80%"
                    barSize={10}
                    data={data}
                  >
                    <RadialBar
                      minAngle={15}
                      label={{ position: "insideStart", fill: "#fff" }}
                      background
                      clockWise
                      dataKey="progress"
                    />
                    <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Daily Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Steps:</span>
                    <span className="font-semibold">7,500 / 10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Calories Burned:</span>
                    <span className="font-semibold">450 / 500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Exercise Duration:</span>
                    <span className="font-semibold">45 min / 60 min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Create Your Plan</h2>
              <p className="mb-4">
                Ready to take your fitness journey to the next level? Create a personalized plan tailored to your goals
                and preferences.
              </p>
              <button
                onClick={() => setShowBMI(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Create
              </button>
              {showBMI && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Calculate your BMI</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                        Height (cm)
                      </label>
                      <input
                        id="height"
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Enter your height in cm"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                        Weight (kg)
                      </label>
                      <input
                        id="weight"
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Enter your weight in kg"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                        Gender
                      </label>
                      <select
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">
                        Birthday
                      </label>
                      <input
                        id="birthday"
                        type="date"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <button
                      onClick={calculateBMI}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Calculate BMI
                    </button>
                    {bmi && <BMIChart bmi={parseFloat(bmi)} />}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300">Home</a></li>
                <li><a href="#" className="hover:text-blue-300">About Us</a></li>
                <li><a href="#" className="hover:text-blue-300">Classes</a></li>
                <li><a href="#" className="hover:text-blue-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300">Facebook</a></li>
                <li><a href="#" className="hover:text-blue-300">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-300">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-300">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-3 py-2 text-gray-700 bg-white rounded-l-md focus:outline-none"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 Gym Progress. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}