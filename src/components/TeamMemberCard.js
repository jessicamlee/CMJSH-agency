export default function TeamMemberCard({
	id,
	name,
    role,
	paragraph,
	imagePath,
	imageName,
}) {
	return (
		<li key={id} className="mb-10">
			<img className="rounded" src={imagePath} alt={imageName} />
			<h3 className="text-darkBlue text-base font-bold leading-5 mt-3">{name}</h3>
            <p className="text-roleDark font-light leading-4 mt-2">{role}</p>
			<p className="text-darkBlue text-xs font-light mt-2">{paragraph}</p>
            <button className='w-full h-9 bg-darkBlue text-white text-xs rounded-full mt-4'>View Work</button>
		</li>
	);
}
