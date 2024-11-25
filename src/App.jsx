import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from './components/CEE/Page'
import Abs1 from './components/ABS/Abs1'
import Abs2 from './components/ABS/Abs2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page />
      <Abs1/>
      <Abs2/>
    </>
  )
}

export default App
