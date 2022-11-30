import React from 'react'

export default function Hero() {
  return (
    <div className='bg-darkBlue text-white h-[36rem] flex justify-center items-center flex-col font-Overpass relative'>
        <video className='hidden md:block object-cover h-full w-full brightness-50' src='/assets/videos/videoBG.mp4' autoPlay muted loop />
        <h1 className='absolute font-bold text-4xl leading-8 mb-26 md:text-5xl lg:text-7xl '>Design<span className='block'>Discover</span>Develop</h1>
    </div>
  )
}
