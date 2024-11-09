import { InputHTMLAttributes } from "react";
import { IInput } from "./IInput.interface";
import { InputVariations } from "./IInputVariations.interface";
export interface IFileInput
	extends IInput<InputHTMLAttributes<HTMLInputElement>> {
	type: InputVariations.File;
	accept?: string;
}
