import MobileMenu from './MobileMenu';
import Search from './Search';

interface IconsProps {
	cartItemsCount: number;
}

const Icons = ({ cartItemsCount }: IconsProps) => {
	return (
		<div className="flex-none">
			{/* Search input */}
			<div className="absolute sm:static top-16 left-0 right-0 bg-white border-b border-gray-200 sm:border-0 py-3 sm:py-0 px-4 sm:px-0 z-10">
				<Search />
			</div>

			<div className="flex items-center gap-2">
				{/* Cart */}
				<button className="btn btn-ghost btn-circle">
					<div className="indicator">
						<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<circle cx="9" cy="21" r="1" />
							<circle cx="20" cy="21" r="1" />
							<path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
						</svg>
						{cartItemsCount > 0 && (
							<span className="badge badge-sm indicator-item">{cartItemsCount}</span>
						)}
					</div>
				</button>

				{/* User */}
				<button className="btn btn-ghost btn-circle">
					<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
						<circle cx="12" cy="8" r="4" />
						<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
					</svg>
				</button>

				{/* Mobile Menu */}
				<div className="lg:hidden">
					<label htmlFor="mobile-menu-drawer" className="btn btn-ghost btn-circle drawer-button">
						<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</label>
				</div>
				<MobileMenu />
			</div>
		</div>
	);
};

export default Icons;