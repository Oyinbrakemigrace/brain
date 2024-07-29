import React from 'react'
import { AiFillBehanceSquare } from 'react-icons/ai'
import { FaLinkedin, FaWhatsappSquare } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import footerImg from '../assets/footer.png'
import navitems from '../constants/navigation'
import { FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6'


function Footer() {

  return (
    <footer className='lg:mt-5 mt-10 flex flex-col justify-center items-center'>
      <a href="mailto:bryanenyinnaya.be@gmail.com" className='text-white font-semibold lg:text-2xl text-xl my-6 hover:underline hover:decoration-solid'>bryanenyinnaya.be@gmail.com</a>
      <div className='text-white flex items-center gap-10 text-3xl mb-10'>
        <Link to='https://www.linkedin.com/in/chimela-enyinnaya-6165431b3/'><FaLinkedin /></Link>
        <Link to='https://wa.link/get3gb'><FaWhatsappSquare /></Link>
        <Link to='https://www.behance.net/bryanenyinnaya'><AiFillBehanceSquare size={34} /></Link>
        <Link to='https://x.com/bryan_eny'><FaSquareXTwitter /></Link>
      </div>
      <div className='text-white flex lg:gap-20 gap-4'>
        {
          navitems.map((navitem) => {
            return (
              <NavLink
                to={navitem.href}
                key={navitem.label}
                className={({ isActive }) => `hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-l hover:from-[#E5C1FF]/90 hover:to-[#8B6FE1]/40 ${isActive && 'font-bold'}`}>
                {navitem.label}
              </NavLink>
            )
          })
        }
      </div>
      <div className='flex flex-col justify-center'>
        <img src={footerImg} alt="footerImg" className='mt-7 h-full z-50 lg:w-full w-[70%] mx-auto' />
      </div>
    </footer>
  )
}

export default Footer