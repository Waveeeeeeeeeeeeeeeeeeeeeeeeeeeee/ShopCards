import { InputHTMLAttributes } from "react";
import { IInput } from "./Input.interface";
import { InputVariations } from "./InputVariations.interface";
export interface INumberInput
	extends IInput<InputHTMLAttributes<HTMLInputElement>> {
	type: InputVariations.Number;
	min?: number;
	max?: number;
	step?: number;
}
