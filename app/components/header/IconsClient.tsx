'use client';

import { Product } from '@/app/api/product';
import MobileMenu from './MobileMenu';
import Search from './Search';
import UserIcon from './UserIcon';
import BasketIcon from './BasketIcon';

interface IconsClientProps {
	products: Product[];
}

const IconsClient = ({ products }: IconsClientProps) => {
	return (
		<div className="flex-none">
			{/* Search input - Desktop */}
			<div className="hidden sm:block">
				<div className="w-60">
					<Search products={products} />
				</div>
			</div>

			<div className="flex items-center gap-2">
				{/* Basket Icon Component */}
				<BasketIcon />

				{/* User Icon Component */}
				<UserIcon />

				{/* Mobile Menu */}
				<div className="lg:hidden">
					<label
						htmlFor="mobile-menu-drawer"
						className="btn btn-ghost btn-circle btn-sm sm:btn-md drawer-button"
					>
						<svg
							className="w-4 h-4 sm:w-5 sm:h-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</label>
				</div>
				<MobileMenu />
			</div>

			{/* Search input - Mobile */}
			<div className="sm:hidden absolute top-16 left-0 right-0 bg-base-100 border-b border-base-200 py-2 px-4">
				<Search products={products} />
			</div>
		</div>
	);
};

export default IconsClient;