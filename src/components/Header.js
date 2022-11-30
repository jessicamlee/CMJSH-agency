import React from 'react';

export default function Header() {
  return (
    <header className='text-white bg-darkBlue py-7 px-6 sticky top-0 flex justify-between items-center z-1'>
        <div className='font-bold text-xl'>CMJSH</div>
        <img className='h-9 w-9' src='assets/images/burger.svg' alt='menu'></img>
    </header>
  )
}
