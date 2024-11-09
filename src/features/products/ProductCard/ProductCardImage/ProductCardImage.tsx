export const ProductCardImage = ({
	image,
	classNameContainer,
	classNameImage,
}: {
	image: string | undefined;
	classNameContainer: string;
	classNameImage: string;
}) => {
	return (
		<div className={classNameContainer}>
			<img src={image} alt="Product" className={classNameImage} />
		</div>
	);
};
