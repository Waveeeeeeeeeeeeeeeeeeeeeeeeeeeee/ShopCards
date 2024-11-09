import { style } from "@vanilla-extract/css";

export const productCardDescriptionButtonStyles = style({
	display: "flex",
	padding: "10px 20px",
	fontSize: "14px",
	fontWeight: "600",
	color: "#fff",
	backgroundColor: "#ff5722", // Приятный синий цвет
	border: "none",
	borderRadius: "5px",
	cursor: "pointer",
	textAlign: "center",
	textDecoration: "none",
	transition: "background-color 0.3s ease, transform 0.2s ease",
	":hover": {
		backgroundColor: "#e64a19", // Более тёмный синий при наведении
		transform: "translateY(-2px)", // Лёгкий подъём
	},
	":active": {
		transform: "translateY(0)", // Возврат при нажатии
	},
});
