const Search = () => {
	return (
		<div className="relative sm:static">
			<div className="relative w-full sm:w-60">
				<input
					type="text"
					placeholder="What can we help you to find ?"
					className="input input-bordered w-full sm:input-sm pr-10"
				/>
				<button className="absolute right-3 top-1/2 -translate-y-1/2">
					<svg className="w-5 h-5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
						<circle cx="11" cy="11" r="8" />
						<path d="M21 21l-4.35-4.35" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Search;