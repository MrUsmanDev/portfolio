
import youtubeData from '../utlis/Youtube.json';
import linkedinData from '../utlis/linkedin.json';
import githubData from '../utlis/Github.json';
import LoaderData from '../utlis/loader.json';
import HeroData from '../utlis/herosec.json';


export const GITHUB_PROFILE_CDN = 'https://github.com/MrUsmanDev';
export const LINKEDIN_PROFILE_CDN = 'https://www.linkedin.com/in/muhammadusman30/';
export const YOUTUBE_PROFILE_CDN = 'https://www.youtube.com/channel/UCGCDKUmhl2xQgdflH2AsucA';

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
  export const ProjectData = [
    {
      id:1, 
      ProjectName: 'Pharmex DMS',
      organization:  'Lords Tech',
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
      organization:  'Lords Tech',
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
      organization:  'Lords Tech',
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