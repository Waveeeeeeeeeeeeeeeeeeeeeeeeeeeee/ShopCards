import { InputHTMLAttributes } from "react";
import { OnChangeEventType } from "../../types/events.types/change.event.type";

export interface IInput<T extends InputHTMLAttributes<HTMLInputElement>> {
	type: T["type"];
	onChange: OnChangeEventType;
	name?: string;
	themeType?: string;
	value?: string | number;
	placeholder?: string;
	className?: string;
	required?: boolean;
	minLength?: number;
	maxLength?: number;
}
