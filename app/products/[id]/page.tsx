import { Metadata } from "next";
import { notFound } from "next/navigation";
import { mockProducts } from "../mockProducts";
import ProductDetails from "./ProductDetails";

type Params = {
	id: string;
};

type Props = {
	params: Promise<Params>;
};

export async function generateMetadata({
	params,
}: {
	params: Promise<Params>;
}): Promise<Metadata> {

	const { id } = await params;
	const numId = Number(id);
	const product = mockProducts.find((p) => p.id === numId);

	if (!product || isNaN(numId)) {
		return {
			title: "Product Not Found",
		};
	}

	return {
		title: product.product_name,
	};
}

export default async function Page({ params }: Props) {

	const { id } = await params;
	const numId = Number(id);
	const product = mockProducts.find((p) => p.id === numId);

	if (!product || isNaN(numId)) {
		return notFound();
	}

	return <ProductDetails product={product} />;
}