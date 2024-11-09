import { InputHTMLAttributes } from "react";
import { IInput } from "./IInput.interface";
import { InputVariations } from "./IInputVariations.interface";
export interface INumberInput
	extends IInput<InputHTMLAttributes<HTMLInputElement>> {
	type: InputVariations.Number;
	min?: number;
	max?: number;
	step?: number;
}
