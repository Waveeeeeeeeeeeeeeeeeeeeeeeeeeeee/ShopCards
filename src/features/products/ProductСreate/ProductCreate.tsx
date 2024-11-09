import { useDispatch } from "react-redux";
import { openModal } from "../../../slices/productsModalSlice";
import { productCreateButton } from "./ProductCreate.css";

export function ProductCreate() {
	const dispatch = useDispatch();

	return (
		<button
			className={productCreateButton}
			onClick={() => dispatch(openModal())}
		>
			+
		</button>
	);
}
