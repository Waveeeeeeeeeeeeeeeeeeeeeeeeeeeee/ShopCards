import { Button } from "../../../../components/Button/Button";
import { OnClickEventType } from "../../../../types/events.types/click.event.type";

export const ProductCardEditable = ({
	className,
	content,
	onClick,
}: {
	className: string;
	content: string;
	onClick: OnClickEventType;
}) => {
	return (
		<Button
			className={className}
			type="submit"
			name="edit"
			content={content}
			onClick={onClick}
		/>
	);
};
