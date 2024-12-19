import Carousel from "./components/carousel/Carousel";
import ProductCarousel from "./components/product/ProductCarousel";
import { fetchProducts } from "./api/product";

export default async function Home() {
	const products = await fetchProducts();

	// Filter featured and new products from the API data
	const featuredProducts = products.filter((product) => product.feature);
	const newProducts = products.filter((product) => product.is_new);

	return (
		<div>
			<Carousel />
			{featuredProducts.length > 0 && (
				<ProductCarousel title="Featured Products" products={featuredProducts} />
			)}
			{newProducts.length > 0 && (
				<ProductCarousel title="New Products" products={newProducts} />
			)}
		</div>
	);
}