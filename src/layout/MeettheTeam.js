import TeamMemberCard from "../components/TeamMemberCard";
import { dataTeamMembers } from "../constants";

export default function MeettheTeam() {
	return (
		<div className="grid grid-cols-1 gap-16 px-6 mt-44 relative mb-20">
			<h2 className="text-4xl text-darkBlue font-bold border-b-4 w-fit border-lightBlue md:text-center">
				Meet the Team
			</h2>

			<ul className="grid grid-cols-2 gap-x-6">
				{dataTeamMembers.map((item) => {
					console.log(item);
					return TeamMemberCard(item);
				})}
			</ul>
		</div>
	);
}
