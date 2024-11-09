import { InputHTMLAttributes } from "react";
import { IInput } from "./IInput.interface";
import { InputVariations } from "./IInputVariations.interface";

export interface ITextInput
	extends IInput<InputHTMLAttributes<HTMLInputElement>> {
	type: InputVariations.Text;
}
