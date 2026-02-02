import React from "react";
import { useEffect, useState } from "react"

const API_KEY = "Enter your API_KEY"

export function useWeatherInfo(city) {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!city) returnxxxxxx

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
