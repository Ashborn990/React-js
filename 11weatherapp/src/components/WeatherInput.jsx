import { useState } from "react"

function WeatherInput({ setCity }) {
  const [input, setInput] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    if (!input) return
    setCity(input)
    setInput("")
  }

  return (
    <form onSubmit={submitHandler} className="flex gap-2">
      <input
        type="text"
        placeholder="Enter city"
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  )
}

export default WeatherInput
