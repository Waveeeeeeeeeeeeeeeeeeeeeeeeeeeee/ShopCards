import { style } from "@vanilla-extract/css";

export const productCardTitleStyles = style({
	fontSize: "16px",
	fontWeight: "bold",
	color: "#333",
	textAlign: "center",
	marginBottom: "8px",
	whiteSpace: "normal", // Обеспечивает перенос текста на новую строку
	overflow: "hidden", // Прячет текст, выходящий за пределы
	textOverflow: "ellipsis", // Добавляет многоточие в случае переполнения
	width: "300px",
});
