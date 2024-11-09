export const ProductCardTitle = ({
	title,
	className,
}: {
	title: string;
	className: string;
}) => {
	return <h2 className={className}>{title}</h2>;
};
