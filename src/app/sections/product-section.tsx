import { ProductList } from "../components/product-list";

const products = [
  {
    id: 1,
    title: "Foto aparat",
    href: "#",
    imageUrl:
      "https://i.pinimg.com/474x/1b/c8/3b/1bc83b10442340e07b91b4402e246ccf.jpg",
    price: "200 zł",
  },
  {
    id: 2,
    title: "Astronauta",
    href: "#",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrTrN5NpKVnSC8HghCPBbBQnFic9n65kGFTA&s",
    price: "200 zł",
  },
  {
    id: 3,
    title: "Baletnica",
    href: "#",
    imageUrl:
      "https://neoneffect.co.uk/cdn/shop/collections/Hero_Banner_1024x1024.jpg?v=1680242594",
    price: "200 zł",
  },
  {
    id: 4,
    title: "Kieliszki",
    href: "#",
    imageUrl:
      "https://gdziejestneon.com/wp-content/uploads/2023/06/neon-led-pac-man-gdzie-jest-neon-com.webp",
    price: "200 zł",
  },
  {
    id: 5,
    title: "Kwiaty",
    href: "#",
    imageUrl:
      "https://totheneon.com/wp-content/uploads/2022/07/IMG_0095_Easy-Resize.com-1.jpg",
    price: "200 zł",
  },
];

export const ProductSection = () => {
  return (
    <section id="bestsellers" aria-labelledby="bestsellers">
      <div className="mx-auto max-w-7xl items-center px-6 py-16 pb-10 md:py-10 md:min-h-screen md:pt-28">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Nasze <span className="text-white-glow uppercase">bestsellery</span>
        </h2>
        <ProductList products={products} />
        <div className="mt-14 flex justify-around">
          <button className="neon-button">Sprawdź sklep</button>
        </div>
      </div>
    </section>
  );
};
