import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchProductById } from "../../api/product";
import ProductDetails from "./ProductDetails";

interface Props {
	params: {
		id: string;
	};
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const product = await fetchProductById(params.id);

	if (!product) {
		return {
			title: "Product Not Found",
		};
	}

	return {
		title: product.name,
	};
}

export default async function Page({ params }: Props) {
	try {
		const product = await fetchProductById(params.id);

		if (!product) {
			return notFound();
		}

		return <ProductDetails product={product} />;
	} catch (error) {
		console.error("Error loading product:", error);
		return notFound();
	}
}