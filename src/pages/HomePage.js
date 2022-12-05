import HeaderVideo from "../components/HeaderVideo";
import Hero from "../layout/Hero";
import WhoAreWe from "../layout/WhoAreWe";
import Expertise from "../layout/Expertise";
import MeettheTeam from "../layout/MeettheTeam";
import Contact from "../layout/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
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
