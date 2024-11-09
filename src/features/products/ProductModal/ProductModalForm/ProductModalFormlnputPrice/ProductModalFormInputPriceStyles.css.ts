import { style } from "@vanilla-extract/css";
export const ProductModalFormInputPriceStyles = style({
	maxWidth: "400px",
	padding: "10px 14px",
	margin: "0 0 10px 0",
	fontSize: "16px",
	color: "#333",
	backgroundColor: "#fff",
	border: "1px solid #ccc",
	borderRadius: "6px",
	outline: "none",
	transition: "border-color 0.2s ease-in-out",
	boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",

	selectors: {
		"&:focus": {
			borderColor: "#007bff",
			boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)",
		},
		"&:disabled": {
			backgroundColor: "#f5f5f5",
			cursor: "not-allowed",
		},
	},
});
