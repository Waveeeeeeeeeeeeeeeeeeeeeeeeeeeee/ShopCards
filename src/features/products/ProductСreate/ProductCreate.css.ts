import { style } from "@vanilla-extract/css";

export const productCreateButton = style({
	position: "fixed",
	right: "20px",
	bottom: "20px",
	width: "60px",
	height: "60px",
	borderRadius: "50%",
	backgroundColor: "#007BFF",
	color: "#fff",
	fontSize: "24px",
	fontWeight: "bold",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
	cursor: "pointer",
	border: "none",
	transition: "transform 0.2s",
	":hover": {
		transform: "scale(1.1)",
	},
});

export const productCreateIcon = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "30px",
	height: "30px",
	borderRadius: "50%",
	backgroundColor: "#fff",
	color: "#007BFF",
	fontSize: "24px",
	fontWeight: "bold",
	boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
	textAlign: "center",
	padding: "4px",
});
