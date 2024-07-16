import React, { useRef } from "react"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"


function App() {
  const navbarRef = useRef(null);
  return (
    <main className="bg-gradient-to-tl from-[#1A1A1A] to-[#404d5e]">
      <div ref={navbarRef}>
        <Header />
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer scrollToTopRef={navbarRef} />
    </main>
  )
}

export default App
