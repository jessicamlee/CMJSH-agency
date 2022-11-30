export default function ProfileCard({
    id,
    name,
    fullBio,
    imagePath,
    imageName,
    projectName,
    projectDesc,
    projectImagePath,
    projectImageName,
}) {

    return (
        <div key={id}>
            <div>
                <img className="rounded w-full pb-4" src={imagePath} alt={imageName} />
                <h3 className="text-4xl text-darkBlue font-bold border-b-4 w-fit border-lightBlue md:mx-auto dark:text-white">{name}</h3>
                <p className="text-darkBlue text-xs font-light mt-2 md:text-sm xl:font-regular dark:text-white">{fullBio}</p>
                {/* links section here */}
            </div>
            <div>
                <img className="rounded w-full" src={projectImagePath} alt={projectImageName} />
                <h3 className="text-darkBlue text-base lg:text-2xl font-bold leading-5 mt-3 dark:text-white">{projectName}</h3>
                <p className="text-darkBlue text-xs font-light mt-2 md:text-sm xl:font-regular dark:text-white">{projectDesc}</p>
                <button className='btn-full' title="View Project">View Work</button>
            </div>
        </div>
    );
}