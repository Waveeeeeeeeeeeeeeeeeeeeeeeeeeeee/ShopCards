import { Input } from "../Input";
import { IFileInput } from "../../../interfaces/Input.interface/IInputFile.interface";

export const File = (props: IFileInput) => {
	return <Input {...props} />;
};
