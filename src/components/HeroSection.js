import React from 'react'
import ReactDOM from 'react-dom'
import Lottie from 'react-lottie';
import { HeroOptions } from '../utlis/constants';

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-between">
    <div className="w-2/3 pr-8">
      <h1 className='text-5xl font-extrabold leading-tight mb-4 overflow-hidden whitespace-no-wrap'>  Hi <span className='wave'>👋</span>,<br /></h1>
    <h1 className="text-4xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text">
  <span  > My Name is Muhammad Usman</span>
</h1>

      <p className="text-lg mb-8">
        I will fast track your business in web <br />
        Available for new projects and 1:1 mentoring
      </p>
      <div className="flex space-x-4">
 <a
  href="#learn-react"
  className="inline-block bg-skyblue-500 text-white py-2 px-6 rounded-full text-lg font-semibold border-2 
  border-white transition duration-300 hover:bg-gray-700 hover:text-white hover:border-transparent hover:shadow-lg"
>
  Learn React Under the Hood
</a>



        <a
          href="#download-resume"
          className="inline-block bg-skyblue-500 text-white py-2 px-6 rounded-full text-lg font-semibold border-2 border-white transition duration-300 hover:bg-gray-700 hover:text-white hover:border-transparent hover:shadow-lg"
          >
          Download Resume
        </a>
      </div>
    </div>
    <div className="w-1/3">
      {/* Replace 'your-image.jpg' with the actual path to your image 
      <img
        src="your-image.jpg"
        alt="Your Name"
        className="rounded-full h-40 w-40 object-cover"
      />*/}
       <div style={{ backgroundColor: 'transparent' }} className='animate-emoji'>
       <Lottie options={HeroOptions} height={300} width={300} />
       </div>
    </div>
  </div>
</div>
  )
}

export default HeroSection