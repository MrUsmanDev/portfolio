import React from 'react'
import ProjectCard from './ProjectCard'
import { ProjectData } from '../utlis/constants'

const Projects = () => {
  return (
   <div id='Project'>
   <h1 className='text-3xl font-extrabold leading-tight  text-white text-center mt-4'> Projects</h1>
    <p className='font-sans font-semibold text-slate-600 text-center mt-2'> Things I’ve built so far</p>
    <div className='flex flex-wrap justify-center gap-6 mt-10'>
      { ProjectData.map(projectData => <ProjectCard key={projectData.id} ProjectData={projectData} />) }
    </div>
   </div>
  )
}

export default Projects