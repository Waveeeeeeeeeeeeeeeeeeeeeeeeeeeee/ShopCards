import { useState } from "react";
import { FormContext } from "../contexts/FormContext";
import { IProduct } from "../models/ProductModel";

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
	const [formData, setFormData] = useState<IProduct>({
		id: Date.now().toString(),
		title: "",
		price: 0,
		description: "",
		image: "",
	});
	return (
		<FormContext.Provider value={{ formData, setFormData }}>
			{children}
		</FormContext.Provider>
	);
};
