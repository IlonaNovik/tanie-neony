import Link from "next/link";
import { FC } from "react";

import { Tag } from "@/app/store/components/tag";

import Yoga1Img from "../../../../assets/images/yoga-1.webp";
import Yoga2Img from "../../../../assets/images/yoga-2.webp";

const similarProducts = [
  {
    id: 2,
    slug: "joga-2",
    title: "Joga",
    description:
      "Stylowy neon przedstawiający jogina w pozycji lotosu, doskonały dodatek do każdego wnętrza, które potrzebuje odrobiny spokoju i harmonii.",
    imageUrl: Yoga1Img.src,
    price: 200,
    categories: ["sport", "zdrowie"],
  },
  {
    id: 3,
    slug: "joga-3",
    title: "Joga",
    description:
      "Neon w formie jogina w pozycji lotosu, który doda wyjątkowego charakteru i ciepłego światła każdemu pomieszczeniu.",
    imageUrl: Yoga2Img.src,
    price: 200,
    categories: ["sport", "zdrowie"],
  },
];

export const SimilarProductSection: FC = () => {
  return (
    <aside
      className="col-span-2 bg-neon-purple/30 p-4"
      aria-labelledby="product-details-similar-products"
    >
      <h2 id="product-details-similar-products" className="mb-4 text-lg">
        Podobne produkty
      </h2>
      <ul
        className="grid grid-cols-1 gap-4"
        aria-live="polite"
        aria-label="Podobne produkty"
      >
        {similarProducts.map((product, index) => (
          <li
            key={index}
            className="cursor-pointer rounded-lg bg-neon-purple-dark/50 transition-shadow hover:scale-105 hover:shadow-[0px_0px_40px_rgb(255,16,240)]"
            aria-label="Product: Product Title, Price: Price"
          >
            <Link
              href={`/store/products/${product.slug}`}
              className="grid grid-cols-3 gap-4 p-2"
            >
              <div
                className="min-h-full w-full rounded-lg bg-cover bg-center bg-no-repeat object-cover"
                style={{ backgroundImage: `url(${product.imageUrl})` }}
                aria-hidden="true"
              />
              <div className="col-span-2 flex flex-col gap-2">
                <p className="flex justify-between">
                  {product.title}{" "}
                  <span className="text-sm">
                    od{" "}
                    <span className="font-bold text-neon-pink">
                      {product.price}
                    </span>{" "}
                    zł
                  </span>
                </p>
                <p className="mb-2 line-clamp-2 text-sm">
                  {product.description}
                </p>
                <div className="flex gap-2">
                  {product.categories.map((category) => (
                    <Tag key={category} label={category} />
                  ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
