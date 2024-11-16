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

export const formContainerStyles = style({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	padding: "0",
	maxWidth: "600px",
	margin: "0 auto",

	borderRadius: "8px",
});

export const inputStyles = style({
	padding: "10px",
	fontSize: "16px",
	borderRadius: "4px",
	border: "1px solid #ddd",
	marginBottom: "12px",
});

export const fileInputStyles = style({
	padding: "8px",
	fontSize: "16px",
	borderRadius: "4px",
	border: "1px solid #ddd",
	marginBottom: "12px",
});

export const buttonStyles = style({
	padding: "12px 20px",
	fontSize: "16px",
	backgroundColor: "#e64a19",
	color: "#fff",
	border: "none",
	borderRadius: "4px",
	cursor: "pointer",
	marginBottom: "8px",
	":hover": {
		backgroundColor: "#a53c1b",
	},
});
