import React from 'react'
import { AiFillBehanceSquare, AiFillDiscord } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { ImFacebook2 } from 'react-icons/im'
import { Link } from 'react-router-dom'
import footerImg from '../assets/footer.png'
import { IoMdArrowUp } from 'react-icons/io'

function Footer() {
  return (
    <footer className='lg:mt-5 mt-10 flex flex-col justify-center items-center'>
      <a href="mailto:bryanenyinnaya.be@gmail.com" className='text-white font-semibold lg:text-2xl text-xl my-6 hover:underline hover:decoration-solid'>bryanenyinnaya.be@gmail.com</a>
      <div className='text-white flex items-center gap-10 text-3xl mb-10'>
        <Link><AiFillDiscord size={34} /></Link>
        <Link><ImFacebook2 /></Link>
        <Link><AiFillBehanceSquare size={34} /></Link>
        <Link><FaInstagram /></Link>
      </div>
      <div className='text-white flex lg:gap-20 gap-4'>
        <Link to='/projects'>Projects</Link>
        <Link to='/about'>About me</Link>
        <Link>Resume</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div className='flex flex-col justify-center'>
        <img src={footerImg} alt="footerImg" className='mt-7 h-full z-50 lg:w-full w-[70%] mx-auto' />
      </div>
    </footer>
  )
}

export default Footer