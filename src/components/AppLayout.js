import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie';
import { loaderOptions } from '../utlis/constants';
import DynamicHeader from './DynamicHeader'
import Header from './Header'
import HeroSection from './HeroSection';
import TechStack from './TechStack';
import Projects from './Projects';
import LiveChatButton from './LiveChatButton';
import About from './About';
import Footer from './Footer';
const AppLayout = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
          await new Promise(resolve => setTimeout(resolve, 2000));
          setLoading(false);
        };
        fetchData();
      }, []);
  return (
    <>
    {loading ? (
       <div className='flex items-center justify-center h-screen'>
       <Lottie options={loaderOptions} height={300} width={300} />
     </div>
        ):(
            <>
            <DynamicHeader />
            <Header />
            <HeroSection />
            <TechStack />
            <Projects />
            <LiveChatButton />
            <About />
            <Footer />
            </>
        )
    }
    </>
    )
}

export default AppLayout