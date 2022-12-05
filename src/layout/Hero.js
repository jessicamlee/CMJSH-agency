import React from 'react'
import Fade from 'react-reveal/Fade';
import HeroVideo from '../assets/videos/videoBg.mp4';

export default function Hero() {
  return (
    <div className='bg-darkBlue text-white h-[36rem] flex justify-center items-center flex-col relative mb-52 lg:h-[44rem]'>
        <video className='hidden md:block object-cover h-full w-full brightness-50' src={HeroVideo} autoPlay muted loop />
        <Fade cascade bottom>
          <h1 className='absolute font-bold text-4xl leading-8 mt-12 md:text-5xl lg:text-7xl'><span className='block'>Design</span><span className='block'>Discover</span><span className='block'>Develop</span></h1>
        </Fade>
    </div>
  )
}
