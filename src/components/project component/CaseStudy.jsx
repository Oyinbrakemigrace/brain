import React from 'react'
import SubHeading from '../SubHeading'
import CaseStudyData from '../../data/CaseStudyData'
import CaseStudyCard from '../CaseStudyCard'

function CaseStudy() {
  return (
    <div>
        <SubHeading title='Case study' />
          <div className='grid lg:grid-cols-[repeat(auto-fit,450px)] gap-10 justify-center mt-10'>
              {
                  CaseStudyData.map((data) => {
                      return (
                          <CaseStudyCard data={data} key={data.id} />
                      )
                  })
              }
          </div>
    </div>
  )
}

export default CaseStudy