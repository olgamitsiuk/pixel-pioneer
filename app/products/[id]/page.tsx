import { Metadata } from "next";
import { notFound } from "next/navigation";
import { mockProducts } from "../mockProducts";
import ProductDetails from "./ProductDetails";

type Params = {
	id: string;
};

type Props = {
	params: Params;  // Remove Promise wrapper here
};

export async function generateMetadata({
	params,
}: Props): Promise<Metadata> {
	const id = Number(params.id);
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

export default async function Page({ params }: Props) {
	const id = Number(params.id);
	const product = mockProducts.find((p) => p.id === id);

	if (!product || isNaN(id)) {
		return notFound();
	}

	return <ProductDetails product={product} />;
}