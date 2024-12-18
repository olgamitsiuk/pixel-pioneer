import Carousel from "./components/carousel/Carousel";
import ProductCarousel from "./components/product/ProductCarousel";

const featuredProducts = [
  {
    id: 1,
    title: "Camera 1",
    imageSrc: "/assets/img/camera.jpg",
    description: "This is a product description",
    price: 99.99,
    tag: "Featured",
  },
  {
    id: 2,
    title: "Camera 2",
    imageSrc: "/assets/img/camera.jpg",
    description: "This is a product description",
    price: 59.99,
    tag: "Featured",
  },
  {
    id: 3,
    title: "Camera 3",
    imageSrc: "/assets/img/camera.jpg",
    description: "This is a product description",
    price: 199.99,
    tag: "Featured",
  },
  {
    id: 4,
    title: "Camera 4",
    imageSrc: "/assets/img/camera.jpg",
    description: "This is a product description",
    price: 99.99,
    tag: "Featured",
  },
  {
    id: 5,
    title: "Camera 5",
    imageSrc: "/assets/img/camera.jpg",
    description: "This is a product description",
    price: 59.99,
    tag: "Featured",
  },
  {
    id: 6,
    title: "Camera 6",
    imageSrc: "/assets/img/camera.jpg",
    description: "This is a product description",
    price: 199.99,
    tag: "Featured",
  },
];

const newProducts = [
  {
    id: 1,
    title: "Camera 1",
    imageSrc: "/assets/img/camera.jpg",
    description: "This is a product description",
    price: 99.99,
    tag: "New",
  },
  {
    id: 2,
    title: "Camera 2",
    imageSrc: "/assets/img/camera.jpg",
    description: "This is a product description",
    price: 59.99,
    tag: "New",
  },
  {
    id: 3,
    title: "Camera 3",
    imageSrc: "/assets/img/camera.jpg",
    description: "This is a product description",
    price: 199.99,
    tag: "New",
  },
  {
    id: 4,
    title: "Camera 4",
    imageSrc: "/assets/img/camera.jpg",
    description: "This is a product description",
    price: 99.99,
    tag: "New",
  },
  {
    id: 5,
    title: "Camera 5",
    imageSrc: "/assets/img/camera.jpg",
    description: "This is a product description",
    price: 59.99,
    tag: "New",
  },
  {
    id: 6,
    title: "Camera 6",
    imageSrc: "/assets/img/camera.jpg",
    description: "This is a product description",
    price: 199.99,
    tag: "New",
  },
];

export default function Home() {
  return (
    <div>
      <Carousel />
      <ProductCarousel title="Featured Products" products={featuredProducts} />
      <ProductCarousel title="New Products" products={newProducts} />
    </div>
  );
}
