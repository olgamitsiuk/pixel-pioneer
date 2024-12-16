import React from 'react';
import Image from 'next/image';

const Carousel = () => {
	return (
		<div className="carousel w-full relative mt-16 sm:mt-0">
			<div id="slide1" className="carousel-item relative w-full">
				<Image
					src="/assets/img/banner.jpg"
					alt="Banner"
					width={1920}
					height={400}
					className="w-full object-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
					priority
				/>
				<div className="absolute inset-0 flex items-center bg-black bg-opacity-30">
					<div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
						<div className="max-w-[260px] xs:max-w-sm sm:max-w-lg">
							<h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 xs:mb-2 sm:mb-4">
								Capture Every Moment, Perfectly.
							</h1>
							<p className="text-sm xs:text-lg sm:text-xl md:text-2xl text-white mb-0.5 xs:mb-1 sm:mb-2">
								Professional tools
							</p>
							<p className="text-sm xs:text-lg sm:text-xl md:text-2xl text-white mb-2 xs:mb-3 sm:mb-4">
								for timeless memories.
							</p>
							<button className="btn btn-xs xs:btn-sm sm:btn-md btn-primary bg-orange-500 border-none hover:bg-orange-600 min-h-0 h-8 xs:h-10">
								Explore More
							</button>
						</div>
					</div>
				</div>
				<div className="absolute inset-y-0 left-0 flex items-center">
					<a
						href="#slide2"
						className="btn btn-circle btn-xs xs:btn-sm sm:btn-md bg-black/50 border-none hover:bg-black/70 ml-1 xs:ml-2 sm:ml-4 min-h-0 h-6 w-6 xs:h-8 xs:w-8 sm:h-12 sm:w-12"
					>
						❮
					</a>
				</div>
				<div className="absolute inset-y-0 right-0 flex items-center">
					<a
						href="#slide2"
						className="btn btn-circle btn-xs xs:btn-sm sm:btn-md bg-black/50 border-none hover:bg-black/70 mr-1 xs:mr-2 sm:mr-4 min-h-0 h-6 w-6 xs:h-8 xs:w-8 sm:h-12 sm:w-12"
					>
						❯
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full">
				<Image
					src="/assets/img/banner.jpg"
					alt="Banner"
					width={1920}
					height={400}
					className="w-full object-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
					priority
				/>
				<div className="absolute inset-0 flex items-center bg-black bg-opacity-30">
					<div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
						<div className="max-w-[260px] xs:max-w-sm sm:max-w-lg">
							<h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 xs:mb-2 sm:mb-4">
								Capture Every Moment, Perfectly.
							</h1>
							<p className="text-sm xs:text-lg sm:text-xl md:text-2xl text-white mb-0.5 xs:mb-1 sm:mb-2">
								Professional tools
							</p>
							<p className="text-sm xs:text-lg sm:text-xl md:text-2xl text-white mb-2 xs:mb-3 sm:mb-4">
								for timeless memories.
							</p>
							<button className="btn btn-xs xs:btn-sm sm:btn-md btn-primary bg-orange-500 border-none hover:bg-orange-600 min-h-0 h-8 xs:h-10">
								Explore More
							</button>
						</div>
					</div>
				</div>
				<div className="absolute inset-y-0 left-0 flex items-center">
					<a
						href="#slide1"
						className="btn btn-circle btn-xs xs:btn-sm sm:btn-md bg-black/50 border-none hover:bg-black/70 ml-1 xs:ml-2 sm:ml-4 min-h-0 h-6 w-6 xs:h-8 xs:w-8 sm:h-12 sm:w-12"
					>
						❮
					</a>
				</div>
				<div className="absolute inset-y-0 right-0 flex items-center">
					<a
						href="#slide1"
						className="btn btn-circle btn-xs xs:btn-sm sm:btn-md bg-black/50 border-none hover:bg-black/70 mr-1 xs:mr-2 sm:mr-4 min-h-0 h-6 w-6 xs:h-8 xs:w-8 sm:h-12 sm:w-12"
					>
						❯
					</a>
				</div>
			</div>
		</div>
	);
};

export default Carousel;