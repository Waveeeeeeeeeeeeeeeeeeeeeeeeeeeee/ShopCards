import { productCardDescriptionButtonStyles } from "./ProductCardDescriptionButton/ProductCardDescriptionButton.css";
import { useState } from "react";
import { productCardDescriptionStyles } from "./ProductCardDescription.css";
import { truncateText } from "../../../../helpers/truncateText";
import { ProductCardDescriptionButton } from "./ProductCardDescriptionButton/ProductCardDescriptionButton";

export const ProductCardDescription = ({ children }: { children: string }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [basicDescription, advancedDescription] = truncateText(children);

	function toReadMore() {
		if (!isOpen) {
			setIsOpen(true);
		}
	}

	function toHideDescription() {
		setIsOpen(false);
	}

	return (
		<>
			<p className={productCardDescriptionStyles}>
				{basicDescription}
				{isOpen && advancedDescription}
			</p>
			{advancedDescription.length > 0 && !isOpen && (
				<ProductCardDescriptionButton
					name={"Read more"}
					content={"Read more"}
					type="submit"
					onClick={toReadMore}
					className={productCardDescriptionButtonStyles}
				/>
			)}

			{isOpen && (
				<ProductCardDescriptionButton
					content={"Hide"}
					name={"Hide"}
					type="submit"
					onClick={toHideDescription}
					className={productCardDescriptionButtonStyles}
				/>
			)}
		</>
	);
};
