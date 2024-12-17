'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useBasket } from '../context/BasketContext';
import { BasketItem } from '../context/BasketContext';

export default function BasketPage() {
	const {
		basketItems,
		increaseQuantity,
		decreaseQuantity,
		removeBasketItem,
		basketSubtotal
	} = useBasket();

	const shipping = 22.50;
	const discount = 10.67;
	const total = basketSubtotal + shipping - discount;

	if (basketItems.length === 0) {
		return (
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-2xl font-bold mb-4">Your Basket</h1>
				<div className="alert">
					<span>Your basket is empty. Start shopping!</span>
					<Link href="/products" className="btn btn-primary btn-sm">
						View Products
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold mb-8">Your Basket</h1>

			<div className="flex flex-col lg:flex-row gap-8">
				{/* Product List */}
				<div className="lg:w-2/3">
					{basketItems.map((item) => (
						<div key={item.id} className="card card-side bg-base-100 shadow-xl mb-4">
							<figure className="w-32 h-32 relative">
								<Image
									src={item.image}
									alt={item.product_name}
									fill
									className="object-cover"
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title">{item.product_name}</h2>
								<p className="text-sm opacity-70">{item.description}</p>
								<div className="flex items-center justify-between mt-4">
									<div className="flex items-center gap-4">
										<div className="join">
											<button
												className="btn btn-sm join-item"
												onClick={() => decreaseQuantity(item.id)}
											>
												-
											</button>
											<span className="btn btn-sm join-item no-animation">
												{item.quantity}
											</span>
											<button
												className="btn btn-sm join-item"
												onClick={() => increaseQuantity(item.id)}
											>
												+
											</button>
										</div>
										<button
											className="btn btn-ghost btn-sm text-error"
											onClick={() => removeBasketItem(item.id)}
										>
											Remove
										</button>
									</div>
									<div className="text-lg font-bold">
										${(item.price * item.quantity).toFixed(2)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Order Summary */}
				<div className="lg:w-1/3">
					<div className="card bg-base-100 shadow-xl">
						<div className="card-body">
							<h2 className="card-title">Payment Details</h2>
							<div className="space-y-3">
								<div className="flex justify-between">
									<span>Subtotal</span>
									<span>${basketSubtotal.toFixed(2)}</span>
								</div>
								<div className="flex justify-between text-success">
									<span>Discount</span>
									<span>-${discount.toFixed(2)}</span>
								</div>
								<div className="flex justify-between">
									<span>Shipping cost</span>
									<span>${shipping.toFixed(2)}</span>
								</div>
								<div className="divider my-2"></div>
								<div className="flex justify-between font-bold text-lg">
									<span>Grand Total</span>
									<span>${total.toFixed(2)}</span>
								</div>
							</div>
							<div className="card-actions mt-4">
								<button className="btn btn-primary w-full">
									Proceed to checkout
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}