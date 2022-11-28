import TeamMemberCard from "../components/TeamMemberCard";
import { dataTeamMembers } from "../constants";

export default function MeettheTeam() {
	return (
		<div className="grid gap-16 section-spacing">
			<h2 className="text-4xl text-darkBlue font-bold border-b-4 w-fit border-lightBlue md:mx-auto dark:text-white">
				Meet the Team
			</h2>

			<ul className="flex flex-wrap gap-x-6 gap-y-10 md:px-16 md:gap-x-12 md:gap-y-14 md:justify-center">
				{dataTeamMembers.map((item) => {
					console.log(item);
					return TeamMemberCard(item);
				})}
			</ul>
		</div>
	);
}
