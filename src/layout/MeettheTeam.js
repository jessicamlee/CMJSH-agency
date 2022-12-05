import TeamMemberCard from "../components/TeamMemberCard";
import { dataTeamMembers } from "../constants";
import Fade from 'react-reveal/Fade';

export default function MeettheTeam() {
	return (
		<div className="grid gap-16 section-spacing mx-auto max-w-screen-xl">
			<Fade>
				<h2 className="text-4xl text-darkBlue font-bold border-b-4 w-fit border-lightBlue md:mx-auto dark:text-white">
					Meet the Team
				</h2>
			</Fade>
				<ul className="flex flex-wrap gap-x-6 gap-y-10 justify-center md:px-16 md:gap-x-12 md:gap-y-14">
					{dataTeamMembers.map((item) => {
						return TeamMemberCard(item);
					})}
				</ul>
		</div>
	);
}
