import { useState } from "react";
import { OnChangeEventType } from "../../../../../types/events.types/change.event.type";
import { InputVariations } from "../../../../../interfaces/Input.interface/InputVariations.interface";
import { Text } from "../../../../../components/Input/Text/Text";
import { useContext } from "react";
import { FormContext } from "../../../../../contexts/FormContext";

export const ProductModalFormInputDescription = ({
	className,
}: {
	className: string;
}) => {
	const { formData, setFormData } = useContext(FormContext);
	const [description, setDescription] = useState("");
	const [descriptionError, setDescriptionError] = useState(" ");
	const handleChange: OnChangeEventType = (e) => {
		const { value } = e.target;

		if (
			value === "" ||
			(/^[a-zA-Zа-яА-ЯёЁ\s]+$/u.test(value) && value.length <= 300)
		) {
			setDescription(value);
		}

		const isText = /^[a-zA-Zа-яА-ЯёЁ\s]+$/u.test(value);
		if (!isText) {
			setDescriptionError("Допустимы только текстовые символы");
			return;
		} else if (value.length > 300) {
			setDescriptionError("Описание не должно превышать 300 символов");
			return;
		} else {
			setDescriptionError("");
		}

		setDescription(value);
		setFormData({ ...formData, description: value });
	};
	return (
		<>
			<Text
				name="description"
				type={InputVariations.Text}
				placeholder="Введите описание продукта"
				required={true}
				className={className}
				value={description}
				onChange={handleChange}
			/>

			{descriptionError && (
				<p style={{ color: "red" }}>{descriptionError}</p>
			)}
		</>
	);
};
