import { Input } from "../Input";
import { INumberInput } from "../../../interfaces/Input.interface/IInputNumber.interface";

export const Number = (props: INumberInput) => {
	return <Input {...props} />;
};
