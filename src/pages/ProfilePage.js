import HeaderPlain from "../components/HeaderPlain";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";

import { Carousel } from "flowbite-react";
import { dataTeamMembers } from "../constants";

export default function Profiles() {

    return (
        <>
            <HeaderPlain />
            <main className="mt-48">
                <div className="flex justify-center items-center flex-col relative">
                    <h1 className="text-4xl md:text-5xl text-darkBlue font-bold border-b-4 w-fit border-lightBlue md:mx-auto dark:text-white">
                        Meet the Team
                    </h1>

                    <div className="h-240 sm:h-292 md:h-140 lg:h-176 xl:h-232 px-8 container max-w-screen-xl mx-auto mb-1.5">
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