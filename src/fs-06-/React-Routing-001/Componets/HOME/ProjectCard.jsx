import React from 'react'
import '../../CSS_files/ProjectCard.css'

const ProjectCard = ({imges,head}) => {
  return (
    <>
      <div className='cards'>
            <img src={imges} alt="" />
            <h2>{head}</h2>
      </div>
    </>
  )
}

export default ProjectCard