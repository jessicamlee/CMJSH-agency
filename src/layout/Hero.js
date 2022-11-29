import React from 'react'
import { videoBg } from '../constants'

export default function Hero(videoPath) {
  return (
    <div className='bg-darkBlue text-white h-[36rem] flex justify-center items-center flex-col font-Overpass'>
      <video src={videoBg} width="600" height="300" controls="controls" autoplay="true" />
        <h1 className='font-bold text-4xl leading-8 mb-20'>Design<span className='block'>Discover</span>Develop</h1>
    </div>
  )
}
