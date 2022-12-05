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
