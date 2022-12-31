import Fade from 'react-reveal/Fade';

export default function ExpertiseCard({
	id,
	title,
	paragraph,
	imagePath,
	imageName,
}) {
	return (
		<Fade cascade>
			<div
				key={id}
				className="mb-10 text-darkBlue font-bold w-fit sm:pr-4 md:pr-12 lg:pl-20 lg:pr-0"
			>
				<img className="hidden md:block" src={imagePath} alt={imageName} />
				<h3 className="font-bold mb-8 mt-4">{title}</h3>
				<p className="text-sm font-light leading-6">{paragraph}</p>
			</div>
		</Fade>
	);
}
