import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/app/api/product';

interface SearchProps {
	products?: Product[];
}

const Search = ({ products = [] }: SearchProps) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [showDropdown, setShowDropdown] = useState(false);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const router = useRouter();
	const searchRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
				setShowDropdown(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleSearch = (term: string) => {
		setSearchTerm(term);
		if (term.trim() === '') {
			setFilteredProducts([]);
			setShowDropdown(false);
			return;
		}

		const filtered = products
			.filter(product =>
				product.name.toLowerCase().includes(term.toLowerCase()) ||
				product.description.toLowerCase().includes(term.toLowerCase())
			)
			.slice(0, 5);

		setFilteredProducts(filtered);
		setShowDropdown(true);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchTerm.trim()) {
			router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
			setSearchTerm('');
			setFilteredProducts([]);
			setShowDropdown(false);
		}
	};

	const handleProductClick = () => {
		setSearchTerm('');
		setFilteredProducts([]);
		setShowDropdown(false);
	};

	return (
		<div className="w-full relative" ref={searchRef}>
			<form onSubmit={handleSubmit}>
				<div className="relative">
					<input
						type="text"
						value={searchTerm}
						onChange={(e) => handleSearch(e.target.value)}
						placeholder="What can we help you to find?"
						className="input input-bordered w-full h-10 sm:h-9 text-sm pr-10"
					/>
					<button
						type="submit"
						className="absolute right-3 top-1/2 -translate-y-1/2"
						aria-label="Search"
					>
						<svg
							className="w-4 h-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<circle cx="11" cy="11" r="8" />
							<path d="M21 21l-4.35-4.35" />
						</svg>
					</button>
				</div>
			</form>

			{showDropdown && filteredProducts.length > 0 && (
				<div className="absolute z-50 w-full mt-1 bg-base-100 shadow-lg rounded-md border border-base-200 max-h-96 overflow-auto">
					{filteredProducts.map((product) => (
						<Link
							key={product._id}
							href={`/products/${product._id}`}
							className="flex items-center p-3 hover:bg-base-200 transition-colors"
							onClick={handleProductClick}
						>
							<div className="w-12 h-12 relative flex-shrink-0">
								<Image
									src={product.image}
									alt={product.name}
									fill
									className="object-cover rounded"
								/>
							</div>
							<div className="ml-3 flex-grow">
								<p className="text-sm font-medium">{product.name}</p>
								<p className="text-sm text-base-content/70">
									${product.price.toFixed(2)}
								</p>
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default Search;