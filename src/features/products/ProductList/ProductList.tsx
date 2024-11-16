import React from "react";
import { listContainer } from "./ProductList.css";
import { useProducts } from "../../../hooks/useProducts";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductListPreloader } from "./ProductListPreloader/ProductListPreloader";
import { IProductIsEditable } from "../../../models/ProductIsEditableModel";
import { IProductIsEditableList } from "../../../models/ProductListIsEditableModel";

export const ProductList: React.FC = () => {
	const {
		data: products,
		status,
		error,
	} = useProducts("https://fakestoreapi.com/products");

	if (status === "loading") {
		return <ProductListPreloader />;
	}

	if (status === "failed") {
		return <div>Ошибка получения товаров: {error?.toString()}</div>;
	}

	const productIsEditable = products as IProductIsEditableList;

	return (
		<div>
			<ul className={listContainer}>
				{productIsEditable.map((product: IProductIsEditable) => (
					<ProductCard
						key={product.id}
						id={product.id}
						title={product.title}
						description={product.description}
						price={product.price}
						image={product.image}
						isEditable={product.isEditable}
					/>
				))}
			</ul>
		</div>
	);
};

export default ProductList;
