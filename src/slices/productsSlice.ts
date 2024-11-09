// productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProductsThunk } from "../thunks/fetchProductsThunk";
import { IProductList } from "../models/ProductListModel";
import { IProductState } from "../interfaces/Product.interface/ProductState.interface";
import { IProduct } from "../models/ProductModel";

const initialState: IProductState = {
	items: [],
	status: "idle",
	error: null,
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addProduct(state, action: PayloadAction<IProduct>) {
			const oldProducts = state.items;
			state.items = [action.payload, ...oldProducts];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProductsThunk.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(
				fetchProductsThunk.fulfilled,
				(state, action: PayloadAction<IProductList>) => {
					state.status = "succeeded";
					state.items = action.payload;
				},
			)
			.addCase(fetchProductsThunk.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message || "Unknown error";
			});
	},
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
