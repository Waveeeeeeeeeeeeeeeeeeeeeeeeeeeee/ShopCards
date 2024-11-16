import { Number } from "../../../../../components/Input/Number/Number";
import { InputVariations } from "../../../../../interfaces/Input.interface/InputVariations.interface";
import { useState, useContext } from "react";
import { OnChangeEventType } from "../../../../../types/events.types/change.event.type";
import { FormContext } from "../../../../../contexts/FormContext";

export const ProductModalFormInputPrice = ({
	className,
}: {
	className: string;
}) => {
	const { formData, setFormData } = useContext(FormContext);
	const [price, setPrice] = useState("");
	const [error, setError] = useState("");

	const handleChange: OnChangeEventType = (e) => {
		const { value } = e.target;

		// Проверка на нечисловой ввод
		if (!/^\d*$/.test(value)) {
			setError("Введите только числовое значение.");
			return;
		} else {
			setError("");
		}

		// Преобразуем строку в число
		const parsedValue = parseInt(value, 10);

		// Проверка: значение должно быть числом, не меньше 1 и не больше 100000
		if (parsedValue >= 1 && parsedValue <= 100000) {
			setPrice(parsedValue.toString());
			setFormData({ ...formData, price: parsedValue });
		} else if (value === "") {
			// Разрешаем очистку поля
			setPrice("");
			setFormData({ ...formData, price: 0 });
		} else {
			// Устанавливаем ошибку при некорректном значении
			setError("Цена должна быть от 1 до 100000.");
		}
	};

	return (
		<>
			<Number
				name="price"
				type={InputVariations.Number}
				placeholder="Введите цену продукта"
				required={true}
				value={price}
				onChange={handleChange}
				className={className}
			/>
			{error && <p style={{ color: "red" }}>{error}</p>}
		</>
	);
};
