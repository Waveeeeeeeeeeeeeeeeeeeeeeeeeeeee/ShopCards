import { style, keyframes } from "@vanilla-extract/css";

// Анимация для плавного появления окна
const fadeIn = keyframes({
	from: { opacity: 0 },
	to: { opacity: 1 },
});

// Анимация для плавного исчезновения окна
const fadeOut = keyframes({
	from: { opacity: 1 },
	to: { opacity: 0 },
});

// Стили для оверлея модального окна
export const modalOverlayStyles = style({
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: "rgba(0, 0, 0, 0.5)", // Затемнённый фон
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	zIndex: 1000, // Чтобы окно было поверх всего
	animation: `${fadeIn} 0.3s ease-out`,
});

// Стили для контента модального окна
export const modalContentStyles = style({
	backgroundColor: "#fff",
	borderRadius: "8px",
	padding: "20px",
	maxWidth: "500px",
	width: "100%",
	boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // Тень для выделения
	animation: `${fadeIn} 0.3s ease-out`,
});

// Стили для исчезновения
export const modalFadeOutStyles = style({
	animation: `${fadeOut} 0.3s ease-in`,
});
