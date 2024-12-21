import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
	id: string;
	title: string;
	imageSrc: string;
	description: string;
	price: number;
	tag: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, imageSrc, description, price, tag }) => {
	return (
		<div className="card card-compact bg-base-100 w-72 shadow-xl">
			<figure className="relative h-48">
				<Image
					src={imageSrc}
					alt={title || "Product image"}
					fill
					className="object-cover"
					priority
				/>
			</figure>
			<div className="card-body flex flex-col">
				<h3 className="card-title">{title}</h3>
				<p>{description}</p>
				<p className="text-xl font-semibold">${Number(price).toFixed(2)}</p>

				<div className="card-actions justify-end">
					<Link href={`/products/${id}`}>
						<button className="btn btn-primary">View Product</button>
					</Link>
				</div>
			</div>
			{tag && (
				<div className="absolute top-1 left-1 z-10">
					<span className="badge badge-secondary">{tag}</span>
				</div>
			)}
		</div>
	);
};

export default ProductCard;