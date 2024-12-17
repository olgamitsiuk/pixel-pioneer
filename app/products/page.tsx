import Link from 'next/link';
import { mockProducts, Product } from './mockProducts';
import ProductCard from '../components/product-card/ProductCard';

interface PageProps {
	searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ProductListPage({ searchParams }: PageProps) {
	const category = searchParams.category as string | undefined;
	const pageTitle = category ? decodeURIComponent(category) : 'All Products';

	let products = mockProducts;
	if (category) {
		products = mockProducts.filter((product: Product) =>
			product.category.toLowerCase() === decodeURIComponent(category).toLowerCase()
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mb-8">
				<div className="text-sm breadcrumbs">
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/products">Products</Link>
						</li>
						{category && (
							<li className="text-primary">
								{decodeURIComponent(category)}
							</li>
						)}
					</ul>
				</div>

				<h1 className="text-3xl font-bold mt-4">{pageTitle}</h1>
			</div>

			{products.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{products.map((product: Product) => (
						<ProductCard
							key={product.id}
							id={product.id}
							title={product.product_name}
							imageSrc={product.image}
							description={product.description}
							price={product.price}
							tag={product.is_new ? 'New' : product.feature ? 'Featured' : ''}
						/>
					))}
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