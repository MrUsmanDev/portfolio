import React from 'react'

const TechTags = ({Tags}) => {
  return (
    <div class="flex items-center justify-between px-4 pb-2 mb-3">
    <div class="flex space-x-2 flex-wrap ">
    {Tags.map((tech, index) => (
      <span key={index} class="bg-gray-800 text-white px-2 py-1 text-xs font-semibold rounded-full mr-2 mb-2">
        {tech}
      </span>
    ))}
      </div>
    </div>
  )
}

export default TechTags