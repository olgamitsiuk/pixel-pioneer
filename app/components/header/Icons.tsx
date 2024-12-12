import Link from 'next/link';

interface IconsProps {
	cartItemsCount: number;
}

const Icons = ({ cartItemsCount }: IconsProps) => {
	return (
		<div className="flex-none">
			<div className="flex items-center gap-2">
				{/* Search */}
				<button className="btn btn-ghost btn-circle">
					<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
						<circle cx="11" cy="11" r="8" />
						<path d="M21 21l-4.35-4.35" />
					</svg>
				</button>

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

				{/* Mobile menu */}
				<div className="dropdown dropdown-end lg:hidden">
					<label tabIndex={0} className="btn btn-ghost btn-circle">
						<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</label>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						<li><Link href="/">Home</Link></li>
						<li><Link href="/products">Products</Link></li>
						<li><Link href="/blog">Blog</Link></li>
						<li><Link href="/contact">Contact</Link></li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Icons;