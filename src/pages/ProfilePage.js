import { Carousel } from "flowbite-react";
import ProfileCard from "../components/ProfileCard";
import { dataTeamMembers } from "../constants";

export default function Profiles() {

    return (
        <main className="grid gap-7 py-7 px-4">
            <h1 className="text-4xl md:text-5xl text-darkBlue font-bold border-b-4 w-fit border-lightBlue md:mx-auto dark:text-white">
                Meet the Team
            </h1>

            <div className="h-240 sm:h-292 md:h-140 lg:h-176 xl:h-232 px-8 container max-w-screen-xl mx-auto mb-1.5">
                <Carousel 
                    // slideInterval={10000}
                    slide={false}
                    indicators={false}
                    leftControl="<"
                    rightControl=">"
                >
                    {dataTeamMembers.map((item) => {
                        return ProfileCard(item);
                    })}
                </Carousel>
            </div>
        </main>
    )
}