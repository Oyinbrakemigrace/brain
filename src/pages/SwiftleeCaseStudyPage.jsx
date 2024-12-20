import React from 'react'
import HeroSection from '../components/Swiftlee components/HeroSection'
import Overview from '../components/Swiftlee components/Overview'
import ProblemStatement from '../components/Swiftlee components/ProblemStatement'
import DesignProcess from '../components/Swiftlee components/DesignProcess'
import UserResearch from '../components/Swiftlee components/UserResearch'
import InformationArchitecture from '../components/Swiftlee components/InformationArchitecture'
import DesignSystem from '../components/Swiftlee components/DesignSystem'
import HighFidelity from '../components/Swiftlee components/HighFidelity'
import UsabilityTesting from '../components/Swiftlee components/UsabilityTesting'
import Credit from '../components/Swiftlee components/Credit'
import ThanksForWatching from '../components/ThanksForWatching'
import { Link } from 'react-router-dom'

function SwiftleeCaseStudyPage() {
  return (
    <div className='font-[Urbanist]'>
      <div className='my-10 lg:my-12'>
        <HeroSection />
        <div className=' bg-[#1a1a1a] h-[6px] mt-12 hidden lg:block' />
      </div>
      <div className='my-10 lg:my-12'>
        <Overview />
      </div>
      <div className='my-10 lg:my-12'>
        <ProblemStatement />
        <div className=' bg-[#1a1a1a] h-[6px] mt-12 hidden lg:block' />
      </div>
      <div className='my-10 lg:my-12'>
        <DesignProcess />
        <div className=' bg-[#1a1a1a] h-[6px] mt-12 hidden lg:block' />
      </div>
      <div className='my-10 lg:my-12'>
        <UserResearch />
        <div className=' bg-[#1a1a1a] h-[6px] mt-12 hidden lg:block' />
      </div>
      <div className='my-10 lg:my-12'>
        <InformationArchitecture />
        <div className=' bg-[#1a1a1a] h-[6px] mt-12 hidden lg:block' />
      </div>
      <div className='my-10 lg:my-12'>
        <DesignSystem />
        <div className=' bg-[#1a1a1a] h-[6px] mt-12 hidden lg:block' />
      </div>
      <div className='my-10 lg:my-12'>
        <HighFidelity />
        <div className=' bg-[#1a1a1a] h-[6px] mt-12 hidden lg:block' />
      </div>
      <div className='my-10 lg:my-12'>
        <UsabilityTesting />
        <div className=' bg-[#1a1a1a] h-[6px] mt-12 hidden lg:block' />
      </div>
      <div className='my-10 lg:my-12'>
        <Credit />
        <ThanksForWatching />
        <div className='lg:px-20 px-8 space-x-10 lg:space-x-0 flex justify-between items-center my-10 lg:my-12'>
          <Link to="/projects/dineqr-case-study" className='space-y-4'>
            <p className='text-white font-semibold lg:text-2xl text-sm'>Dine QR Case Study</p>
            <img src="/assets/DineQR.png" alt="" className='w-[25rem]' />
          </Link>
          <Link to="/projects/pay-quick-case-study" className='space-y-4'>
            <p className='text-white font-semibold lg:text-2xl text-sm'>PayQuik Case Study</p>
            <img src="/assets/PayQuick.png" alt="" className='w-[25rem]' />
          </Link>
        </div>
        <div className=' bg-[#1a1a1a] h-[6px] mt-12 hidden lg:block' />
      </div>
    </div>
  )
}

export default SwiftleeCaseStudyPage