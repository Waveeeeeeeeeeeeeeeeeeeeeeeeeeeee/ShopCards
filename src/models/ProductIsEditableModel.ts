import { IProduct } from "./ProductModel";

export interface IProductIsEditable extends IProduct {
	isEditable: boolean;
}
