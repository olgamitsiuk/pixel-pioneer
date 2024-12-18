import Link from 'next/link';
import ProductCard from "../components/product/ProductCard";
import { fetchProducts, Product } from '../api/product';

interface PageProps {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProductListPage({ searchParams }: PageProps) {
	const resolvedParams = await searchParams;
	const category = resolvedParams.category as string | undefined;
	const pageTitle = category ? decodeURIComponent(category) : 'All Products';

	const products = await fetchProducts();
	let filteredProducts = products;

	if (category) {
		filteredProducts = products.filter((product) =>
			product.category.toLowerCase() === decodeURIComponent(category).toLowerCase()
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mb-8">
				<div className="text-sm breadcrumbs">
					<ul>
						<li><Link href="/">Home</Link></li>
						<li><Link href="/products">Products</Link></li>
						{category && (
							<li className="text-primary">{decodeURIComponent(category)}</li>
						)}
					</ul>
				</div>
				<h1 className="text-3xl font-bold mt-4">{pageTitle}</h1>
			</div>

			{filteredProducts.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{filteredProducts.map((product) => {
						if (!product._id) {
							console.error('Product without ID:', product);
							return null;
						}
						return (
							<ProductCard
								key={product._id}
								id={product._id}
								title={product.name}
								imageSrc={product.image}
								description={product.description}
								price={product.price}
								tag={product.is_new ? 'New' : product.feature ? 'Featured' : ''}
							/>
						);
					})}
				</div>
			) : (
				<div className="alert alert-info">
					<div>
						<span>No products found in this category.</span>
					</div>
				</div>
			)}
		</div>
	);
}
