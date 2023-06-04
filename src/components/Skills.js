import React from 'react'
import ProgressBar from './ProgressBar'

const Skills = () => {
  
 
  return (
    <>
      <div className='container p-5 overflow-hidden'>
        <h3 className='section-title'>Skills</h3>
        <h1 className='description-page'>
          Wanna Know?
        </h1>
        <div class="row gy-5 mt-3">
        <div class="col-md-6">
          <div class="p-4 bg-light">
          <h4 className='skill-title'>Professional Skills</h4>
          <ProgressBar label="Communication" percentage={95}/>
          <ProgressBar label="Web Development" percentage={90} />
          <ProgressBar label="Well Organized" percentage={90} />
          <ProgressBar label="Teamwork" percentage={85} />
          </div>
        </div>
        <div class="col-md-6">
          <div class="p-4  bg-light">
          <h4 className='skill-title'>Technical Skills</h4>
          <ProgressBar label="HTML" percentage={95}/>
          <ProgressBar label="CSS" percentage={90} />
          <ProgressBar label="Javascript" percentage={88} />
          <ProgressBar label="ReactJS" percentage={85} />
          </div>
        </div>

      </div>
      </div>
    </>  
  )

}


export default Skills