import { style } from "@vanilla-extract/css";

export const productCardStyles = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "20px",
	border: "1px solid #e0e0e0",
	borderRadius: "10px",
	backgroundColor: "#fff",
	boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
	width: "300px",
	minHeight: "420px",
	margin: "16px",
	transition: "transform 0.3s ease, box-shadow 0.3s ease",
	":hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
	},
});
