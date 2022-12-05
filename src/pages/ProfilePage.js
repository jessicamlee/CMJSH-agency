import HeaderPlain from "../components/HeaderPlain";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";
import Fade from 'react-reveal/Fade';


import { Carousel } from "flowbite-react";
import { dataTeamMembers } from "../constants";

export default function Profiles() {

    return (
        <>
            <HeaderPlain />
            <main className="mt-48 mb-8 min-h-justBody">
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