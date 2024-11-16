import { InputHTMLAttributes } from "react";
import { IInput } from "./Input.interface";
import { InputVariations } from "./InputVariations.interface";

export interface ITextInput
	extends IInput<InputHTMLAttributes<HTMLInputElement>> {
	type: InputVariations.Text;
}
