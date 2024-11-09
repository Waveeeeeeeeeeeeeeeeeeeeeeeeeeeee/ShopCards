import { style, keyframes } from "@vanilla-extract/css";

// Анимация мигания
const blinkAnimation = keyframes({
	"0%": {
		opacity: 0.5,
	},
	"50%": {
		opacity: 1,
	},
	"100%": {
		opacity: 0.5,
	},
});

// Стили для текста загрузки
export const loadingTextStyle = style({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)", // Центрирование по вертикали и горизонтали
	fontSize: "24px", // Увеличенный размер шрифта
	color: "#fff", // Более темный цвет текста для лучшей читаемости
	fontWeight: "bold",
	animation: `${blinkAnimation} 1.5s ease-in-out infinite`,
	textAlign: "center",
	padding: "10px",
});
