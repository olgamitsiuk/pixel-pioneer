import MobileMenu from './MobileMenu';
import Search from './Search';
import UserIcon from './UserIcon';

interface IconsProps {
	cartItemsCount: number;
}

const Icons = ({ cartItemsCount }: IconsProps) => {
	return (
		<div className="flex-none">
			{/* Search input - Desktop */}
			<div className="hidden sm:block">
				<div className="w-60">
					<Search />
				</div>
			</div>

			<div className="flex items-center gap-2">
				{/* Cart */}
				<button className="btn btn-ghost btn-circle btn-sm sm:btn-md">
					<div className="indicator">
						<svg
							className="w-4 h-4 sm:w-5 sm:h-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<circle cx="9" cy="21" r="1" />
							<circle cx="20" cy="21" r="1" />
							<path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
						</svg>
						{cartItemsCount > 0 && (
							<span className="badge badge-sm indicator-item">{cartItemsCount}</span>
						)}
					</div>
				</button>

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
				<Search />
			</div>
		</div>
	);
};

export default Icons;