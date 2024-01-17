import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import DisplayAllBooks from './components/DisplayAllBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Nav />
      <Routes >

          <Route path='/' element={<DisplayAllBooks />} />

      </Routes>
    </>
  )
}

export default App
