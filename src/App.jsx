import { useState } from 'react'
import './App.css'
import Pages from './components/Pages'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  )
}

export default App
