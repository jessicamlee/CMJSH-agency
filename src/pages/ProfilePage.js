import ProfileSlider from "../layout/ProfileSlider";

export default function Profiles() {

    return (
        <main>
            <div className="grid gap-7 py-7 px-4">
                <h1 className="text-4xl md:text-5xl text-darkBlue font-bold border-b-4 w-fit border-lightBlue md:mx-auto dark:text-white">
                    Meet the Team
                </h1>

                <ProfileSlider />
            </div>
        </main>
    )
}