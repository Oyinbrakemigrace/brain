import React from 'react'
import { AiFillBehanceSquare, AiFillDiscord } from 'react-icons/ai'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { ImFacebook2 } from 'react-icons/im'
import { Link, NavLink } from 'react-router-dom'
import footerImg from '../assets/footer.png'
import navitems from '../constants/navigation'
import { FaXTwitter } from 'react-icons/fa6'


function Footer() {

  return (
    <footer className='lg:mt-5 mt-10 flex flex-col justify-center items-center'>
      <a href="mailto:bryanenyinnaya.be@gmail.com" className='text-white font-semibold lg:text-2xl text-xl my-6 hover:underline hover:decoration-solid'>bryanenyinnaya.be@gmail.com</a>
      <div className='text-white flex items-center gap-10 text-3xl mb-10'>
        <Link><AiFillDiscord size={34} /></Link>
        <Link><FaWhatsapp /></Link>
        <Link><AiFillBehanceSquare size={34} /></Link>
        <Link><FaXTwitter /></Link>
      </div>
      <div className='text-white flex lg:gap-20 gap-4'>
        {
          navitems.map((navitem) => {
            return (
              <NavLink
                to={navitem.href}
                key={navitem.label}
                className={({ isActive }) =>`hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-tl hover:from-[#AD7FAD] hover:to-[#F1B2AA] lg:text-xl text-base ${isActive && 'bg-clip-text text-transparent bg-gradient-to-tl from-[#AD7FAD] to-[#F1B2AA] font-bold'}`}>
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