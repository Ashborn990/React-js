import React from 'react'
import { useState } from 'react'

function WeatherInfo({ weather, loading, error }) {
  if (loading) {
    return <p className="text-blue-600 mt-4">Loading...</p>
  }

  if (error) {
    return <p className="text-red-500 mt-4">{error}</p>
  }

  if (!weather) return null

  return (
    <div className="mt-6 bg-white shadow-lg rounded-xl p-4 text-center">
      <h2 className="text-xl font-semibold">{weather.name}</h2>
      <p className="text-3xl font-bold mt-2">
        {weather.main.temp}°C
      </p>
      <p className="capitalize text-gray-600">
        {weather.weather[0].description}
      </p>
    </div>
  )
}

export default WeatherInfo
