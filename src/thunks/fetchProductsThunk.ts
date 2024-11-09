import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProductList } from "../models/ProductListModel";

export const fetchProductsThunk = createAsyncThunk<IProductList, string>(
	"products/fetchProducts",
	async (url) => {
		try {
			const res = await fetch(url);

			if (!res.ok) {
				throw new Error(`Error: ${res.status}`);
			}
			const data = await res.json();

			return data;
		} catch (err) {
			if (err instanceof Error) {
				throw new Error(err.message);
			}

			throw new Error("Unknown error");
		}
	},
);
