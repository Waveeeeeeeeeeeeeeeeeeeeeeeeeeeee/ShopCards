import { ButtonHTMLAttributes } from "react";
import { Button } from "../../../../../components/Button/Button";
import { IButton } from "../../../../../interfaces/Button.interface/IButton.interface";

export const ProductCardDescriptionButton = <
	T extends ButtonHTMLAttributes<HTMLButtonElement>,
>({
	name,
	type: T = "submit",
	content,
	onClick,
	className,
}: IButton<T>) => {
	return (
		<Button
			name={name}
			content={content}
			className={className}
			type={T}
			onClick={onClick}
		/>
	);
};
