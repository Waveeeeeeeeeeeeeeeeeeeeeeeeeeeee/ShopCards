import { Input } from "../Input";

import { ITextInput } from "../../../interfaces/Input.interface/IInputText.interface";

export const Text = (props: ITextInput) => {
	return <Input {...props} />;
};
