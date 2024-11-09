import { modalContentStyles, modalOverlayStyles } from "./ProductModal.css";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../../slices/productsModalSlice";
import ProductModalForm from "./ProductModalForm/ProductModalForm";

export function ProductModal() {
	const dispatch = useDispatch();
	const domNode = document.getElementById("overlays");

	const isOpen = useSelector((state: unknown) => state.productsModal.isOpen);

	return (
		<>
			{createPortal(
				isOpen && (
					<div
						className={modalOverlayStyles}
						onClick={() => dispatch(closeModal())}
					>
						<div
							className={modalContentStyles}
							onClick={(e) => e.stopPropagation()}
						>
							<p
								onClick={() => dispatch(closeModal())}
								style={{
									background: "none",
									border: "none",
									cursor: "pointer",
									width: "24px",
									height: "24px",
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#000"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="feather feather-x"
								>
									<line x1="18" y1="6" x2="6" y2="18"></line>
									<line x1="6" y1="6" x2="18" y2="18"></line>
								</svg>
							</p>
							<ProductModalForm />
						</div>
					</div>
				),
				domNode as HTMLElement,
			)}
		</>
	);
}
