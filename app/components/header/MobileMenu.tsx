import Link from 'next/link';
import Image from 'next/image';

const categories = [
	{ title: 'Cameras' },
	{ title: 'Lenses' },
	{ title: 'Lighting' },
	{ title: 'Tripods & Supports' },
	{ title: 'Accessories' },
	{ title: 'Studio Equipment' }
];

const MobileMenu = () => {
	return (
		<div className="drawer drawer-end">
			<input id="mobile-menu-drawer" type="checkbox" className="drawer-toggle" />

			{/* Drawer Sidebar */}
			<div className="drawer-side z-50">
				<label htmlFor="mobile-menu-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
				<div className="menu min-h-full w-80 bg-base-100 text-base-content">
					{/* Drawer Header */}
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

					{/* Menu Content */}
					<div className="px-4 py-2">
						<ul className="menu menu-lg p-0">
							<li>
								<Link href="/" className="text-base hover:text-blue-500">
									Home
								</Link>
							</li>

							{/* Products Section */}
							<li className="menu-title text-sm mt-4">
								<span>Products</span>
							</li>
							{categories.map((category, index) => (
								<li key={index}>
									<Link
										href={`/products/${category.title.toLowerCase()}`}
										className="flex items-center gap-3 text-base hover:text-blue-500"
									>
										<Image
											src="/camera.svg"
											alt="Category Icon"
											width={16}
											height={16}
											className="text-current"
										/>
										{category.title}
									</Link>
								</li>
							))}

							{/* Other Navigation Links */}
							<li className="mt-4">
								<Link href="/blog" className="text-base hover:text-blue-500">
									Blog
								</Link>
							</li>
							<li>
								<Link href="/contact" className="text-base hover:text-blue-500">
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