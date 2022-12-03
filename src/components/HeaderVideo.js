import { useState } from "react";

export default function HeaderVideo() {

  const [navbar, setNavbar] = useState(false);

  const showNavBg = () => {
    if (window.scrollY >= 576) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', showNavBg);

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className='relative text-white p-6 top-0 z-1 -mt-24 lg:px-10'>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <h2 className='font-Overpass font-bold text-xl mt-1 lg:text-2xl xl:text-3xl'><a href="/" title="Go to Home page">CMJSH</a></h2>

        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <img 
            className='h-10 w-10' 
            onClick={() => setIsNavOpen((prev) => !prev)}
            src='assets/images/burger.svg' 
            alt='menu'
          ></img>
          <div className={isNavOpen ? "showNav" : "hideNav"}>
            <div 
              className="absolute top-0 right-0 p-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                  className="h-8 w-8 text-white fill-none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className='nav-items-mobile'>
              <li><a href='/' title='Home'>Home</a></li>
              <li><a href='/' title='About Us'>About</a></li>
              <li><a href='/' title='Our Work'>Work</a></li>
              <li><a href='/' title='Contact Us'>Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className='nav-items-desktop'>
          <li><a href='/' title='Home'>Home</a></li>
          <li><a href='/' title='About Us'>About</a></li>
          <li><a href='/' title='Our Work'>Work</a></li>
          <li><a href='/' title='Contact Us'>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
