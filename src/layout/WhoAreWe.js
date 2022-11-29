import React from 'react'


export default function Intro() {
  return (
    <div className='grid grid-cols-1 px-6 mt-44 relative mb-20 lg:grid-cols-2'>
        <img className="absolute -top-28 lg:top-0 lg:right-0" src='#' alt='img placeholder'></img>
        <div className='flex flex-col gap-14 max-w-md mx-auto lg:mx-0 lg:pl-6'>
          <h2 className='text-4xl text-darkBlue font-bold border-b-4 w-fit border-lightBlue'>Who are we?</h2>
          <p className='text-sm font-light leading-6 lg:pl-20'>We're an independant design and development agency built of hard working humans driven by making amazing things happen in creating brand strategies, advertising and technology services.</p>
          <button className='btn-sm lg:ml-20'>View Our Work</button>
        </div>
    </div>
  )
}
