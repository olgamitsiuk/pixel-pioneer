import Carousel from "./components/carousel/Carousel";
import ProductCarousel from "./components/product/ProductCarousel";
import { mockProducts } from "./products/mockProducts";

// Filtered featured and new products
const featuredProducts = mockProducts.filter((product) => product.feature);
const newProducts = mockProducts.filter((product) => product.is_new);

export default function Home() {
  return (
    <div>
      <Carousel />
      <ProductCarousel title="Featured Products" products={featuredProducts} />
      <ProductCarousel title="New Products" products={newProducts} />
    </div>
  );
}
