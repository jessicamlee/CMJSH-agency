import ExpertiseCard from "../components/ExpertiseCard";
import { dataExpertise } from "../constants";

export default function Expertise() {
	return (
		<div className="grid grid-cols-1 gap-16 w-md px-8 md:px-14 lg:px-14 mx-auto max-w-screen-xl">
			<h2 className="text-4xl text-darkBlue font-bold border-b-4 w-fit border-lightBlue">
				Our Expertise
			</h2>

			<div className="container px-2 md:pl-20 md:mt-8 lg:pl-0 md:grid block grid-cols-2 max-w-3xl mx-auto gap-10">
				{dataExpertise.map((item) => {
					return ExpertiseCard(item);
				})}
			</div>
		</div>
	);
}
