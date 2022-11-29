import React from 'react'

export default function Contact() {

  return (
    <div className='grid grid-cols-1 px-6 mb-6 text-sm lg:text-base lg:px-28 xl:px-44 relative'>
        <p className='font-light mb-1 text-sm'>We're always glad to help</p>
        <h2 className="text-4xl text-darkBlue font-bold border-b-4 w-fit border-lightBlue mb-20 lg:mb-28">Contact Us</h2>
        <form className='flex flex-col gap-10 mb-12 md:flex-row md:flex-wrap md:px-14 md:gap-x-28 lg:px-0'>
            <input className='border-b pb-3 grow' type='text' placeholder='Your name' required></input>
            <input className='border-b pb-3 grow' type='email' placeholder='Your email' required></input>
            <textarea className='border-b w-full mt-7' type='text' placeholder='Your Message' required></textarea>
            <button className='bg-darkBlue text-white text-sm rounded-full w-fit flex gap-3 items-center py-1 pl-3 pr-1 mt-6 mx-auto' type='submit'>
                <span className='pl-3'>Send</span>
                <img className='bg-white rounded-full h-7 w-7' src='#' alt='arrow'></img>
            </button>
        </form>
        <div id='validate' className='absolute text-green-600 mx-auto bottom-2 left-0 right-0 w-fit hidden'>Message successfully sent!</div>
    </div>
  )
}
