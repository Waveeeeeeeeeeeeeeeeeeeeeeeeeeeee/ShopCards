import { File } from "../../../../../components/Input/File/File";
import { InputVariations } from "../../../../../interfaces/Input.interface/IInputVariations.interface";
import { useContext } from "react";
import { FormContext } from "../../../../../contexts/FormContext";
import { toBase64 } from "../../../../../helpers/toBase64";
import { OnChangeEventType } from "../../../../../types/events.types/change.event.type";
import { ProductModalFormInputImageContainerStyles } from "./ProductModalFormInputImageStyles.css";

export const ProductModalFormInputImage = ({
	className,
}: {
	className: string;
}) => {
	const { formData, setFormData } = useContext(FormContext);

	const handleChange: OnChangeEventType = async (e) => {
		const file = e.target.files?.[0];
		if (file) {
			try {
				const base64Image = (await toBase64(file)) as string;

				setFormData({ ...formData, image: base64Image });
			} catch (error) {
				console.error("Error converting file to Base64:", error);
			}
		}
	};
	return (
		<div className={ProductModalFormInputImageContainerStyles}>
			<p>Пожалуйста вставьте изображение товара</p>
			<File
				name="file"
				type={InputVariations.File}
				placeholder="Вставьте изображение продукта"
				required={true}
				className={className}
				onChange={handleChange}
			/>
		</div>
	);
};
