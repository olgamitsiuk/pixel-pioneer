import { mockProducts } from "../mockProducts";
import ProductDetails from "./ProductDetails";
import { Metadata } from "next";

interface PageProps {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
	{ params }: PageProps
): Promise<Metadata> {
	const product = mockProducts.find(p => p.id === parseInt(params.id));

	return {
		title: product ? product.product_name : 'Product Not Found',
	}
}

export default function ProductPage({
	params,
	searchParams,
}: PageProps) {
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