export default function ExpertiseCard({
	id,
	title,
	paragraph,
	imagePath,
	imageName,
}) {
	return (
		<div key={id} className="mb-10 md:mx-24">
			<img className="hidden md:block" src={imagePath} alt={imageName} />
			<h3 className="font-bold mb-8 mt-4">{title}</h3>
			<p className="text-sm font-light leading-6">{paragraph}</p>
		</div>
	);
}
