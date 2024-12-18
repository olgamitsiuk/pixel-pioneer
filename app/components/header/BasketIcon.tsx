'use client';

import Link from 'next/link';
import { useBasket } from '../../context/BasketContext';

const BasketIcon = () => {
	const { basketTotalItems } = useBasket();

	return (
		<Link href="/basket" className="btn btn-ghost btn-circle btn-sm sm:btn-md">
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
				{basketTotalItems > 0 && (
					<span className="badge badge-sm indicator-item">{basketTotalItems}</span>
				)}
			</div>
		</Link>
	);
};

export default BasketIcon;