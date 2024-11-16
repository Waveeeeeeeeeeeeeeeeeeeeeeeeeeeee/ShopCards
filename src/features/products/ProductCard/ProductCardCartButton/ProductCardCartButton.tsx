import { Button } from "../../../../components/Button/Button";
import { OnClickEventType } from "../../../../types/events.types/click.event.type";

export const ProductCardCartButton = ({
	className,
	onClick,
}: {
	className: string;
	onClick: OnClickEventType;
}) => {
	return (
		<Button
			className={className}
			content={"Добавить в корзину"}
			name="add"
			type="submit"
			onClick={onClick}
		></Button>
	);
};
