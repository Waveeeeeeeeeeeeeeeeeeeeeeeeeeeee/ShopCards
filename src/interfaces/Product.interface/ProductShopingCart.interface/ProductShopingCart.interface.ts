import { IProductCartItem } from "./ProductShopingCartItem.interface";
export interface IProductCartList {
	items: IProductCartItem[];

	totalPrice: number;
	totalCount: number;
}
