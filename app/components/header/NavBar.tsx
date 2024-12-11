import ProductsDropdown from './ProductsDropdown';

const NavBar = () => {
	return (
		<div className="hidden lg:flex flex-none">
			<ul className="menu menu-horizontal px-1">
				<li><a href="/" className="text-base">Home</a></li>
				<li className="static">
					<ProductsDropdown />
				</li>
				<li><a href="/blog" className="text-base">Blog</a></li>
				<li><a href="/contact" className="text-base">Contact</a></li>
			</ul>
		</div>
	);
};

export default NavBar;