import Image from "next/image";

const ProductCard = ({ title, imageSrc, description, price, tag }) => {
  return (
    <div className="card card-compact bg-base-100 w-72 shadow-xl">
      <figure className="relative h-48">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </figure>
      <div className="card-body flex flex-col">
        <h3 className="card-title">{title}</h3>
        <p className="text-gray-200">{description}</p>
        <p className="font-semibold text-gray-200">${price}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Product</button>
        </div>
      </div>
      <div className="absolute top-1 left-1 z-10">
        <span className="badge badge-secondary">{tag}</span>
      </div>
    </div>
  );
};

export default ProductCard;
