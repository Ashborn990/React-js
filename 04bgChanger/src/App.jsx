import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  function changeColor(color){
    setColor(color)
  }

  return (
    <div className='w-full h-screen transition-all duration-500' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl'>
          <button
          onClick={() => changeColor('red')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'red'}}>Red</button>
          <button
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'green'}}>Green</button>
          <button
          onClick={() => setColor('blue')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'blue'}}>blue</button>
          <div className='flex flex-wrap justify-center gap-0 shadow-lg bg-white px-6 py-2 rounded-3xl'>
            <button
            onClick={() => setColor('purple')}
            className='outline-none px-2 py-1 rounded-l-lg shadow-lg text-black' style={{backgroundColor: 'purple'}}>Purple</button>
            <button
            onClick={() => setColor('pink')}
            className='outline-none px-2 py-1 rounded-r-lg shadow-lg text-black' style={{backgroundColor: 'pink'}}>Pink</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
