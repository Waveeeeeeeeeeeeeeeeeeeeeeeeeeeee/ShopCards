import { productCardStyles } from "./ProductCard.css";
import {
	productCardImageContainerStyles,
	productCardImageStyles,
} from "./ProductCardImage/ProductCardImage.css";
import { productCardPriceStyles } from "./ProductCardPrice/ProductCardPrice.css";
import { productCardTitleStyles } from "./ProductCardTitle/ProductCardTitle.css";

import { IProduct } from "../../../models/ProductModel";
import { ProductCardDescription } from "./ProductCardDescription/ProductCardDescription";
import { ProductCardImage } from "./ProductCardImage/ProductCardImage";
import { ProductCardPrice } from "./ProductCardPrice/ProductCardPrice";
import { ProductCardTitle } from "./ProductCardTitle/ProductCardTitle";

export const ProductCard = ({
	title,
	price,
	description,
	id,
	image,
}: IProduct) => {
	return (
		<li key={id} className={productCardStyles}>
			<ProductCardTitle
				title={title}
				className={productCardTitleStyles}
			/>
			<ProductCardImage
				image={image}
				classNameContainer={productCardImageContainerStyles}
				classNameImage={productCardImageStyles}
			/>
			<ProductCardPrice
				className={productCardPriceStyles}
				price={price + "$"}
			/>
			<ProductCardDescription>{description}</ProductCardDescription>
		</li>
	);
};
