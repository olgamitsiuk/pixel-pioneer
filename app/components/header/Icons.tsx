import { fetchProducts } from '@/app/api/product';
import IconsClient from './IconsClient';

const Icons = async () => {
	const products = await fetchProducts();
	return <IconsClient products={products} />;
};

export default Icons;