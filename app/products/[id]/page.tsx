import { mockProducts } from "../mockProducts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails";

// Define the Props type for Next.js dynamic routes
type Props = {
	params: {
		id: string; // The dynamic route parameter
	};
};

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

// The main component
export default function Page({ params }: Props) {
	const id = Number(params.id); // Convert id to a number
	const product = mockProducts.find((p) => p.id === id);

	if (!product || isNaN(id)) {
		return notFound(); // Show 404 page if product is not found
	}

	return <ProductDetails product={product} />;
}
