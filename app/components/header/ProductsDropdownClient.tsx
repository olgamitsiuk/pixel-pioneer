'use client';

import Link from 'next/link';
import Image from 'next/image';

interface DropdownClientProps {
	categories: Array<{ id: number; title: string }>;
	featuredProducts: Array<{
		id: string;
		image: string;
		title: string;
		category: string;
	}>;
}

export default function DropdownClient({ categories, featuredProducts }: DropdownClientProps) {
	return (
		<div className="dropdown">
			<label tabIndex={0} className="flex items-center text-base">
				Products
				<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
				</svg>
			</label>

			<div tabIndex={0} className="dropdown-content z-[1] shadow-xl bg-base-100 rounded-box absolute left-1/2 -translate-x-1/2 w-[800px] top-[64px]">
				<div className="flex">
					{/* Left sidebar - Categories */}
					<div className="w-64 bg-base-100 p-4 border-r">
						<div className="space-y-2">
							<Link
								href="/products"
								className="flex items-center gap-3 p-2 rounded-lg text-base hover:text-blue-500 hover:underline"
							>
								<Image
									src="/camera.svg"
									alt="All products category icon"
									width={16}
									height={16}
									className="text-current"
								/>
								All Products
							</Link>

							{categories.map((category) => (
								<Link
									key={`category-${category.id}`}
									href={`/products?category=${encodeURIComponent(category.title)}`}
									className="flex items-center gap-3 p-2 rounded-lg text-base hover:text-blue-500 hover:underline"
								>
									<Image
										src="/camera.svg"
										alt={`${category.title} category icon`}
										width={16}
										height={16}
										className="text-current"
									/>
									{category.title}
								</Link>
							))}
						</div>
					</div>

					{/* Right side - Featured Products */}
					<div className="flex-1 p-4">
						<div className="flex items-center justify-between mb-4">
							<div className="flex items-center gap-2">
								<Image
									src="/camera.svg"
									alt="Featured products icon"
									width={16}
									height={16}
									className="text-current"
								/>
								<span className="font-medium">Featured Products</span>
							</div>
							<Link href="/products" className="text-blue-500 text-sm hover:underline">
								View all products
							</Link>
						</div>

						<div className="grid grid-cols-4 gap-4">
							{featuredProducts.map((product, index) => (
								<div key={`featured-product-${product.id || index}`} className="group">
									<Link href={`/products/${product.id}`}>
										<div className="aspect-square bg-base-200 rounded-lg mb-2 overflow-hidden group-hover:opacity-90 transition-opacity">
											<Image
												src={product.image}
												alt={`Featured product: ${product.title}`}
												width={200}
												height={200}
												className="w-full h-full object-cover"
											/>
										</div>
										<p className="text-sm text-center group-hover:text-blue-500 transition-colors">
											{product.title}
										</p>
									</Link>
								</div>
							))}

							{featuredProducts.length === 0 && (
								<div className="col-span-4 text-center text-gray-500">
									No featured products available
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}