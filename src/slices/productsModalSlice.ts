import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
