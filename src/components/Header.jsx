import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <div className='pb-20'>
      <nav className="p-4 fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-center items-center">
          <div className=" bg-neutral-400 bg-opacity-10 border-[0.2px] border-zinc-500 backdrop-blur-lg rounded-full lg:px-8 px-4 py-4 flex justify-between items-center w-full md:w-[80%]">
            <NavLink to='/' className="text-white font-bold text-xl">Brain.</NavLink>
            <div className="hidden md:flex space-x-6 text-white">
              <NavLink to='projects'>Projects</NavLink>
              <NavLink to="about">About me</NavLink>
              <NavLink to="#resume">Resume</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  />
                </svg>
              </button>
            </div>

          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-neutral-400 text-white bg-opacity-60 border-[0.2px] border-zinc-500 backdrop-blur-lg flex flex-col items-center space-y-4 mt-2 py-5">
            <NavLink onClick={handleNavLinkClick} to='projects'>Projects</NavLink>
            <NavLink onClick={handleNavLinkClick} to="about">About me</NavLink>
            <NavLink onClick={handleNavLinkClick} to="#resume">Resume</NavLink>
            <NavLink onClick={handleNavLinkClick} to="contact">Contact</NavLink>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header