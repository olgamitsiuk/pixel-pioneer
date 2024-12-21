"use client";
import Image from 'next/image';

import canonLogo from '../../public/media/brands/canon.png';
import sonyLogo from '../../public/media/brands/sony.png';
import nikonLogo from '../../public/media/brands/nikon.png';
import djiLogo from '../../public/media/brands/dji.png';
import fujifilmLogo from '../../public/media/brands/fujifilm.png';
import leicaLogo from '../../public/media/brands/leica.png';
import olympusLogo from '../../public/media/brands/olympus.png';

const brands = [
	{ name: 'Canon', logo: canonLogo },
	{ name: 'Sony', logo: sonyLogo },
	{ name: 'Nikon', logo: nikonLogo },
	{ name: 'DJI', logo: djiLogo },
	{ name: 'Fujifilm', logo: fujifilmLogo },
	{ name: 'Leica', logo: leicaLogo },
	{ name: 'Olympus', logo: olympusLogo }
];

const BrandCarousel = () => {
	return (
		<div className="relative p-4">
			<div className="max-w-[1600px] mx-auto">
				<div className="p-4 flex justify-between">
					<h2 className="text-2xl font-bold mb-4">Our Trusted Brands</h2>
				</div>

				<div className="relative">
					<div className="carousel carousel-center w-full overflow-x-auto space-x-4 sm:space-x-8 scrollbar-hide">
						{brands.map((brand) => (
							<div
								key={brand.name}
								className="carousel-item flex-none"
							>
								<div className="relative h-12 sm:h-16 w-28 sm:w-40 transition-transform hover:scale-105">
									<Image
										src={brand.logo}
										alt={`${brand.name} logo`}
										className="object-contain"
										priority
										fill
										sizes="(max-width: 640px) 112px, 160px"
									/>
								</div>
							</div>
						))}
					</div>

					{/* Gradient masks for sides */}
					<div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
					<div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
				</div>
			</div>
		</div>
	);
};

export default BrandCarousel;