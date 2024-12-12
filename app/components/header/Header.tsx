import Logo from './Logo';
import NavBar from './NavBar';
import Icons from './Icons';

const Header = () => {
	const cartItemsCount = 0; // replase with actual store

	return (
		<header className="shadow-md bg-base-100">
			<div className="max-w-7xl mx-auto px-4">
				<div className="navbar bg-base-100 justify-between">
					<Logo />
					<NavBar />
					<Icons cartItemsCount={cartItemsCount} />
				</div>
			</div>
		</header>
	);
};

export default Header;