import { Metadata } from "next";
import { notFound } from "next/navigation";
import { mockProducts } from "../mockProducts";
import ProductDetails from "./ProductDetails";

// 1. generateMetadata Function
export async function generateMetadata({
	params,
}: {
	params: { id: string };
}): Promise<Metadata> {
	const id = Number((await params).id);
	const product = mockProducts.find((p) => p.id === id);

	if (!product || isNaN(id)) {
		return {
			title: "Product Not Found",
		};
	}

	return {
		title: product.product_name,
	};
}

// 2. Page Component
export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const id = Number((await params).id);
	const product = mockProducts.find((p) => p.id === id);

	if (!product || isNaN(id)) {
		return notFound();
	}

	return <ProductDetails product={product} />;
}
