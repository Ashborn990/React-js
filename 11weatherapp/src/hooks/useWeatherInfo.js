import React from "react";
import { useEffect, useState } from "react"

const API_KEY = "fb2fcaa99b21ce67b8da0b3878a79baa"

export function useWeatherInfo(city) {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!city) return

    const fetchWeather = async () => {
      try {
        setLoading(true)
        setError("")
        setWeather(null)

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        )

        const data = await res.json()

        if (data.cod !== 200) {
          throw new Error(data.message)
        }

        setWeather(data)
      } catch (err) {
        setError(err.message || "Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [city]) 

  return { weather, loading, error }
}
