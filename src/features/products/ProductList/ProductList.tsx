import React from "react";
import { listContainer } from "./ProductList.css";
import { useProducts } from "../../../hooks/useProducts";
import { IProduct } from "../../../models//ProductModel";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductListPreloader } from "./ProductListPreloader/ProductListPreloader";

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

	return (
		<div>
			<ul className={listContainer}>
				{products.map((product: IProduct) => (
					<ProductCard
						key={product.id}
						id={product.id}
						title={product.title}
						description={product.description}
						price={product.price}
						image={product.image}
					/>
				))}
			</ul>
		</div>
	);
};

export default ProductList;
