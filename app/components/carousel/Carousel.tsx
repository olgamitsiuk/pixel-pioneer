import React from 'react';
import Image from 'next/image';

const Carousel = () => {
	return (
		<div className="carousel w-screen relative">
			<div id="slide1" className="carousel-item relative w-screen">
				<Image
					src="/assets/img/banner.jpg"
					alt="Banner"
					width={1920}
					height={400}
					className="w-screen object-cover"
					style={{ maxHeight: '600px' }}
					priority
				/>
				<div className="absolute inset-0 flex items-center bg-black bg-opacity-30">
					<div className="container mx-auto px-20">
						<div className="max-w-xl">
							<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
								Capture Every Moment, Perfectly.
							</h1>
							<p className="text-xl md:text-2xl lg:text-3xl text-white mb-6">
								Professional tools for timeless memories.
							</p>
							<button className="btn btn-primary bg-orange-500 border-none hover:bg-orange-600">
								Explore More
							</button>
						</div>
					</div>
				</div>
				<div className="absolute inset-y-0 left-0 flex items-center">
					<a href="#slide2" className="btn btn-circle bg-black/50 border-none hover:bg-black/70 ml-4">❮</a>
				</div>
				<div className="absolute inset-y-0 right-0 flex items-center">
					<a href="#slide2" className="btn btn-circle bg-black/50 border-none hover:bg-black/70 mr-4">❯</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-screen">
				<Image
					src="/assets/img/banner.jpg"
					alt="Banner"
					width={1920}
					height={400}
					className="w-screen object-cover"
					style={{ maxHeight: '600px' }}
				/>
				<div className="absolute inset-0 flex items-center bg-black bg-opacity-30">
					<div className="container mx-auto px-20">
						<div className="max-w-xl">
							<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
								Capture Every Moment, Perfectly.
							</h1>
							<p className="text-xl md:text-2xl lg:text-3xl text-white mb-6">
								Professional tools
							</p>
							<p className="text-xl md:text-2xl lg:text-3xl text-white mb-6">
								for timeless memories
							</p>
							<button className="btn btn-primary bg-orange-500 border-none hover:bg-orange-600">
								Explore More
							</button>
						</div>
					</div>
				</div>
				<div className="absolute inset-y-0 left-0 flex items-center">
					<a href="#slide1" className="btn btn-circle bg-black/50 border-none hover:bg-black/70 ml-4">❮</a>
				</div>
				<div className="absolute inset-y-0 right-0 flex items-center">
					<a href="#slide1" className="btn btn-circle bg-black/50 border-none hover:bg-black/70 mr-4">❯</a>
				</div>
			</div>
		</div>
	);
};

export default Carousel;