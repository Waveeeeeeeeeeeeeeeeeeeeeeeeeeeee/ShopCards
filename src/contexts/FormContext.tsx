import { createContext, Dispatch, SetStateAction } from "react";
import { IProduct } from "../models/ProductModel";

export const FormContext = createContext<{
	formData: IProduct;
	setFormData: Dispatch<SetStateAction<IProduct>>;
}>({
	formData: {
		id: Date.now(),
		title: "",
		price: 0,
		description: "",
		image: "",
	},
	setFormData: () => {}, // Пустая функция-заглушка
});
