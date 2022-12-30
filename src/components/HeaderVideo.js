import { useState } from "react";
import Fade from "react-reveal/Fade";
import BurgerMenu from "../assets/images/burger.svg";

export default function HeaderVideo() {
	const [navbar, setNavbar] = useState(false);

	const showNavBg = () => {
		if (window.scrollY >= 576) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", showNavBg);

	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<header className="relative text-white p-6 top-0 z-1 -mt-24">
			<nav className={navbar ? "navbar active" : "navbar"}>
				<Fade top>
					<h2 className="font-Overpass font-bold text-xl mt-1 lg:text-2xl xl:text-3xl transition duration-200 hover:text-sky-300">
						<a href="https://jessicamlee.github.io/CMJSH-agency/" title="Go to Home page">
							CMJSH
						</a>
					</h2>
				</Fade>

				{/* Mobile Menu */}
				<div className="flex lg:hidden">
					<Fade top>
						<img
							className="h-10 w-10"
							onClick={() => setIsNavOpen((prev) => !prev)}
							src={BurgerMenu}
							alt="menu"
						></img>
					</Fade>
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
						<Fade cascade>
							<ul className="nav-items-mobile">
								<li>
									<a
										className="transition duration-200 hover:text-sky-300"
										href="https://jessicamlee.github.io/CMJSH-agency/"
										title="Home"
									>
										Home
									</a>
								</li>
								<li>
									<a
										className="transition duration-200 hover:text-sky-300"
										href="https://jessicamlee.github.io/CMJSH-agency/ProfilePage"
										title="About Us"
									>
										About
									</a>
								</li>
								<li>
									<a
										className="transition duration-200 hover:text-sky-300"
										href="https://jessicamlee.github.io/CMJSH-agency/ProfilePage"
										title="Our Work"
									>
										Work
									</a>
								</li>
								<li>
									<a
										className="transition duration-200 hover:text-sky-300"
										href="https://jessicamlee.github.io/CMJSH-agency/#contact-us"
										title="Contact Us"
									>
										Contact
									</a>
								</li>
							</ul>
						</Fade>
					</div>
				</div>

				{/* Desktop Menu */}
				<Fade top cascade>
					<ul className="nav-items-desktop">
						<li>
							<a
								className="transition duration-200 hover:text-sky-300 hover:underline"
								href="https://jessicamlee.github.io/CMJSH-agency/"
								title="Home"
							>
								Home
							</a>
						</li>
						<li>
							<a
								className="transition duration-200 hover:text-sky-300 hover:underline"
								href="https://jessicamlee.github.io/CMJSH-agency/ProfilePage"
								title="About Us"
							>
								About
							</a>
						</li>
						<li>
							<a
								className="transition duration-200 hover:text-sky-300 hover:underline"
								href="https://jessicamlee.github.io/CMJSH-agency/ProfilePage"
								title="Our Work"
							>
								Work
							</a>
						</li>
						<li>
							<a
								className="transition duration-200 hover:text-sky-300 hover:underline"
								href="https://jessicamlee.github.io/CMJSH-agency/#contact-us"
								title="Contact Us"
							>
								Contact
							</a>
						</li>
					</ul>
				</Fade>
			</nav>
		</header>
	);
}
