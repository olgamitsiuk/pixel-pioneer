import { mockProducts } from "../mockProducts";
import ProductDetails from "./ProductDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
	params
}: {
	params: { id: string }
}): Promise<Metadata> {
	const product = mockProducts.find(p => p.id === parseInt(params.id));

	if (!product) {
		return {
			title: 'Product Not Found',
		}
	}

	return {
		title: product.product_name,
	}
}

export default async function page({
	params,
}: {
	params: { id: string }
}) {
	const product = mockProducts.find(p => p.id === parseInt(params.id));

	if (!product) {
		return notFound();
	}

	return <ProductDetails product={product} />;
}