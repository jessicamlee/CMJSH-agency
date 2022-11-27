export default function ExpertiseCard({
	id,
	title,
	paragraph,
	imagePath,
	imageName,
}) {
	return (
		<div key={id} className="mb-10">
			<img className=" hidden sm:block" src={imagePath} alt={imageName} />
			<h3 className="mb-4 mt-4">{title}</h3>
			<p className="text-sm font-light leading-6">{paragraph}</p>
		</div>
	);
}
