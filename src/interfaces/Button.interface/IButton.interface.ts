import { ButtonHTMLAttributes } from "react";
import { OnClickEventType } from "../../types/events.types/click.event.type";

export interface IButton<T extends ButtonHTMLAttributes<HTMLButtonElement>> {
	name: string;
	type: T["type"];
	content: string | JSX.Element;
	value?: string | undefined;
	onClick?: OnClickEventType;
	className?: string;
}
