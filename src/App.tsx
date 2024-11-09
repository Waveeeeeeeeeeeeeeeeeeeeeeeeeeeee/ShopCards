import ProductList from "./features/products/ProductList/ProductList";
import { ProductModal } from "./features/products/ProductModal/ProductModal";
import { Header } from "./pages/Header/Header";
import { FormProvider } from "./providers/FormProvider";

const App = () => {
	return (
		<>
			<FormProvider>
				<ProductModal />
			</FormProvider>
			<Header />
			<ProductList />
		</>
	);
};

export default App;
