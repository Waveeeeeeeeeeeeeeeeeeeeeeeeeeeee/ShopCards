import { Input } from "../Input";

import { ITextInput } from "../../../interfaces/Input.interface/InputText.interface";

export const Text = (props: ITextInput) => {
	return <Input {...props} />;
};
