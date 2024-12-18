'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Product } from '../products/mockProducts';

export interface BasketItem {
	id: number;
	product_name: string;
	description: string;
	price: number;
	image: string;
	quantity: number;
}

interface BasketContextType {
	basketItems: BasketItem[];
	addBasketItem: (product: Product) => void;
	removeBasketItem: (productId: number) => void;
	increaseQuantity: (productId: number) => void;
	decreaseQuantity: (productId: number) => void;
	basketTotalItems: number;
	basketSubtotal: number;
}

const BasketContext = createContext<BasketContextType>({
	basketItems: [],
	addBasketItem: () => { },
	removeBasketItem: () => { },
	increaseQuantity: () => { },
	decreaseQuantity: () => { },
	basketTotalItems: 0,
	basketSubtotal: 0,
});

export const BasketContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
	const [basketTotalItems, setBasketTotalItems] = useState(0);
	const [basketSubtotal, setBasketSubtotal] = useState(0);

	// Load basket from localStorage on mount
	useEffect(() => {
		const storedBasket = localStorage.getItem('basket');
		if (storedBasket) {
			setBasketItems(JSON.parse(storedBasket));
		}
	}, []);

	// Update localStorage and totals when basket changes
	useEffect(() => {
		localStorage.setItem('basket', JSON.stringify(basketItems));

		const newTotalItems = basketItems.reduce((sum, item) => sum + item.quantity, 0);
		setBasketTotalItems(newTotalItems);

		const newSubtotal = basketItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
		setBasketSubtotal(newSubtotal);
	}, [basketItems]);

	const addBasketItem = (product: Product) => {
		setBasketItems(prev => {
			const existingItem = prev.find(item => item.id === product.id);

			if (existingItem) {
				return prev.map(item =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}

			return [...prev, {
				id: product.id,
				product_name: product.product_name,
				description: product.description,
				price: product.price,
				image: product.image,
				quantity: 1
			}];
		});
	};

	const removeBasketItem = (productId: number) => {
		setBasketItems(prev => prev.filter(item => item.id !== productId));
	};

	const increaseQuantity = (productId: number) => {
		setBasketItems(prev =>
			prev.map(item =>
				item.id === productId
					? { ...item, quantity: item.quantity + 1 }
					: item
			)
		);
	};

	const decreaseQuantity = (productId: number) => {
		setBasketItems(prev =>
			prev.map(item =>
				item.id === productId && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			).filter(item => item.quantity > 0)
		);
	};

	const value = {
		basketItems,
		addBasketItem,
		removeBasketItem,
		increaseQuantity,
		decreaseQuantity,
		basketTotalItems,
		basketSubtotal
	};

	return (
		<BasketContext.Provider value={value}>
			{children}
		</BasketContext.Provider>
	);
};

export const useBasket = () => {
	const context = useContext(BasketContext);
	if (context === undefined) {
		throw new Error('useBasket must be used within a BasketProvider');
	}
	return context;
};