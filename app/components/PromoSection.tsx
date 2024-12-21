import Image from 'next/image';
import Link from 'next/link';

const PromoSection = () => {
	return (
		<div className="mx-2 sm:mx-4 my-4 sm:my-8 bg-black text-white rounded-lg sm:rounded-xl overflow-hidden">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col md:flex-row items-center">
					{/* Left side - Product Image */}
					<div className="w-full md:w-1/2 p-4 sm:p-6">
						<div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full">
							<Image
								src="/media/promo/canon-lens.png"
								alt="Canon RF Lenses"
								fill
								className="object-contain"
								priority
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>
					</div>

					{/* Right side - Announcement */}
					<div className="w-full md:w-1/2 p-4 sm:p-6 text-center md:text-left">
						<div className="space-y-2 sm:space-y-3">
							<h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
								CANON
							</h2>
							<div className="space-y-1 sm:space-y-2">
								<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
									JUST ANNOUNCED
								</h3>
								<p className="text-xl sm:text-2xl md:text-3xl">
									RF Hybrid Trio &<br className="hidden sm:block" />
									RF-S VR Lens
								</p>
							</div>

							<Link
								href="/products"
								className="inline-block mt-4 sm:mt-6"
							>
								<button className="btn btn-primary w-full sm:w-auto">
									Explore & Pre Order today!
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PromoSection;