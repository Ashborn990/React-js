import { useState } from "react"
import { WeatherInput, WeatherInfo } from "./components/index"
import { useWeatherInfo } from "./hooks/useWeatherInfo"

function App() {
  const [city, setCity] = useState("")
  const { weather, loading, error } = useWeatherInfo(city)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">
           {weather && (
            <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt="weather icon"
                className="flex items-center justify-center"
            />
        )}
        Weather App
        </h1>

        <WeatherInput setCity={setCity} />
        <WeatherInfo
          weather={weather}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default App
