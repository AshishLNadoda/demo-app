import React from 'react'
import { project } from '../Images/ProjectImages'
import '../CSS_files/Project.css'

const Project = () => {
  return (
   <>
     <div className='ProjectDiv'> 
    <div className='imageDiv'><img src={project} alt="img"></img></div>

    
    </div>
   </>
  )
}

export default Project