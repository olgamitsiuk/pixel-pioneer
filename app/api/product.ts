export interface APIProduct {
	id: number | string;
	product_name: string;
	category: string;
	price: string | number;
	image: string;
	description: string;
	is_new?: boolean;
	feature?: boolean;
	stock?: number;
}

export interface Product {
	_id: string;
	name: string;
	category: string;
	price: number;
	image: string;
	description: string;
	is_new: boolean;
	feature: boolean;
	stock: number;
}

function transformAPIProduct(apiProduct: APIProduct): Product {

	const stripUrl = (url: string) => {
		return url.replace('https://pixelpioneer.onrender.com/', '/');
	}

	return {
		_id: apiProduct.id.toString(),
		name: apiProduct.product_name,
		category: apiProduct.category || 'Uncategorized',
		price: Number(apiProduct.price),
		image: stripUrl(apiProduct.image),
		description: apiProduct.description,
		is_new: Boolean(apiProduct.is_new),
		feature: Boolean(apiProduct.feature),
		stock: Number(apiProduct.stock) || 0
	};
}

export async function fetchProducts(): Promise<Product[]> {
	try {
		const response = await fetch('https://pixelpioneer.onrender.com/api/products', {
			next: { revalidate: 3600 }
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data.map(transformAPIProduct);
	} catch (error) {
		console.error('Error fetching products:', error);
		return [];
	}
}

export async function fetchProductById(id: string): Promise<Product | null> {
	if (!id) {
		console.error('Product ID is undefined');
		return null;
	}

	try {
		const response = await fetch(`https://pixelpioneer.onrender.com/api/products/${id}`, {
			next: { revalidate: 3600 }
		});

		if (!response.ok) {
			if (response.status === 404) {
				return null;
			}
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return transformAPIProduct(data);
	} catch (error) {
		console.error(`Error fetching product with id ${id}:`, error);
		return null;
	}
}