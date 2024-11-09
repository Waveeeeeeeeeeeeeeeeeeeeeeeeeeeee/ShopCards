import { style } from "@vanilla-extract/css";

export const listContainer = style({
	display: "flex",
	flexWrap: "wrap", // Позволяем карточкам переноситься на следующую строку
	gap: "16px",
	backgroundColor: "transparent",
	alignItems: "center",
	justifyContent: "flex-start", // Выравниваем карточки по левому краю
	padding: 16,
	boxSizing: "border-box",

	"@media": {
		"screen and (max-width: 600px)": {
			flexDirection: "column", // По одному товару в ряд
			alignItems: "center", // Центрируем для мобильных устройств
		},
		"screen and (min-width: 600px) and (max-width: 1024px)": {
			flexDirection: "row",
			justifyContent: "flex-start", // Выравнивание по левому краю для планшетов
			maxWidth: "600px",
		},
		"screen and (min-width: 1024px)": {
			justifyContent: "flex-start", // Выравнивание по левому краю для ПК
			maxWidth: "1200px",
		},
	},
});
