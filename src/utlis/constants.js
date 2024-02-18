
import youtubeData from '../utlis/Youtube.json';
import linkedinData from '../utlis/linkedin.json';
import githubData from '../utlis/Github.json';
import LoaderData from '../utlis/loader.json';
import HeroData from '../utlis/herosec.json';
import LiveChatData from '../utlis/LiveChat.json';

import HTML_CDN from './html.png';
import CSS_CDN from './css.png';
import JS_CDN from './js logo.png';
import NEXT_CDN from './next.jpg';
import REACT_CDN from './logo.png';
import TYPESCRIPT_CDN from './typescriptlogo.png';
import TAILWIND_CDN from './tailwind.png';
import MUI_CDN from './mui.png';
import NODE_CDN from './nodejs-logo.png';
import MYSQL_CDN from './Mysql_logo.png';
import GIT_CDN from './git.png';

export const skillsList = [
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
  GIT_CDN
];

export const GITHUB_PROFILE_CDN = 'https://github.com/MrUsmanDev';
export const LINKEDIN_PROFILE_CDN = 'https://www.linkedin.com/in/muhammadusman30/';
export const YOUTUBE_PROFILE_CDN = 'https://www.youtube.com/channel/UCGCDKUmhl2xQgdflH2AsucA';

export const AboutMeText = `Hello, I'm Muhammad Usman, a tech lover and Project Manager at Pharma Lord (Pvt.) Ltd in Lahore, Pakistan. With 4 years of experience in IT industry, I've led exciting projects using React JS, Node.js, and MariaDB.
Before that, I was a React Developer, working on cool projects to improve patient care. I started as a Dotnet Developer Intern, learning C# and MSSQL SERVER. At Vision Plus, I maintained and updated code, gaining skills in .NET Framework and SQL Server.
But that's not all! I also have experience in sales for Lead Management CRM. Now, I'm ready to offer my services and collaborate on various projects. If you're into tech or want to boost your business, let's connect and create something awesome!`

export const youtubeOptions = {
    loop: true,
    autoplay: true,
    animationData: youtubeData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  export const linkedInOptions = {
    loop: true,
    autoplay: true,
    animationData: linkedinData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  export const githubOptions = {
    loop: true,
    autoplay: true,
    animationData: githubData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  export const loaderOptions = {
    loop: true,
    autoplay: true,
    animationData: LoaderData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

   export const HeroOptions = {
     loop: true,
     autoplay: true,
     animationData: HeroData,
     rendererSettings: {
       preserveAspectRatio: 'xMidYMid slice',
     },
   };
   
   export const LiveChatOptions = {
    loop: true,
    autoplay: true,
    animationData: LiveChatData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  export const ProjectData = [
    {
      id:1, 
      ProjectName: 'Pharmex DMS',
      organization:  'Pharma Lord PVT LTD',
      Role: 'Full Stack Developer',
      ProjectImage: 'https://distribution.lthms.com',
      ProjectURL: 'https://distribution.lthms.com',
      discription: 'PharmexDMS automates sales and enhances efficiency, providing end-to-end visibility in the distribution cycle',
      plateform: 'web',
      Technologies: ['React JS', 'MUI', 'Express JS', 'Node JS', 'MySQL'],
      PostedDate: '2022',
    },
    {
      id:2, 
      ProjectName: 'Pharmex HMS',
      Role: 'Full Stack Developer',
      organization:  'Pharma Lord PVT LTD',
      ProjectImage: 'https://lordstech.lthms.com',
      ProjectURL: 'https://lordstech.lthms.com',
      discription: `The Hospital Management Software streamlines hospital operations, covering pharmacy, OPD, and IPD management for enhanced efficiency and patient care.`,
      plateform: 'web',
      Technologies: ['React JS', 'MUI', 'Express JS', 'Node JS', 'MySQL'],
      PostedDate: '2021'
    },
    {
      id:3, 
      ProjectName: 'Doctors Hub',
      Role: 'Full Stack Developer',
      organization:  'Pharma Lord PVT LTD',
      ProjectImage: 'https://doctorshub.org',
      ProjectURL: 'https://doctorshub.org',
      discription: `The Online Doctor Appointment System streamlines healthcare with integrated modules for patients, doctors, pharmacies, labs, and hospitals, optimizing the overall experience.`,
      plateform: 'web',
      Technologies: ['React JS', 'Next JS', 'TypeScript','MUI', 'Express JS', 'Node JS', 'MySQL'],
      PostedDate: '2021'
    },
    {
      id:4, 
      ProjectName: 'Lead Management System',
      Role: 'Front End Developer',
      organization:  'Lasting Sales',
      ProjectImage: 'https://dev.lastingsales.com/',
      ProjectURL: 'https://dev.lastingsales.com',
      discription: `Lead Management System, similar to Monday.com, facilitates team collaboration and project management. It includes modules for company, deals, followers, file management, and viewer.`,
      plateform: 'web',
      Technologies: [ 'Next JS', 'TypeScript','MUI'],
      PostedDate: '2021'
    },

  ]

  export const ExperienceData = [
    {
      id:1, 
      Organization: 'Lasting Sales, Lahore',
      Position:'Front End Developer',
      mode: 'Remote',
      Date : 'DEC 2022 - Present'
    }, 
    {
      id:2, 
      Organization: 'Pharma Lord PVT LTD, Lahore',
      Position:'Project Manager',
      mode: 'full time',
      Date : 'Nov 2022 - Present'
    }, 
    {
      id:3, 
      Organization: 'Pharma Lord PVT LTD, Lahore',
      Position:'Front End / React Developer',
      mode: 'full time',
      Date : 'March 2021 - Oct 2022'
    },
    {
      id:4, 
      Organization: 'Vision Plus , Lahore',
      Position:'Junior .NET Developer',
      mode: 'full time',
      Date : 'Sep 2020 - Feb 2021'
    }, 
    {
      id:5, 
      Organization: 'Pharma Lord , Lahore',
      Position:'Intern .NET Developer',
      mode: 'full time',
      Date : 'May 2020 - Aug 2020'
    },
    {
      id:6, 
      Organization: 'Self/Freelance Development',
      Position:'.NET Developer',
      mode: 'full time',
      Date : 'May 2019 - Mar 2020'
    }

  ]