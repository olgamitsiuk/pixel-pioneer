const Search = () => {
	return (
		<div className="w-full">
			<div className="relative">
				<input
					type="text"
					placeholder="What can we help you to find ?"
					className="input input-bordered w-full h-10 sm:h-9 text-sm pr-10"
				/>
				<button
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
		</div>
	);
};

export default Search;