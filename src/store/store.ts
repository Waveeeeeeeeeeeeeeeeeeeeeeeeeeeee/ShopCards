import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productsSlice";
import productModalReducer from "../slices/productsModalSlice";
import productsShopingCartReducer from "../slices/productsShopingCart";

const store = configureStore({
	reducer: {
		products: productReducer,
		productsModal: productModalReducer,
		productsShopingCart: productsShopingCartReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
