import React from 'react'
import Lottie from 'react-lottie';
import { youtubeOptions, githubOptions, linkedInOptions, GITHUB_PROFILE_CDN, LINKEDIN_PROFILE_CDN, YOUTUBE_PROFILE_CDN } from '../utlis/constants';
const DynamicHeader = () => {
  return (
    <div className='bg-slate-200 p-3 flex items-center justify-between'>
    <div className='mx-auto'>
      <span className='font-sans font-semibold text-slate-600'>Join Mr Usman Dev</span>
    </div>
    <div className='flex gap-4'>
    <a href={GITHUB_PROFILE_CDN} target='_blank' rel="noreferrer">
    <Lottie options={githubOptions} height={26} width={26}  />
    </a>
    <a href={LINKEDIN_PROFILE_CDN} target='_blank' rel="noreferrer">
    <Lottie options={linkedInOptions} height={26} width={26} />
    </a>
    <a href={YOUTUBE_PROFILE_CDN} target='_blank' rel="noreferrer">
    <Lottie options={youtubeOptions} height={26} width={26} />
    </a>
    </div>
  </div>
  
  )
}

export default DynamicHeader