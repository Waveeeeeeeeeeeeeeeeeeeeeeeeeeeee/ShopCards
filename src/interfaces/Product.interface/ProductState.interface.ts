import { IProduct } from "../models/ProductModel";

export interface IProductState {
	items: IProduct[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: Error | null | string;
}
