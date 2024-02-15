
import youtubeData from '../utlis/Youtube.json';
import linkedinData from '../utlis/linkedin.json';
import githubData from '../utlis/Github.json';
import LoaderData from '../utlis/loader.json';
import HeroData from '../utlis/herosec.json';

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
