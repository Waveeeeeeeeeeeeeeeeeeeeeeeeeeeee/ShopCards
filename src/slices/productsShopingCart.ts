import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductCartList } from "../interfaces/Product.interface/ProductShopingCart.interface/ProductShopingCart.interface";
import { IProductCartItem } from "../interfaces/Product.interface/ProductShopingCart.interface/ProductShopingCartItem.interface";

const initialState: IProductCartList = {
	items: [],
	totalCount: 0,
	totalPrice: 0,
};

const productsShopingCartSlice = createSlice({
	name: "productsShopingCart",
	initialState: initialState,
	reducers: {
		addProductToCart(state, action: PayloadAction<IProductCartItem>) {
			if (state.items.length === 0) {
				state.items.push(action.payload);
				state.totalPrice += action.payload.price;
				state.totalCount += 1;
				return;
			}
			let toggler = false;

			for (let i = 0; i < state.items.length; i++) {
				if (state.items[i].id === action.payload.id) {
					state.items[i].count += 1;
					state.totalPrice += action.payload.price;
					state.totalCount += 1;
					toggler = true;
					break;
				}
			}

			if (toggler === false) {
				state.items.push(action.payload);
				state.totalPrice += action.payload.price;
				state.totalCount += 1;
			}
		},

		deleteProductFromCart(state, action: PayloadAction<IProductCartItem>) {
			const itemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id,
			);

			if (itemIndex !== -1) {
				// Уменьшаем количество товара
				const item = state.items[itemIndex];
				item.count -= 1;
				state.totalPrice -= item.price;
				state.totalCount -= 1;

				// Если количество товара стало 0, удаляем его из корзины
				if (item.count === 0) {
					state.items.splice(itemIndex, 1);
				}
			}
		},

		increaseCount(state, action: PayloadAction<IProductCartItem>) {
			const product = state.items.find(
				(item) => item.id === action.payload.id,
			);
			if (product) {
				product.count += 1;
				state.totalPrice += action.payload.price;
				state.totalCount += 1;
			}
		},

		decreaseCount(state, action: PayloadAction<IProductCartItem>) {
			const product = state.items.find(
				(item) => item.id === action.payload.id,
			);
			if (product && product.count > 1) {
				product.count -= 1;
				state.totalPrice -= action.payload.price;
				state.totalCount -= 1;
			} else if (product && product.count === 1) {
				state.items = state.items.filter(
					(item) => item.id !== action.payload.id,
				);
				state.totalPrice -= action.payload.price;
				state.totalCount -= 1;
			}
		},
	},
});

export const {
	addProductToCart,
	deleteProductFromCart,
	increaseCount,
	decreaseCount,
} = productsShopingCartSlice.actions;
export default productsShopingCartSlice.reducer;
