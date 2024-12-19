'use client';

import Image from "next/image";
import Link from "next/link";
import { useBasket } from "../../context/BasketContext";
import { Product } from "../../api/product";

interface ProductDetailsProps {
	product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
	const { addBasketItem } = useBasket();

	const handleAddToBasket = () => {
		addBasketItem(product);
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="text-sm breadcrumbs mb-8">
				<ul>
					<li><Link href="/">Home</Link></li>
					<li><Link href="/products">Products</Link></li>
					<li><Link href={`/products?category=${product.category}`}>{product.category}</Link></li>
					<li>{product.name}</li>
				</ul>
			</div>

			<div className="flex flex-col lg:flex-row gap-8">
				<div className="lg:w-1/2">
					<div className="relative aspect-square w-full rounded-xl overflow-hidden">
						<Image
							src={product.image}
							alt={product.name}
							fill
							className="object-cover"
							priority
						/>
					</div>
				</div>

				<div className="lg:w-1/2">
					<div className="flex flex-col gap-4">
						<div>
							<h1 className="text-3xl font-bold mb-2">{product.name}</h1>
							<div className="flex items-center gap-2">
								<div className="rating">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
								</div>
								<span className="text-sm opacity-70">(4.8)</span>
							</div>
						</div>

						<div className="text-2xl font-bold">
							${product.price.toFixed(2)}
						</div>

						<div className="flex items-center gap-2">
							<div className={`badge ${product.stock > 0 ? 'badge-success' : 'badge-error'}`}>
								{product.stock > 0 ? 'In Stock' : 'Out of Stock'}
							</div>
							{product.stock > 0 && (
								<span className="text-sm opacity-70">
									{product.stock} units available
								</span>
							)}
						</div>

						<div className="divider"></div>

						<div className="flex flex-col gap-2">
							<h3 className="text-lg font-semibold">Technical Details</h3>
							<table className="table">
								<tbody>
									<tr>
										<td className="font-semibold">Category</td>
										<td>{product.category}</td>
									</tr>
									<tr>
										<td className="font-semibold">Status</td>
										<td>{product.is_new ? 'New' : 'Regular'}</td>
									</tr>
									<tr>
										<td className="font-semibold">Featured</td>
										<td>{product.feature ? 'Yes' : 'No'}</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className="divider"></div>

						<div>
							<h3 className="text-lg font-semibold mb-2">Description</h3>
							<p className="opacity-70">{product.description}</p>
						</div>

						<div className="mt-4">
							<button
								className="btn btn-primary w-full"
								disabled={product.stock === 0}
								onClick={handleAddToBasket}
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}