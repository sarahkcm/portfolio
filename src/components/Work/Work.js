import React from 'react'
import './Work.css'

import ProjectData from '../WorkData.js'
import WorkCard from '../WorkCard/WorkCard'

const Work = () => {
  return (
    <div className='container-work'>
      WorkCard
      <h1 className='heading-project'>Projects</h1>
      <div className='container-project'>
        {ProjectData.map((e,i) => {
            return(
                <WorkCard key={i} video={e.video} sourceImg={e.sourceImg} title={e.title} text={e.text} source={e.source} technology={e.technology} />
            )
        })}
       
      </div>
    </div>
  )
}

export default Work
