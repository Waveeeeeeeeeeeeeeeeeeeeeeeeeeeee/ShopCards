import { createSlice } from "@reduxjs/toolkit";
import { IProductModalState } from "../interfaces/Product.interface/ProductModalState.interface";

const initialState: IProductModalState = {
	isOpen: false,
};

const productModalSlice = createSlice({
	name: "productModal",
	initialState: initialState,
	reducers: {
		openModal: (state) => {
			state.isOpen = true;
		},
		closeModal: (state) => {
			state.isOpen = false;
		},
	},
});

export const { openModal, closeModal } = productModalSlice.actions;
export default productModalSlice.reducer;
