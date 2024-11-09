export enum InputVariations {
	Text = "text",
	Number = "number",
	Checkbox = "checkbox",
	File = "file",
}

export interface IInputVariations {
	text: InputVariations.Text;
	number: InputVariations.Number;
	checkbox: InputVariations.Checkbox;
	file: InputVariations.File;
}
