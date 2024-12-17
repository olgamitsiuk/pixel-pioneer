import { mockProducts } from "../mockProducts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails";

type Props = {
	params: {
		id: string;
	};
	searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
	params
}: Props): Promise<Metadata> {
	const id = Number(params.id);

	if (isNaN(id)) {
		return {
			title: 'Product Not Found',
		};
	}

	const product = mockProducts.find(p => p.id === id);

	if (!product) {
		return {
			title: 'Product Not Found',
		};
	}

	return {
		title: product.product_name,
	};
}

export default function Page(props: Props) {
	const id = Number(props.params.id);

	if (isNaN(id)) {
		return notFound();
	}

	const product = mockProducts.find(p => p.id === id);

	if (!product) {
		return notFound();
	}

	return <ProductDetails product={product} />;
}
