import React, { useContext } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import { THemeContext } from './Context/ThemeContext'

const App = () => {
      const { theme, toggleTheme } = useContext(THemeContext)
  
  return (
    <>
    <div className={`w-full bg-white ${theme === "light" ? "light-mode" : "dark-mode"}`}>
    <Header />
      <Hero />
      <Footer />
    </div>
      
    </>
  )
}

export default App