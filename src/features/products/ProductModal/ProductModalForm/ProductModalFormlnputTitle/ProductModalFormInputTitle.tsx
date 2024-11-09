import { useState } from "react";
import { OnChangeEventType } from "../../../../../types/events.types/change.event.type";
import { InputVariations } from "../../../../../interfaces/Input.interface/IInputVariations.interface";
import { Text } from "../../../../../components/Input/Text/Text";
import { useContext } from "react";
import { FormContext } from "../../../../../contexts/FormContext";

export const ProductModalFormInputTitle = ({
	className,
}: {
	className: string;
}) => {
	const { formData, setFormData } = useContext(FormContext);
	const [title, setTitle] = useState("");
	const [titleError, setTitleError] = useState("");

	const handleChange: OnChangeEventType = (e) => {
		const { value } = e.target;

		if (
			value === "" ||
			(/^[a-zA-Zа-яА-ЯёЁ\s]+$/u.test(value) && value.length <= 100)
		) {
			setTitle(value);
		}

		const isText = /^[a-zA-Zа-яА-ЯёЁ\s]+$/u.test(value);
		if (!isText) {
			setTitleError("Допустимы только текстовые символы");
			return;
		} else if (value.length > 300) {
			setTitleError("Заголовок не должен превышать 100 символов");
			return;
		} else {
			setTitleError("");
		}

		setTitle(e.target.value);
		setFormData({ ...formData, title: value });
	};
	return (
		<>
			<Text
				name="title"
				type={InputVariations.Text}
				placeholder="Введите название продукта"
				required={true}
				className={className}
				onChange={handleChange}
				value={title}
			/>
			{titleError && <p style={{ color: "red" }}>{titleError}</p>}
		</>
	);
};
