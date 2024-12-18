'use client';

import { createContext, useContext, useState } from 'react';
import { Product } from '../api/product';

interface BasketContextType {
	basketItems: Product[];
	addBasketItem: (product: Product) => void;
	removeBasketItem: (productId: string) => void;
	clearBasket: () => void;
	basketTotalItems: number;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export function BasketContextProvider({ children }: { children: React.ReactNode }) {
	const [basketItems, setBasketItems] = useState<Product[]>([]);

	const addBasketItem = (product: Product) => {
		setBasketItems((prevItems) => [...prevItems, product]);
	};

	const removeBasketItem = (productId: string) => {
		setBasketItems((prevItems) =>
			prevItems.filter((item) => item._id !== productId)
		);
	};

	const clearBasket = () => {
		setBasketItems([]);
	};

	const basketTotalItems = basketItems.length;

	return (
		<BasketContext.Provider
			value={{
				basketItems,
				addBasketItem,
				removeBasketItem,
				clearBasket,
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