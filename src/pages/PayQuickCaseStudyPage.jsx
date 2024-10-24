import React from 'react'
import ProblemStatement from '../components/PayQuick components/ProblemStatement'
import PossibleSolution from '../components/PayQuick components/PossibleSolution'
import Goal from '../components/PayQuick components/Goal'
import TargetAudience from '../components/PayQuick components/TargetAudience'
import TheApproach from '../components/PayQuick components/TheApproach'
import MyRole from '../components/PayQuick components/MyRole'
import DesignThinkingProcess from '../components/PayQuick components/DesignThinkingProcess'
import ProjectTimeline from '../components/PayQuick components/ProjectTimeline'
import EmphatizePhase from '../components/PayQuick components/EmphatizePhase'
import DefinePhase from '../components/PayQuick components/DefinePhase'
import CardSorting from '../components/PayQuick components/CardSorting'
import InformationArchitecture from '../components/PayQuick components/InformationArchitecture'
import HighFidelityWireframes from '../components/PayQuick components/HighFidelityWireframes'
import TypographyAndColors from '../components/PayQuick components/TypographyAndColors'
import Prototype from '../components/PayQuick components/Prototype'
import ThanksForWatching from '../components/ThanksForWatching'
import { Link } from 'react-router-dom'

function PayQuickCaseStudyPage() {
  return (
    <div className='font-[Urbanist]'>
      <div>
        <ProblemStatement />
      </div>
      <div className='my-10 lg:my-28'>
        <PossibleSolution />
      </div>
      <div className='my-10 lg:my-28'>
        <Goal />
      </div>
      <div className='my-10 lg:my-28'>
        <TargetAudience />
      </div>
      <div className='my-10 lg:my-28'>
        <TheApproach />
      </div>
      <div className='my-10 lg:my-28'>
        <MyRole />
      </div>
      <div className='my-10 lg:my-28'>
        <DesignThinkingProcess />
      </div>
      <div className='my-10 lg:my-28'>
        <ProjectTimeline />
      </div>
      <div className='my-10 lg:my-28'>
        <EmphatizePhase />
      </div>
      <div className='my-10 lg:my-28'>
        <DefinePhase />
      </div>
      <div className='my-10 lg:my-28'>
        <CardSorting />
      </div>
      <div className='my-10 lg:my-28'>
        <InformationArchitecture />
      </div>
      <div className='my-10 lg:my-28'>
        <HighFidelityWireframes />
      </div>
      <div className='my-10 lg:my-28'>
        <TypographyAndColors />
      </div>
      <div className='my-10 lg:my-12'>
        <Prototype />
      </div>
      <div className='my-10 lg:my-12'>
        <ThanksForWatching isPayQuick />
      </div>
      <div className='lg:px-20 px-8 space-x-10 lg:space-x-0 flex justify-between items-center my-10 lg:my-12'>
        <Link to="/projects/swiftlee-case-study" className='space-y-4'>
          <p className='text-white font-semibold lg:text-2xl text-sm'>SwiftLee Case Study</p>
        <img src="/assets/Swiftlee.png" alt="" className='w-[25rem]' />
        </Link>
        <Link to="/projects/dineqr-case-study" className='space-y-4'>
          <p className='text-white font-semibold lg:text-2xl text-sm'>DineQR Case Study</p>
        <img src="/assets/DineQR.png" alt="" className='w-[25rem]' />
        </Link>
      </div>
    </div>
  )
}

export default PayQuickCaseStudyPage