import React from 'react'


export default function Intro() {
  return (
    <div className='grid grid-cols-1 gap-16 px-6 mt-44 relative mb-20'>
        <img className="absolute -top-28" src='#' alt='img placeholder'></img>
        <h2 className='text-4xl text-darkBlue font-bold border-b-4 w-fit border-lightBlue'>Who are we?</h2>
        <p className='text-sm font-light leading-6'>We're an independant design and development agency built of hard working humans driven by making amazing things happen in creating brand strategies, advertising and technology services.</p>
        <button className='btn-sm'>View Our Work</button>
    </div>
  )
}
