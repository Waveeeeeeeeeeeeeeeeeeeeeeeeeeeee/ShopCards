import { Input } from "../Input";
import { IFileInput } from "../../../interfaces/Input.interface/InputFile.interface";

export const File = (props: IFileInput) => {
	return <Input {...props} />;
};
