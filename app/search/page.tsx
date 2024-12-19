import Link from 'next/link';
import ProductCard from "@/app/components/product/ProductCard";
import { fetchProducts } from '@/app/api/product';

interface SearchPageProps {
	searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {

	const resolvedParams = await searchParams;
	const query = resolvedParams.q || '';

	const products = await fetchProducts();

	const searchResults = products.filter(product =>
		product.name.toLowerCase().includes(query.toLowerCase()) ||
		product.description.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mb-8">
				<div className="text-sm breadcrumbs">
					<ul>
						<li><Link href="/">Home</Link></li>
						<li>Search Results</li>
					</ul>
				</div>
				<h1 className="text-3xl font-bold mt-4">
					Search Results for &quot;{query}&quot;
				</h1>
				<p className="text-gray-600 mt-2">
					Found {searchResults.length} results
				</p>
			</div>

			{searchResults.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{searchResults.map((product) => (
						<ProductCard
							key={product._id}
							id={product._id}
							title={product.name}
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
						<span>No products found matching your search.</span>
					</div>
				</div>
			)}
		</div>
	);
}