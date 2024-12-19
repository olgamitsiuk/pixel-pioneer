import { fetchProducts } from '../../api/product';
import DropdownClient from './ProductsDropdownClient';

const categories = [
	{ id: 1, title: 'Cameras' },
	{ id: 2, title: 'Lenses' },
	{ id: 3, title: 'Lighting' },
	{ id: 4, title: 'Tripods & Supports' },
	{ id: 5, title: 'Accessories' },
	{ id: 6, title: 'Studio Equipment' }
];

export default async function ProductsDropdown() {
	const products = await fetchProducts();

	const featuredProducts = products
		.filter(product => product?.feature || product?.is_new)
		.slice(0, 4)
		.map(product => ({
			id: product._id,
			image: product.image,
			title: product.name,
			category: product.category
		}));

	return <DropdownClient categories={categories} featuredProducts={featuredProducts} />;
}