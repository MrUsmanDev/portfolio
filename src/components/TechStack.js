import React from 'react'
import Skills from './skills'


const TechStack = () => {
  return (
    <div id='Tech' className='section'>
   <h1 className='text-3xl font-extrabold leading-tight  text-white text-center mt-4'> My Tech Stack</h1>
    <p className='font-sans font-semibold text-slate-600 text-center'> Technologies I’ve been working with recently</p>
    <Skills />
    </div>
  )
}

export default TechStack