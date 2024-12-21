import Carousel from "./components/carousel/Carousel";
import ProductCarousel from "./components/product/ProductCarousel";
import { fetchProducts } from "./api/product";
import BrandCarousel from "./components/BrandCarousel";
import PromoSection from "./components/PromoSection";

export default async function Home() {
	const products = await fetchProducts();

	// Filter featured and new products from the API data
	const featuredProducts = products.filter((product) => product.feature);
	const newProducts = products.filter((product) => product.is_new);

	return (
		<div>
			<Carousel />
			<BrandCarousel />
			{featuredProducts.length > 0 && (
				<ProductCarousel title="Featured Products" products={featuredProducts} />
			)}
			<PromoSection />
			{newProducts.length > 0 && (
				<ProductCarousel title="New Products" products={newProducts} />
			)}
		</div>
	);
}