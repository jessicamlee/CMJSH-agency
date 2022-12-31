import HeaderPlain from "../components/Navigation/HeaderPlain";
import ProfileCard from "../components/OurTeam/ProfileCard";
import Footer from "../components/Navigation/Footer";

import { Carousel } from "flowbite-react";
import { dataTeamMembers } from "../data/TeamMembers";

export default function OurTeam() {
    return (
        <>
            <HeaderPlain />
            <main className="mt-48 pb-8 min-h-justBody bg-light-768profile md:bg-light-1024profile lg:bg-light-1440profile dark:bg-dark-768profile dark:md:bg-dark-1024profile dark:lg:bg-dark-1440profile bg-bottom">
                <div className="flex justify-center items-center flex-col relative">
                    <h1 className="text-4xl md:text-5xl text-darkBlue font-bold border-b-4 w-fit border-lightBlue md:mx-auto dark:text-white">
                        Meet the Team
                    </h1>
                    <div className="h-232 457wide:h-240 sm:h-292 md:h-128 px-8 container max-w-screen-xs md:max-w-screen-md mx-auto mt-8 md:mt-9 mb-10 md:mb-9">
                        <Carousel 
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
                </div>
            </main>
            <Footer />
        </>
    )
}