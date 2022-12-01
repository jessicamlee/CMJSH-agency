import { useState } from "react";

export default function Header() {

  const [navbar, setNavbar] = useState(false);

  const showNavBg = () => {
    if (window.scrollY >= 576) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', showNavBg);

  return (
    <header className='relative text-white p-6 top-0 z-1 -mt-24 lg:px-10'>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <h2 className='font-Overpass font-bold text-xl mt-1 lg:text-2xl xl:text-3xl'>CMJSH</h2>
        <img className='h-10 w-10 lg:hidden' src='assets/images/burger.svg' alt='menu'></img>
        <ul className='gap-x-10 font-light hidden lg:flex xl:text-base'>
          <li><a href='#' title='Home'>Home</a></li>
          <li><a href='#' title='About Us'>About</a></li>
          <li><a href='#' title='Our Work'>Work</a></li>
          <li><a href='#' title='Contact Us'>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
