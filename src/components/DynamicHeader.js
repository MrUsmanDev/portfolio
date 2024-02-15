import React from 'react'
import Lottie from 'react-lottie';
import { youtubeOptions, githubOptions, linkedInOptions } from '../utlis/constants';
const DynamicHeader = () => {
  return (
    <div className='bg-slate-200 p-3 flex items-center justify-between'>
    <div className='mx-auto'>
      <span className='font-sans font-semibold text-slate-600'>Join Mr Usman Dev</span>
    </div>
    <div className='flex gap-4'>
    <div onClick={()=> alert(`clicked`)}>
    <Lottie options={githubOptions} height={26} width={26}  />
    </div>
    <div onClick={()=> alert(`clicked`)}>
    <Lottie options={linkedInOptions} height={26} width={26} />
    </div>
    <div onClick={()=> alert(`clicked`)}>
    <Lottie options={youtubeOptions} height={26} width={26} />
    </div>
    </div>
  </div>
  
  )
}

export default DynamicHeader