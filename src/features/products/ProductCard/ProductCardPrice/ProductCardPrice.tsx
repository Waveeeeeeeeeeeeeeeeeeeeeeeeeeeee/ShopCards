export const ProductCardPrice = ({
	price,
	className,
}: {
	price: number | string;
	className: string;
}) => {
	return <p className={className}>{price}</p>;
};
