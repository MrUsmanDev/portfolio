import React from 'react';
import { skillsList } from '../utlis/constants';

const Skills = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center items-center gap-8 mt-8 cursor-pointer">
    {skillsList.slice(0, 6).map((skill, index) => (
      <div key={index} className="m-2 bg-white h-16 w-16 rounded-full shadow-xl flex items-center justify-center  hover:heartbeat">
        <img alt={`logo-${index}`} src={skill} height={40} width={40} />
      </div>
    ))}
  </div>
  <div className="flex flex-wrap justify-center items-center gap-8">
    {skillsList.slice(6).map((skill, index) => (
      <div key={index + 6} className="m-2 bg-white h-16 w-16 rounded-full shadow-xl flex items-center justify-center hover:heartbeat">
        <img alt={`logo-${index + 6}`} src={skill} height={40} width={40} />
      </div>
    ))}
  </div>
  </>
  
  );
};

export default Skills;
