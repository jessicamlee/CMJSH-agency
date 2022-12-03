import HeaderVideo from "../components/HeaderVideo";
import Footer from "../components/Footer";
import Hero from "../layout/Hero";
import WhoAreWe from "../layout/WhoAreWe";
import Expertise from "../layout/Expertise";
import MeettheTeam from "../layout/MeettheTeam";
import Contact from "../layout/Contact";

export default function HomePage() {
	return (
		<>
			<HeaderVideo />
			<main>
				<Hero />

				<WhoAreWe />

				<Expertise />

				<MeettheTeam />

				<Contact />
			</main>
			<Footer />
		</>
	);
}
