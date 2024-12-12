import Link from 'next/link';
import ProductsDropdown from './ProductsDropdown';

const NavBar = () => {
	return (
		<div className="hidden lg:flex flex-none">
			<ul className="menu menu-horizontal px-1 [&>li>*]:hover:bg-transparent">
				<li><Link href="/" className="text-base hover:text-blue-500 hover:underline">Home</Link></li>
				<li className="static [&>div>label]:text-base [&>div>label]:hover:text-blue-500 [&>div>label]:hover:underline">
					<ProductsDropdown />
				</li>
				<li><Link href="/blog" className="text-base hover:text-blue-500 hover:underline">Blog</Link></li>
				<li><Link href="/contact" className="text-base hover:text-blue-500 hover:underline">Contact</Link></li>
			</ul>
		</div>
	);
};

export default NavBar;