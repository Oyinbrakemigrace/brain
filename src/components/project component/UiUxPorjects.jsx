import React from 'react'
import SubHeading from '../SubHeading'
import CaseStudyData from '../../data/CaseStudyData.json'
import UiUxCard from '../UiUxCard'

function CaseStudy() {
  return (
    <div>
        <SubHeading title='UI/UX Design' />
          <div className='grid lg:grid-cols-[repeat(auto-fit,450px)] gap-10 justify-center mt-10'>
              {
                  CaseStudyData.map((data) => {
                      return (
                          <UiUxCard data={data} key={data.id} />
                      )
                  })
              }
          </div>
    </div>
  )
}

export default CaseStudy