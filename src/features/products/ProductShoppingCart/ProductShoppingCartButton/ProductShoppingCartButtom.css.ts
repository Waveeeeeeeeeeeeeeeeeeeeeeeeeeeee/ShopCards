import { style } from "@vanilla-extract/css";

export const iconContainer = style({
	position: "absolute",
	top: "30px",
	right: "40px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	cursor: "pointer",
	width: "40px",
	height: "40px",
	borderRadius: "50%",
	backgroundColor: "transparent",
	color: "#fff",
	boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
	transition: "background-color 0.3s, transform 0.2s",
	zIndex: 1000,
	border: "none",
	padding: 0,
	outline: "none",
	":focus": {
		outline: "none",
	},
	":hover": {
		backgroundColor: "#FF3D2A",
		transform: "scale(1.1)",
	},
});
