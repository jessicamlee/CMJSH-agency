import HeaderVideo from "../components/Navigation/HeaderVideo";
import Hero from "../sections/Home/Hero";
import WhoAreWe from "../sections/Home/WhoAreWe";
import Expertise from "../sections/Home/Expertise";
import MeettheTeam from "../sections/Home/MeettheTeam";
import Contact from "../sections/Home/Contact";
import Footer from "../components/Navigation/Footer";

export default function Home() {
	return (
		<>
			<HeaderVideo />
			<main>
				<div className="bg-light-768home md:bg-light-1024home lg:bg-light-1440home bg-bottom bg-no-repeat bg-cover pb-8">
					<Hero />

					<WhoAreWe />

					<Expertise />

					<MeettheTeam />
				</div>
				<Contact />
			</main>
			<Footer />
		</>
	);
}
