import React from "react"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"


function App() {

  return (
    <main className="bg-gradient-to-tl from-[#1A1A1A] to-[#404d5e]">
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default App
