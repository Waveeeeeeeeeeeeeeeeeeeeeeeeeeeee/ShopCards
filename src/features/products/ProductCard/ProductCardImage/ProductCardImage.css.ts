import { style } from "@vanilla-extract/css";

export const productCardImageContainerStyles = style({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	marginBottom: "16px",
});

export const productCardImageStyles = style({
	objectFit: "contain",
	maxWidth: "200px",
	height: "150px",
	width: "250px",
	borderRadius: "8px",
});
