import { createPortal } from "react-dom";
import { ProductShoppingCartButton } from "./ProductShoppingCartButton/ProductShoppingCartButton";
import { useState } from "react";
import { OnClickEventType } from "../../../types/events.types/click.event.type";
import { ProductShoppingCartWindow } from "./ProductShoppingCartWindow/ProductShoppingCartWindow";

export const ProductShoppingCart = () => {
	const [isOpen, setIsOpen] = useState(false);
	const domNode = document.getElementById("overlays");

	const toOpenCart: OnClickEventType = function (e) {
		e.preventDefault();
		setIsOpen(!isOpen);
	};

	const toClose: OnClickEventType = function (e) {
		e.preventDefault();
		setIsOpen(!isOpen);
	};

	return (
		<>
			{createPortal(
				<>
					{!isOpen && (
						<ProductShoppingCartButton onClick={toOpenCart} />
					)}

					{isOpen && <ProductShoppingCartWindow onClick={toClose} />}
				</>,
				domNode as HTMLElement,
			)}
		</>
	);
};
