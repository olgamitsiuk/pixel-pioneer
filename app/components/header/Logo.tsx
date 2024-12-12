import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
	return (
		<div className="flex-none">
			<Link href="/" className="flex items-center">
				<Image
					src="/camera.svg"
					alt="Camera Logo"
					width={32}
					height={32}
					className="text-primary"
				/>
				<span className="ml-2 text-xl font-bold">Pixel Pioneers</span>
			</Link>
		</div>
	);
};

export default Logo;