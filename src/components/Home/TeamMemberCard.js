import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function TeamMemberCard({
	id,
	name,
	role,
	paragraph,
	imagePath,
	imageName,
}) {
	const navigate = useNavigate();

	function navigateToProfile() {
		navigate("/OurTeam");
	}

	return (
		<Fade cascade>
			<li
				key={id}
				className="375wide:w-46pct md:w-28pct xl:w-22pct xl:max-w-22pct"
			>
				<img
					className="rounded w-full"
					src={imagePath}
					alt={imageName}
				/>
				<h3 className="text-darkBlue text-base lg:text-2xl font-bold leading-5 mt-3 dark:text-white">
					{name}
				</h3>
				<p className="text-roleDark text-xs md:text-sm lg:text-base font-light leading-4 mt-2 lg:mt-0 lg:font-regular dark:text-roleLight">
					{role}
				</p>
				<p className="text-darkBlue text-xs font-light mt-2 md:text-sm xl:font-regular dark:text-white">
					{paragraph}
				</p>
				<button
					className="btn-full transition duration-200 hover:bg-sky-300 "
					title="Go to Profile page"
					onClick={navigateToProfile}
				>
					View Work
				</button>
			</li>
		</Fade>
	);
}
