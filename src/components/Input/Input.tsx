import { InputHTMLAttributes } from "react";
import { IInput } from "../../interfaces/Input.interface/Input.interface";

export const Input = <T extends InputHTMLAttributes<HTMLInputElement>>(
	props: IInput<T>,
) => {
	return <input {...props}></input>;
};
