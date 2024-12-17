import { mockProducts } from "../mockProducts";
import ProductDetails from "./ProductDetails";

export default async function ProductPage({
	params,
}: {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const product = mockProducts.find(p => p.id === parseInt(params.id));

	if (!product) {
		return (
			<div className="container mx-auto px-4 py-8">
				<div className="alert alert-error">
					<span>Product not found</span>
				</div>
			</div>
		);
	}

	return <ProductDetails product={product} />;
}