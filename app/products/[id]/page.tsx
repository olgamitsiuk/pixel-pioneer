import { mockProducts } from "../mockProducts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails";

// Generate metadata for the page
export async function generateMetadata(
	{ params }: { params: { id: string } }
): Promise<Metadata> {
	const id = Number(params.id); // Convert id to a number
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

// The main page component
export default function Page({ params }: { params: { id: string } }) {
	const id = Number(params.id); // Convert id to a number
	const product = mockProducts.find((p) => p.id === id);

	if (!product || isNaN(id)) {
		return notFound(); // Show 404 page if product is not found
	}

	return <ProductDetails product={product} />;
}
