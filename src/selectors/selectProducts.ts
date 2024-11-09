import { IAsyncRequestState } from "../hooks/useFetch";
import { IProductList } from "../models/ProductListModel";
import { RootState } from "../store/store";
import { createSelector } from "reselect";

const selectProductItems = (state: RootState) => state.products.items;
const selectProductStatus = (state: RootState) => state.products.status;
const selectProductError = (state: RootState) => state.products.error;

export const selectMemoizedProductState = createSelector(
	[selectProductItems, selectProductStatus, selectProductError],
	(items, status, error): IAsyncRequestState<IProductList> => ({
		data: items,
		status,
		error,
	}),
);
