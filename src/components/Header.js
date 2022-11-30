import React from 'react';

export default function Header() {
  return (
    <header className='text-white font-Overpass bg-darkBlue p-6 sticky top-0 flex justify-between items-center z-1 lg:px-10 xl:px-16'>
        <h2 className='font-bold text-xl mt-1 lg:text-2xl xl:text-3xl'>CMJSH</h2>
        <img className='h-10 w-10 lg:hidden' src='assets/images/burger.svg' alt='menu'></img>
        <nav className='hidden lg:block'>
          <ul className='flex gap-x-10 font-light xl:text-base'>
            <li><a href='#' title='Home'>Home</a></li>
            <li><a href='#' title='Home'>About</a></li>
            <li><a href='#' title='Home'>Work</a></li>
            <li><a href='#' title='Home'>Contact</a></li>
          </ul>
        </nav>
    </header>
  )
}
