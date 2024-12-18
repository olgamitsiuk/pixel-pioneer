"use client";
import React, { useRef, useEffect } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

const ProductCarousel = ({ title, products }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Scroll left by the width of one product card
  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollDistance =
        carouselRef.current.querySelector(".carousel-item")?.clientWidth || 0;
      carouselRef.current.scrollLeft -= scrollDistance;
    }
  };

  // Scroll right by the width of one product card
  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollDistance =
        carouselRef.current.querySelector(".carousel-item")?.clientWidth || 0;
      carouselRef.current.scrollLeft += scrollDistance;
    }
  };

  // Handle mouse wheel scrolling (snap to cards)
  const handleWheelScroll = (event: WheelEvent) => {
    if (carouselRef.current) {
      const scrollDistance =
        carouselRef.current.querySelector(".carousel-item")?.clientWidth || 0;

      // Only prevent default (vertical scrolling) if we're hovering over the carousel
      if (event.deltaY !== 0) {
        event.preventDefault(); // Prevent vertical scrolling

        // Adjust scroll direction based on the wheel scroll direction
        if (event.deltaY < 0) {
          carouselRef.current.scrollLeft -= scrollDistance;
        } else {
          carouselRef.current.scrollLeft += scrollDistance;
        }
      }
    }
  };

  // Attach and remove the mouse wheel event listener
  useEffect(() => {
    const carouselElement = carouselRef.current;

    if (carouselElement) {
      carouselElement.addEventListener("wheel", handleWheelScroll, {
        passive: false,
      });
    }

    // Clean up the event listener
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("wheel", handleWheelScroll);
      }
    };
  }, []);

  return (
    <div className="relative p-4">
      {/* Product Group Title */}
      <div className="p-4 flex justify-between">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <Link href={`/products`} className="link link-hover">
          See all
        </Link>
      </div>

      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all opacity-90"
      >
        ❮
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="carousel flex overflow-x-scroll scroll-smooth scrollbar-hide space-x-6 p-4 snap-x snap-mandatory"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="carousel-item flex-shrink-0 snap-center"
          >
            <ProductCard
              title={product.title}
              imageSrc={product.imageSrc}
              description={product.description}
              price={product.price}
              tag={product.tag}
            />
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
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
