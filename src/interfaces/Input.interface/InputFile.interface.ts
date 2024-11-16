import { InputHTMLAttributes } from "react";
import { IInput } from "./Input.interface";
import { InputVariations } from "./InputVariations.interface";
export interface IFileInput
	extends IInput<InputHTMLAttributes<HTMLInputElement>> {
	type: InputVariations.File;
	accept?: string;
}
