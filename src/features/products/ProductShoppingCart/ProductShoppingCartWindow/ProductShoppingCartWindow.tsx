import {
	modalStyles,
	modalContentContainerStyles,
	closeButtonStyles,
	productCardStyles,
	checkoutButtonStyles,
	productItemStyles,
	productImageStyles,
	productDetailsStyles,
	quantityContainerStyles,
	quantityButtonStyles,
	quantityDisplayStyles,
	emptyCartMessageStyles,
	deleteButtonStyles,
	deleteButtonHoverStyles,
	deleteButtonSvgStyles,
	closeButtonSvgStyles,
	closeButtonSvgHoverStyles,
} from "./ProductShoppingCartWindow.css";
import { OnClickEventType } from "../../../../types/events.types/click.event.type";
import { useDispatch, useSelector } from "react-redux";
import { selectMemoizedProductsFromCartState } from "../../../../selectors/selectProductsFromCart";
import { IProductCartItem } from "../../../../interfaces/Product.interface/ProductShopingCart.interface/ProductShopingCartItem.interface";
import {
	decreaseCount,
	increaseCount,
	deleteProductFromCart,
} from "../../../../slices/productsShopingCart";

export const ProductShoppingCartWindow = ({
	onClick,
}: {
	onClick: OnClickEventType;
}) => {
	const dispatch = useDispatch();
	const { items, totalCount, totalPrice } = useSelector(
		selectMemoizedProductsFromCartState,
	);

	const handleIncreaseCount = (product: IProductCartItem) => {
		dispatch(increaseCount(product));
	};

	const handleDecreaseCount = (product: IProductCartItem) => {
		dispatch(decreaseCount(product));
	};

	const handleRemoveProduct = (product: IProductCartItem) => {
		dispatch(deleteProductFromCart(product)); // вызов экшена удаления товара из корзины
	};

	return (
		<div className={modalStyles}>
			<div className={modalContentContainerStyles}>
				<button className={closeButtonStyles} onClick={onClick}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="red"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className={`${closeButtonSvgStyles} ${closeButtonSvgHoverStyles}`}
					>
						<circle cx="12" cy="12" r="10" />
						<line x1="15" y1="9" x2="9" y2="15" />
						<line x1="9" y1="9" x2="15" y2="15" />
					</svg>
				</button>

				<div className={productCardStyles}>
					<ul style={{ padding: "0" }}>
						{items.length > 0 ? (
							items.map((product: IProductCartItem) => (
								<li
									key={product.id}
									className={productItemStyles}
								>
									<img
										src={product.image}
										alt={product.name}
										className={productImageStyles}
									/>
									<div className={productDetailsStyles}>
										<p>{product.name}</p>
										<span
											style={{
												fontWeight: "bold",
												fontSize: "12px",
											}}
										>
											{product.price} $
										</span>
									</div>
									<div className={quantityContainerStyles}>
										<button
											className={quantityButtonStyles}
											onClick={() =>
												handleDecreaseCount(product)
											}
										>
											-
										</button>
										<span className={quantityDisplayStyles}>
											{product.count}
										</span>
										<button
											className={quantityButtonStyles}
											onClick={() =>
												handleIncreaseCount(product)
											}
										>
											+
										</button>
									</div>

									{/* Кнопка удаления товара из корзины */}
									<button
										className={`${deleteButtonStyles} ${deleteButtonHoverStyles}`}
										onClick={() =>
											handleRemoveProduct(product)
										}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className={deleteButtonSvgStyles}
											viewBox="0 0 16 16"
										>
											<path d="M4.646 4.646a1 1 0 0 1 1.414 0L8 6.586l2.94-2.94a1 1 0 1 1 1.415 1.415L9.414 8l2.94 2.94a1 1 0 0 1-1.415 1.415L8 9.414l-2.94 2.94a1 1 0 0 1-1.415-1.415L6.586 8 3.646 5.06a1 1 0 1 1 1.415-1.415L8 6.586 5.06 3.646a1 1 0 0 1 0-1.415z" />
										</svg>
									</button>
								</li>
							))
						) : (
							<li className={emptyCartMessageStyles}>
								Корзина пуста
							</li>
						)}
					</ul>

					<div
						style={{
							color: "#ff5722",
							fontSize: "16px",
							fontWeight: "bold",
						}}
					>
						{totalCount > 0
							? `${totalCount} товаров на сумму ${totalPrice.toFixed(
									2,
							  )} $`
							: "Чтобы перейти к орформлению, добавьте товары в корзину"}
					</div>
				</div>

				<button className={checkoutButtonStyles}>
					Перейти к оформлению
				</button>
			</div>
		</div>
	);
};
