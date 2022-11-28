import React from 'react'

export default function Contact() {
  return (
    <div className='grid grid-cols-1 text-sm px-6 mb-20 lg:text-base lg:px-28 xl:px-44'>
        <p className='font-light mb-1'>We're always glad to help</p>
        <h2 className="text-4xl text-darkBlue font-bold border-b-4 w-fit border-lightBlue mb-20 lg:mb-28">Contact Us</h2>
        <div className='flex flex-col gap-10 mb-12 md:flex-row md:flex-wrap md:gap-x-28 md:px-14 lg:px-0'>
            <form className='grow'>
                <input className='border-b w-full pb-3' type='text' placeholder='Your name'></input>
            </form>
            <form className='grow'>
                <input className='border-b w-full pb-3' type='email' placeholder='Your email'></input>
            </form>
            <form className='mt-8 grow basis-full lg:mt-12'>
                <textarea className='border-b w-full' type='text' placeholder='Your Message'></textarea>
            </form>
        </div>
        <button className='bg-darkBlue text-white text-sm rounded-full w-fit flex gap-3 items-center py-1 pl-3 pr-1 mx-auto'>
            <span className='pl-3'>Send</span>
            <img className='bg-white rounded-full h-7 w-7' src='#'></img>
        </button>
    </div>
  )
}
