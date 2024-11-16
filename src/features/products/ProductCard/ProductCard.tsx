import {
	productCardStyles,
	formContainerStyles,
	inputStyles,
	fileInputStyles,
	buttonStyles,
} from "./ProductCard.css";
import {
	productCardImageContainerStyles,
	productCardImageStyles,
} from "./ProductCardImage/ProductCardImage.css";
import { productCardPriceStyles } from "./ProductCardPrice/ProductCardPrice.css";
import { productCardTitleStyles } from "./ProductCardTitle/ProductCardTitle.css";

import { ProductCardDescription } from "./ProductCardDescription/ProductCardDescription";
import { ProductCardImage } from "./ProductCardImage/ProductCardImage";
import { ProductCardPrice } from "./ProductCardPrice/ProductCardPrice";
import { ProductCardCartButton } from "./ProductCardCartButton/ProductCardCartButton";
import { ProductCardTitle } from "./ProductCardTitle/ProductCardTitle";
import { IProductIsEditable } from "../../../models/ProductIsEditableModel";
import { useReducer, useState, ChangeEvent } from "react";
import { ProductCardEditable } from "./ProductCardEditable/ProductCardEditable";
import { Text } from "../../../components/Input/Text/Text";
import { File } from "../../../components/Input/File/File";
import { Number as NumberInput } from "../../../components/Input/Number/Number";
import { InputVariations } from "../../../interfaces/Input.interface/InputVariations.interface";
import { updateProduct } from "../../../slices/productsSlice";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../slices/productsShopingCart";
import { OnClickEventType } from "../../../types/events.types/click.event.type";

export const ProductCard = ({
	title,
	price,
	description,
	id,
	image,
	isEditable,
}: IProductIsEditable) => {
	const [isEditableState] = useState(isEditable ?? false);
	const [isEdit, setIsEdit] = useState(false);

	const dispatch = useDispatch();

	const initialState = {
		title: title,
		price: price,
		description: description,
		image: image,
	};

	const [state, localDispatch] = useReducer(
		productInputReducer,
		initialState,
	);

	type ProductState = {
		title: string;
		price: number | string;
		description: string;
		image: string | undefined;
	};

	type ProductAction = {
		type: string;
		payload: string;
	};
	function productInputReducer(
		state: ProductState,
		action: ProductAction,
	): ProductState {
		switch (action.type) {
			case "title":
				return { ...state, title: action.payload };
			case "price":
				return { ...state, price: action.payload };
			case "description":
				return { ...state, description: action.payload };
			case "image":
				return { ...state, image: action.payload };
			default:
				return state;
		}
	}

	const handleInputChange = function (
		e: ChangeEvent<HTMLInputElement>,
		type: string,
	) {
		const value = e.target.value;
		let errorMessage = "";

		// Выполняем валидацию для каждого типа инпута
		switch (type) {
			case "title":
				// Валидация для текстового поля
				if (value === "") {
					errorMessage = "Поле не может быть пустым";
				} else if (!/^[a-zA-Zа-яА-ЯёЁ\s]+$/u.test(value)) {
					errorMessage = "Допустимы только текстовые символы";
				} else if (value.length > 100) {
					errorMessage = "Заголовок не должен превышать 100 символов";
				}
				break;

			case "price":
				// Валидация для числового поля
				if (value === "") {
					errorMessage = "Цена не может быть пустой";
				} else if (!/^\d+(\.\d{1,2})?$/.test(value)) {
					errorMessage =
						"Допустимы только положительные числа (с до 2 знаками после запятой)";
				}
				break;

			case "description":
				// Валидация для текстового поля (например, описание)
				if (value === "") {
					errorMessage = "Описание не может быть пустым";
				} else if (value.length > 300) {
					errorMessage = "Описание не должно превышать 300 символов";
				}
				break;

			case "file": {
				// Валидация для загрузки файла
				const file = e.target.files ? e.target.files[0] : null;
				if (file) {
					const fileTypes = ["image/png", "image/jpeg", "image/jpg"];
					if (!fileTypes.includes(file.type)) {
						errorMessage =
							"Допустимы только изображения (PNG, JPEG)";
					}
				}
				break;
			}

			default:
				break;
		}

		// Если ошибка есть, то устанавливаем ошибку
		if (errorMessage) {
			localDispatch({ type: `${type}Error`, payload: errorMessage });
		} else {
			// Если ошибки нет, то передаем значение в dispatch
			localDispatch({ type, payload: value });
		}
	};

	const addGoodsToCart: OnClickEventType = function (e) {
		e.preventDefault();
		dispatch(addProductToCart({ id, name: title, price, image, count: 1 }));
	};

	const toEdit: OnClickEventType = function (e) {
		e.preventDefault();
		setIsEdit(!isEdit);
		if (isEdit) {
			const updatedProduct = {
				id,
				title: state.title,
				price:
					typeof state.price === "string"
						? Number(state.price)
						: state.price,
				description: state.description,
				image: state.image,
				isEditable: true,
			};

			dispatch(updateProduct(updatedProduct));
		}
	};

	return (
		<li key={id} className={productCardStyles}>
			{isEdit ? (
				<form className={formContainerStyles}>
					<Text
						type={InputVariations.Text}
						value={state.title}
						onChange={(e) => handleInputChange(e, "title")}
						className={inputStyles}
					/>
					<File
						type={InputVariations.File}
						onChange={(e) => handleInputChange(e, "image")}
						className={fileInputStyles}
					/>
					<NumberInput
						type={InputVariations.Number}
						value={state.price}
						onChange={(e) => handleInputChange(e, "price")}
						className={inputStyles}
					/>
					<Text
						type={InputVariations.Text}
						value={state.description}
						onChange={(e) => handleInputChange(e, "description")}
						className={inputStyles}
					/>
				</form>
			) : (
				<>
					<ProductCardTitle
						title={title}
						className={productCardTitleStyles}
					/>
					<ProductCardImage
						image={image}
						classNameContainer={productCardImageContainerStyles}
						classNameImage={productCardImageStyles}
					/>
					<ProductCardPrice
						className={productCardPriceStyles}
						price={price + "$"}
					/>
					<ProductCardDescription>
						{description}
					</ProductCardDescription>
					<ProductCardCartButton
						className={buttonStyles}
						onClick={addGoodsToCart}
					/>
				</>
			)}

			{isEditableState && (
				<ProductCardEditable
					className={buttonStyles}
					onClick={toEdit}
					content={isEdit ? "Сохранить" : "Редактировать"}
				/>
			)}
		</li>
	);
};
