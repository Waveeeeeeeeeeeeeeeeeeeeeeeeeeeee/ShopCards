import { createContext, Dispatch, SetStateAction } from "react";
import { IProduct } from "../models/ProductModel";
import { v4 as uuidv4 } from "uuid";

export const FormContext = createContext<{
	formData: IProduct;
	setFormData: Dispatch<SetStateAction<IProduct>>;
}>({
	formData: {
		id: uuidv4(),
		title: "",
		price: 0,
		description: "",
		image: "",
	},
	setFormData: () => {}, // Пустая функция-заглушка
});
