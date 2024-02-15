import React from 'react';
import HTML_CDN from '../utlis/html.png';
import CSS_CDN from '../utlis/css.png';
import JS_CDN from '../utlis/js logo.png';
import NEXT_CDN from '../utlis/next.jpg';
import REACT_CDN from '../utlis/logo.png';
import TYPESCRIPT_CDN from '../utlis/typescriptlogo.png';
import TAILWIND_CDN from '../utlis/tailwind.png';
import MUI_CDN from '../utlis/mui.png';
import NODE_CDN from '../utlis/nodejs-logo.png';
import MYSQL_CDN from '../utlis/Mysql_logo.png';

const skillsList = [
  HTML_CDN,
  CSS_CDN,
  JS_CDN,
  NEXT_CDN,
  REACT_CDN,
  TYPESCRIPT_CDN,
  TAILWIND_CDN,
  MUI_CDN,
  NODE_CDN,
  MYSQL_CDN,
];

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
