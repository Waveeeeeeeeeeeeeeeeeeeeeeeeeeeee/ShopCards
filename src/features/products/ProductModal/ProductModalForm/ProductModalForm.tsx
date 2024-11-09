import { ProductModalFormStyles } from "./ProductModalFormStyles.css";
import { ProductModalFormInputDescriptionStyles } from "./ProductModalFormlnputDescription/ProductModalFormInputDescription.css";
import { ProductModalFormInputImageStyles } from "./ProductModalFormlnputImage/ProductModalFormInputImageStyles.css";
import { ProductModalFormInputTitleStyles } from "./ProductModalFormlnputTitle/ProductModalFormInputTitleStyles.css";
import { ProductModalFormInputPriceStyles } from "./ProductModalFormlnputPrice/ProductModalFormInputPriceStyles.css";
import { ProductModalFormButtonStyles } from "./ProductModalFormButton/ProductModalFormButtonStyles.css";
import { ProductModalFormInputTitle } from "./ProductModalFormlnputTitle/ProductModalFormInputTitle";
import { ProductModalFormInputDescription } from "./ProductModalFormlnputDescription/ProductModalFormInputDescription";
import { ProductModalFormInputPrice } from "./ProductModalFormlnputPrice/ProductModalFormInputPrice";
import { ProductModalFormInputImage } from "./ProductModalFormlnputImage/ProductModalFormInputImage";
import { ProductModalFormButton } from "./ProductModalFormButton/ProductModalFormButton";
import { useContext } from "react";
import { FormContext } from "../../../../contexts/FormContext";
import { addProduct } from "../../../../slices/productsSlice";
import { closeModal } from "../../../../slices/productsModalSlice";
import { useDispatch } from "react-redux";

const ProductModalForm = () => {
	const dispatch = useDispatch();
	const { formData } = useContext(FormContext);
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log(formData);
		dispatch(
			addProduct({
				...formData,
			}),
		);
		dispatch(closeModal());
	}

	return (
		<form className={ProductModalFormStyles} onSubmit={handleSubmit}>
			<ProductModalFormInputTitle
				className={ProductModalFormInputTitleStyles}
			/>
			<ProductModalFormInputDescription
				className={ProductModalFormInputDescriptionStyles}
			/>
			<ProductModalFormInputPrice
				className={ProductModalFormInputPriceStyles}
			/>
			<ProductModalFormInputImage
				className={ProductModalFormInputImageStyles}
			/>
			<ProductModalFormButton className={ProductModalFormButtonStyles} />
		</form>
	);
};

export default ProductModalForm;
