import Image from 'next/image';

const Logo = () => {
	return (
		<div className="flex-none">
			<div className="flex items-center">
				<Image
					src="/camera.svg"
					alt="Camera Logo"
					width={32}
					height={32}
					className="text-primary"
				/>
				<span className="ml-2 text-xl font-bold">Pixel Pioneers</span>
			</div>
		</div>
	);
};

export default Logo;