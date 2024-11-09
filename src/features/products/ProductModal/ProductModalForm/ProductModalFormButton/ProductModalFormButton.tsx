import { Button } from "../../../../../components/Button/Button";

export const ProductModalFormButton = ({
	className,
}: {
	className: string;
}) => {
	return (
		<Button
			type="submit"
			name="save"
			content={"Сохранить продукт"}
			className={className}
		/>
	);
};
