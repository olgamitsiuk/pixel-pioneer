import { Metadata } from "next";
import { notFound } from "next/navigation";
import { mockProducts, Product } from "../mockProducts";
import ProductDetails from "./ProductDetails";

type Params = {
	slug: string;
};

type Props = {
	params: Params;
};

function generateSlug(productName: string): string {
	return productName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function findProductBySlug(slug: string): Product | undefined {
	return mockProducts.find(product =>
		generateSlug(product.product_name) === slug
	);
}

export async function generateMetadata({
	params,
}: Props): Promise<Metadata> {
	const product = findProductBySlug(params.slug);

	if (!product) {
		return {
			title: "Product Not Found",
		};
	}

	return {
		title: product.product_name,
	};
}

export default async function Page({ params }: Props) {
	const product = findProductBySlug(params.slug);

	if (!product) {
		return notFound();
	}

	return <ProductDetails product={product} />;
}