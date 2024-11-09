import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productsSlice";
import productModalReducer from "../slices/productsModalSlice";

const store = configureStore({
	reducer: {
		products: productReducer,
		productsModal: productModalReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
