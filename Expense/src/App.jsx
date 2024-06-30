import { useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import MiddlePart from './components/MiddlePart'
import LastPart from './components/LastPart'
import { GlobalProvider } from './Context/GlobalState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalProvider>
      <div className='container'>
        <Heading />
        <MiddlePart />
        <LastPart />
      </div>
    </GlobalProvider>
  )
}

export default App
