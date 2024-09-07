import dynamic from "next/dynamic";

import ImgLightening from "../assets/images/lightning.webp";
import ImgLips from "../assets/images/lips.webp";
import ImgMountains from "../assets/images/mountain.webp";
import ImgMrPackman from "../assets/images/packman.webp";
import ImgWoman from "../assets/images/woman.webp";

const ProductList = dynamic(() => import("../components/product-list"), {
  ssr: false,
});

const products = [
  {
    id: 1,
    title: "Błyskawica",
    href: "#",
    imageUrl: ImgLightening.src,
    price: "200 zł",
  },
  {
    id: 2,
    title: "Góry",
    href: "#",
    imageUrl: ImgMountains.src,
    price: "200 zł",
  },
  {
    id: 3,
    title: "Kobieta",
    href: "#",
    imageUrl: ImgWoman.src,
    price: "200 zł",
  },
  {
    id: 4,
    title: "Mr. Packman",
    href: "#",
    imageUrl: ImgMrPackman.src,
    price: "200 zł",
  },
  {
    id: 5,
    title: "Usta",
    href: "#",
    imageUrl: ImgLips.src,
    price: "200 zł",
  },
];

export default function BestsellersSection() {
  return (
    <section id="bestsellers" aria-labelledby="bestsellers">
      <div className="mx-auto max-w-7xl items-center px-6 py-16 pb-10 md:min-h-screen md:py-10 md:pt-28">
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
}
