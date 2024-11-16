import { style } from "@vanilla-extract/css";

export const productCardDescriptionStyles = style({
	fontSize: "12px",
	color: "#666",
	textAlign: "center",
	lineHeight: "1.5",
	marginBottom: "16px",
	whiteSpace: "normal", // Обеспечивает перенос текста на новую строку
	overflow: "hidden", // Прячет текст, выходящий за пределы
	textOverflow: "ellipsis", // Добавляет многоточие в случае переполнения
	display: "flex",
	justifyContent: "center",
	width: "300px",
});
