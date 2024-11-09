import { loadingTextStyle } from "./ProductListPreloader.css";

export const ProductListPreloader = () => {
	return (
		<div className={loadingTextStyle}>
			Загрузка товаров с нашего магазина пожалуйста подождите немного...
		</div>
	);
};
