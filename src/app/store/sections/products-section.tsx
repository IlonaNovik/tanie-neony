import ImgLightening from "../../assets/images/lightning.webp";
import ImgLips from "../../assets/images/lips.webp";
import ImgMountains from "../../assets/images/mountain.webp";
import ImgMrPackman from "../../assets/images/packman.webp";
import ImgWoman from "../../assets/images/woman.webp";
import { Filters } from "../components/filters";
import { Pagination } from "../components/pagination";
import ProductList from "../components/product-list";

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

const pagination = {
  total: 10,
  current: 1,
  hasPrevious: true,
  hasNext: true,
};

export const ProductsSection = () => {
  return (
    <>
      <section
        id="product-filters"
        aria-labelledby="products-filters-heading"
        aria-live="polite"
        role="region"
      >
        <h2 id="products-filters-heading" className="sr-only">
          Filtry produktów
        </h2>
        <Filters />
      </section>
      <section
        id="product-list"
        aria-labelledby="products-list-heading"
        aria-live="polite"
        role="region"
      >
        <h2 id="products-list-heading" className="sr-only">
          Lista produktów
        </h2>
        <ProductList products={products} />
        <Pagination pagination={pagination} />
      </section>
    </>
  );
};
