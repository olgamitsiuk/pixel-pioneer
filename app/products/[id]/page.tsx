import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchProductById } from "../../api/product";
import ProductDetails from "./ProductDetails";

interface ProductPageProps {
	params: Promise<{ id: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
	const { id } = await params;
	const product = await fetchProductById(id);

	if (!product) {
		return {
			title: "Product Not Found",
		};
	}

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: [product.image],
		},
	};
}

export default async function ProductPage({ params }: ProductPageProps) {
	try {
		const { id } = await params;
		const product = await fetchProductById(id);

		if (!product) {
			return notFound();
		}

		return <ProductDetails product={product} />;
	} catch (error) {
		console.error("Error loading product:", error);
		return notFound();
	}
}