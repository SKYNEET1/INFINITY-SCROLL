import { useState } from 'react'
import './App.css'
import News from './components/News'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <News />
    </div>
  )
}

export default App
