import Link from 'next/link';
import Image from 'next/image';

const categories = [
	{ id: 1, title: 'Cameras' },
	{ id: 2, title: 'Lenses' },
	{ id: 3, title: 'Lighting' },
	{ id: 4, title: 'Tripods & Supports' },
	{ id: 5, title: 'Accessories' },
	{ id: 6, title: 'Studio Equipment' }
];

const MobileMenu = () => {
	const handleLinkClick = () => {
		const drawer = document.getElementById('mobile-menu-drawer') as HTMLInputElement;
		if (drawer) {
			drawer.checked = false;
		}
	};

	return (
		<div className="drawer drawer-end">
			<input id="mobile-menu-drawer" type="checkbox" className="drawer-toggle" />

			<div className="drawer-side z-50">
				<label htmlFor="mobile-menu-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
				<div className="menu min-h-full w-80 bg-base-100 text-base-content">
					<div className="sticky top-0 bg-base-100 z-10 p-4 border-b">
						<div className="flex justify-between items-center">
							<h2 className="text-lg font-medium">Menu</h2>
							<label htmlFor="mobile-menu-drawer" className="btn btn-ghost btn-sm p-2">
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</label>
						</div>
					</div>

					<div className="px-4 py-2">
						<ul className="menu menu-lg p-0">
							<li>
								<Link
									href="/"
									onClick={handleLinkClick}
									className="text-base hover:text-blue-500 transition-colors"
								>
									Home
								</Link>
							</li>

							<li className="menu-title text-sm mt-4">
								<span>Products</span>
							</li>
							<li>
								<Link
									href="/products"
									onClick={handleLinkClick}
									className="flex items-center gap-3 text-base hover:text-blue-500 transition-colors"
								>
									<Image
										src="/camera.svg"
										alt="All Products"
										width={16}
										height={16}
										className="text-current"
									/>
									All Products
								</Link>
							</li>
							{categories.map((category) => (
								<li key={category.id}>
									<Link
										href={`/products?category=${encodeURIComponent(category.title)}`}
										onClick={handleLinkClick}
										className="flex items-center gap-3 text-base hover:text-blue-500 transition-colors"
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
								</li>
							))}

							<li className="mt-4">
								<Link
									href="/blog"
									onClick={handleLinkClick}
									className="text-base hover:text-blue-500 transition-colors"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									onClick={handleLinkClick}
									className="text-base hover:text-blue-500 transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileMenu;