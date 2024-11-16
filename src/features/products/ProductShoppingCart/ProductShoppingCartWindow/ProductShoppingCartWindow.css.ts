import { style } from "@vanilla-extract/css";

// Стили для модального окна
export const modalStyles = style({
	position: "fixed",
	top: "0",
	left: "0",
	right: "0",
	bottom: "0",
	backgroundColor: "rgba(0, 0, 0, 0.5)",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	zIndex: "9999",
});

// Контейнер для содержимого модалки
export const modalContentContainerStyles = style({
	backgroundColor: "#fff",
	borderRadius: "8px",
	padding: "20px",
	width: "300px",
	maxHeight: "80vh",
	overflowY: "auto",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
});

// Кнопка закрытия модалки
export const closeButtonStyles = style({
	background: "none", // без фона
	border: "none", // без рамки
	padding: "10px",
	cursor: "pointer", // указатель при наведении
	position: "relative",
	bottom: "15px",
	left: "-15px",
	width: "30px",
	height: "30px",
	transition: "transform 0.2s ease",
});

// Стили для svg внутри кнопки
export const closeButtonSvgStyles = style({
	fill: "#333", // красный цвет для иконки
	width: "30px",
	height: "30px",
});

export const closeButtonSvgHoverStyles = style({
	selectors: {
		"&:hover": {
			fill: "#ff5722",
			transform: "scale(1.1)", // Цвет фона при наведении
		},
	},
});

// Стили для карточки товара в корзине
export const productCardStyles = style({
	display: "flex",
	flexDirection: "column",
	gap: "20px",
});

// Стили для списка товаров
export const productItemStyles = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-around",
	padding: "10px 0",
	borderBottom: "1px solid #ddd",
	flexDirection: "row",
	gap: "5px",
});

// Стили для изображения товара
export const productImageStyles = style({
	width: "50px",
	height: "50px",
	objectFit: "cover",
	borderRadius: "5px",
});

// Стили для информации о товаре (название и цена)
export const productDetailsStyles = style({
	display: "flex",
	flexDirection: "column",
	gap: "5px",
	flex: "1",
	color: "#ff5722",
	fontSize: "10px",
});

// Стили для контейнера с количеством товара
export const quantityContainerStyles = style({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	color: "#ff5722",
});

// Кнопки увеличения и уменьшения количества
export const quantityButtonStyles = style({
	padding: "5px 10px",
	backgroundColor: "#f1f1f1",
	border: "1px solid #ddd",
	color: "#ff5722",
	fontSize: "18px",
	fontWeight: "bold",
	borderRadius: "4px",
	cursor: "pointer",
	":hover": {
		backgroundColor: "#ddd",
	},
});

// Стили для отображения количества
export const quantityDisplayStyles = style({
	fontSize: "16px",
	fontWeight: "bold",
	color: "#ff5722",
});

// Стили для пустой корзины
export const emptyCartMessageStyles = style({
	fontSize: "16px",
	fontStyle: "italic",
	color: "#ff5722",
	textAlign: "center",
	listStyleType: "none",
});

// Стили для кнопки перехода к оформлению
export const checkoutButtonStyles = style({
	marginTop: "20px",
	padding: "12px",
	backgroundColor: "#646cff",
	color: "#fff",
	border: "none",
	borderRadius: "4px",
	cursor: "pointer",
	fontSize: "16px",
	":hover": {
		backgroundColor: "#4048e2",
	},
});

export const deleteButtonStyles = style({
	background: "none",
	border: "none",
	padding: "0",
	cursor: "pointer",
	position: "relative",
	top: "3px",
	right: "0",
	transition: "transform 0.2s ease",
});

// Создаем отдельный стиль для :hover
export const deleteButtonHoverStyles = style({
	selectors: {
		"&:hover": {
			transform: "rotate(360deg)", // Цвет фона при наведении
		},
	},
});

// Стиль для SVG
export const deleteButtonSvgStyles = style({
	fill: "#ff5722", // Красный цвет для иконки удаления
	width: "20px",
	height: "20px",
});
