import ProductList from "./features/products/ProductList/ProductList";
import { ProductModal } from "./features/products/ProductModal/ProductModal";
import { ProductShoppingCart } from "./features/products/ProductShoppingCart/ProductShoppingCart";
import { Header } from "./pages/Header/Header";
import { FormProvider } from "./providers/FormProvider";

const App = () => {
	return (
		<>
			<FormProvider>
				<ProductModal />
			</FormProvider>
			<Header />
			<ProductShoppingCart></ProductShoppingCart>
			<ProductList />
		</>
	);
};

export default App;
