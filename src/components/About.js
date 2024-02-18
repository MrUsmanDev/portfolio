import React from 'react'
import { AboutMeText } from '../utlis/constants'
import Experience from './Experience'
import { ExperienceData } from '../utlis/constants'
const About = () => {
  return (
    <div id='About'>
 <h1 className='text-3xl font-extrabold leading-tight  text-white text-center mt-4'> About me</h1>
    <p className='font-sans font-semibold text-slate-600 text-center'> Exploring My Journey.</p>
    <div  className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row items-center justify-between">
        <p className='font-medium leading-relaxed text-slate-200 text-justify'>{AboutMeText}</p>
    </div>
    <h1 className='text-3xl font-extrabold leading-tight  text-white text-center mt-4'> Work Experience</h1>
    { ExperienceData.map((experienceData)=> <Experience key={experienceData.id} ExpData={experienceData} />)  }
    </div>
  )
}

export default About