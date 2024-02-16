import * as React from 'react';
import PROFILE_CDN from '../utlis/profile.png'
import TechTags from './TechTags';

export default function ProjectCard({ProjectData}) {
  return (
<div class="relative flex max-w-[18rem] flex-col overflow-hidden rounded-xl bg-gray-900 bg-clip-border text-gray-700 shadow-md hover:animate-jiggle transition-transform duration-300 ease-in-out hover:cursor-pointer animate-emoji">
  <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
      alt="ui/ux review check"
      class="w-full h-32 object-cover"
    />
  </div>
  <div class="p-4">
    <h4 class="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {ProjectData.ProjectName}
    </h4>
    <p class="block mt-2 font-sans text-sm antialiased font-normal leading-relaxed text-gray-700">
      {ProjectData.discription}
    </p>
  </div>
  <div class="flex items-center justify-between p-4">
    <div class="flex items-center -space-x-2">
      <img
        alt="natali craig"
        src={PROFILE_CDN}
        class="relative inline-block h-6 w-6 !rounded-full border-2 border-white object-cover object-center hover:z-10"
      />
   {/*  <img
        alt="Tania Andrew"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=32&amp;q=80"
        class="relative inline-block h-6 w-6 !rounded-full border-2 border-white object-cover object-center hover:z-10"
      />*/} 
    </div>
    <p class="block font-sans text-xs antialiased font-normal leading-relaxed text-inherit text-justify">
      {ProjectData.PostedDate}
    </p>
  </div>
 <TechTags Tags = {ProjectData.Technologies} />
 <div class="flex  items-center justify-between px-4 pb-4 absolute bottom-0 gap-14"> {/* Add mt-auto to push to the bottom */}
    <a href="#" class="bg-blue-500 text-white py-2 px-4 rounded-full text-xs font-semibold hover:bg-blue-700 transition duration-300 ">View Code</a>
    <a href={ProjectData.ProjectURL} target='_blank' class="bg-green-500 text-white py-2 px-4 rounded-full text-xs font-semibold hover:bg-green-700 transition duration-300">Live Demo</a>
  </div>
</div>

  

  );
}