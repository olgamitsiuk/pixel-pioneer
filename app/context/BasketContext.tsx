'use client';

import { createContext, useContext, useState } from 'react';
import { Product } from '@/app/api/product';

interface BasketItem extends Product {
	quantity: number;
}

interface BasketContextType {
	basketItems: BasketItem[];
	addBasketItem: (product: Product) => void;
	removeBasketItem: (productId: string) => void;
	increaseQuantity: (productId: string) => void;
	decreaseQuantity: (productId: string) => void;
	clearBasket: () => void;
	basketSubtotal: number;
	basketTotalItems: number;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export function BasketContextProvider({ children }: { children: React.ReactNode }) {
	const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

	const addBasketItem = (product: Product) => {
		setBasketItems(prevItems => {
			const existingItem = prevItems.find(item => item._id === product._id);
			if (existingItem) {
				return prevItems.map(item =>
					item._id === product._id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}
			return [...prevItems, { ...product, quantity: 1 }];
		});
	};

	const removeBasketItem = (productId: string) => {
		setBasketItems(prevItems =>
			prevItems.filter(item => item._id !== productId)
		);
	};

	const increaseQuantity = (productId: string) => {
		setBasketItems(prevItems =>
			prevItems.map(item =>
				item._id === productId
					? { ...item, quantity: item.quantity + 1 }
					: item
			)
		);
	};

	const decreaseQuantity = (productId: string) => {
		setBasketItems(prevItems =>
			prevItems.map(item =>
				item._id === productId && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			).filter(item => item.quantity > 0)
		);
	};

	const clearBasket = () => {
		setBasketItems([]);
	};

	const basketSubtotal = basketItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	const basketTotalItems = basketItems.reduce(
		(total, item) => total + item.quantity,
		0
	);

	return (
		<BasketContext.Provider
			value={{
				basketItems,
				addBasketItem,
				removeBasketItem,
				increaseQuantity,
				decreaseQuantity,
				clearBasket,
				basketSubtotal,
				basketTotalItems
			}}
		>
			{children}
		</BasketContext.Provider>
	);
}

export function useBasket() {
	const context = useContext(BasketContext);
	if (context === undefined) {
		throw new Error('useBasket must be used within a BasketContextProvider');
	}
	return context;
}