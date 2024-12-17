import { mockProducts } from "../mockProducts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetails from "./ProductDetails";

type Props = {
	params: {
		id: string;
		[key: string]: string | string[];
	};
	searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
	params
}: Props): Promise<Metadata> {
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

export default function Page(props: Props) {
	const product = mockProducts.find(p => p.id === parseInt(props.params.id));

	if (!product) {
		return notFound();
	}

	return <ProductDetails product={product} />;
}