import { useFetch } from "./useFetch";
import { fetchProductsThunk } from "../thunks/fetchProductsThunk";
import { selectMemoizedProductState } from "../selectors/selectProducts";
import { IProductList } from "../models/ProductListModel";

export const useProducts = (url: string) => {
	return useFetch<IProductList>({
		thunk: fetchProductsThunk,
		url,
		stateSelector: selectMemoizedProductState,
	});
};
