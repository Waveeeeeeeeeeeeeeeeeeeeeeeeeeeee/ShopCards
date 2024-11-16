import { IProductCartList } from "../interfaces/Product.interface/ProductShopingCart.interface/ProductShopingCart.interface";
import { RootState } from "../store/store";
import { createSelector } from "reselect";

const selectProductsFromCart = (state: RootState) =>
	state.productsShopingCart.items;
const selectCountFromCart = (state: RootState) =>
	state.productsShopingCart.totalCount;
const selectPriceFromCart = (state: RootState) =>
	state.productsShopingCart.totalPrice;

export const selectMemoizedProductsFromCartState = createSelector(
	[selectProductsFromCart, selectCountFromCart, selectPriceFromCart],
	(items, totalCount, totalPrice): IProductCartList => ({
		items,
		totalCount,
		totalPrice,
	}),
);
