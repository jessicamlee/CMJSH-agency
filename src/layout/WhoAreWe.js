import React from 'react'

export default function Intro() {
  return (
    <div className='grid grid-cols-1 px-6 mt-50 relative mb-44 md:mt-[21rem] lg:px-10 lg:grid-cols-2 lg:mt-56 xl:mt-40 xl:mb-64 xl:max-w-screen-xl xl:mx-auto'>
        <img className='absolute w-[21.5rem] -top-[17rem] right-0 left-0 mx-auto md:w-[42rem] md:-top-[29.3rem] lg:max-w-none lg:w-[84rem] lg:-top-[27.5rem] lg:-right-[63rem] xl:w-[86rem] xl:-top-[27rem] xl:-right-[58rem]' src='assets/images/cmjshfull.png' alt='our work'></img>
        <div className='flex flex-col gap-20 max-w-md mx-auto lg:mx-0'>
          <h2 className='text-4xl text-darkBlue font-bold border-b-4 w-fit border-lightBlue'>Who are we?</h2>
          <p className='text-sm font-light leading-6 md:pr-12 lg:pl-20 lg:pr-0'>We're an independant design and development agency built of hard working humans driven by making amazing things happen in creating brand strategies, advertising and technology services.</p>
          <button className='btn-sm lg:ml-20'>View Our Work</button>
        </div>
    </div>
  )
}
