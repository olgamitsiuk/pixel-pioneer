"use client";
import React, { useRef, useEffect } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { Product } from "@/app/api/product";

interface ProductCarouselProps {
	title: string;
	products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
	title,
	products,
}) => {
	const carouselRef = useRef<HTMLDivElement | null>(null);

	const scrollLeft = () => {
		if (carouselRef.current) {
			const scrollDistance =
				carouselRef.current.querySelector(".carousel-item")?.clientWidth || 0;
			carouselRef.current.scrollLeft -= scrollDistance;
		}
	};

	const scrollRight = () => {
		if (carouselRef.current) {
			const scrollDistance =
				carouselRef.current.querySelector(".carousel-item")?.clientWidth || 0;
			carouselRef.current.scrollLeft += scrollDistance;
		}
	};

	const handleWheelScroll = (event: WheelEvent) => {
		if (carouselRef.current) {
			const scrollDistance =
				carouselRef.current.querySelector(".carousel-item")?.clientWidth || 0;

			if (event.deltaY !== 0) {
				event.preventDefault();

				if (event.deltaY < 0) {
					carouselRef.current.scrollLeft -= scrollDistance;
				} else {
					carouselRef.current.scrollLeft += scrollDistance;
				}
			}
		}
	};

	useEffect(() => {
		const carouselElement = carouselRef.current;

		if (carouselElement) {
			carouselElement.addEventListener("wheel", handleWheelScroll, {
				passive: false,
			});
		}

		return () => {
			if (carouselElement) {
				carouselElement.removeEventListener("wheel", handleWheelScroll);
			}
		};
	}, []);

	return (
		<div className="relative p-4">
			<div className="p-4 flex justify-between">
				<h2 className="text-2xl font-bold mb-4">{title}</h2>
				<Link
					href={
						title === "Featured Products"
							? "/products?viewAll=featured"
							: "/products?viewAll=new"
					}
					className="link link-hover"
				>
					See all
				</Link>
			</div>

			<button
				onClick={scrollLeft}
				className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all opacity-90"
			>
				❮
			</button>

			<div
				ref={carouselRef}
				className="carousel flex overflow-x-scroll scroll-smooth scrollbar-hide space-x-6 p-4 snap-x snap-mandatory"
			>
				{products.map((product) => (
					<div
						key={product._id}
						className="carousel-item flex-shrink-0 snap-center"
					>
						<ProductCard
							title={product.name}
							imageSrc={product.image}
							description={product.description}
							price={product.price}
							id={product._id}
							tag={product.is_new ? 'New' : product.feature ? 'Featured' : ''}
						/>
					</div>
				))}
			</div>

			<button
				onClick={scrollRight}
				className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all opacity-90"
			>
				❯
			</button>
		</div>
	);
};

export default ProductCarousel;