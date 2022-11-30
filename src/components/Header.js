import React from 'react';

export default function Header() {
  return (
    <header className='sticky text-white p-6 top-0 z-1 -mt-24 lg:px-10'>
      <nav className='flex justify-between items-center'>
        <h2 className='font-Overpass font-bold text-xl mt-1 lg:text-2xl xl:text-3xl'>CMJSH</h2>
        <img className='h-10 w-10 lg:hidden' src='assets/images/burger.svg' alt='menu'></img>
        <ul className='gap-x-10 font-light hidden lg:flex xl:text-base'>
          <li><a href='#' title='Home'>Home</a></li>
          <li><a href='#' title='Home'>About</a></li>
          <li><a href='#' title='Home'>Work</a></li>
          <li><a href='#' title='Home'>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
