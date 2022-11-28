import ExpertiseCard from "../components/ExpertiseCard";
import { dataExpertise } from "../constants";

export default function Expertise() {
	return (
		<div className="grid grid-cols-1 gap-16 section-spacing relative">
			<h2 className="text-4xl text-darkBlue font-bold border-b-4 w-fit border-lightBlue">
				Our Expertise
			</h2>

			<div className="sm:grid block grid-cols-2 gap-y-6 gap-x-14 max-w-3xl m-auto">
				{dataExpertise.map((item) => {
					console.log(item);
					return ExpertiseCard(item);
				})}
			</div>
		</div>
	);
}
