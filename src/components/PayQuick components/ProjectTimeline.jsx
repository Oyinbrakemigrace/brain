import React from 'react'
import PayquickHeader from './PayquickHeader'
import chart from "/assets/PayQuick/projectTimelineChart.png"

function ProjectTimeline() {
  return (
    <div>
        <PayquickHeader title="Project Timeline" />
          <div className='lg:px-20 px-8'>
            <img src={chart} alt="chart" />
        </div>
    </div>
  )
}

export default ProjectTimeline