import { ButtonHTMLAttributes } from "react";
import { IButton } from "../../interfaces/Button.interface/IButton.interface";

export const Button = <T extends ButtonHTMLAttributes<HTMLButtonElement>>({
	name,
	type,
	value,
	content,
	onClick,
	...rest
}: IButton<T>) => {
	return (
		<button
			name={name}
			type={type}
			onClick={onClick}
			value={value}
			{...rest}
		>
			{content}
		</button>
	);
};
