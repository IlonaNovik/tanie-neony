import Link from "next/link";
import { FC } from "react";

import { Product } from "../sections/products";

interface ProductItemProps {
  product: Product;
}

export const ProductItem: FC<ProductItemProps> = ({
  product: { title, imageUrl, price },
}) => {
  return (
    <li
      className="cursor-pointer p-4"
      aria-label={`Product: ${title}, Price: ${price}`}
    >
      <Link
        href="#" //"/product/[id]"
        className="block"
        aria-label={`Product: ${title}, Price: ${price}`}
      >
        <div
          className="h-52 rounded-2xl bg-cover bg-center bg-no-repeat object-cover transition-transform duration-300 ease-in-out hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)] hover:brightness-150"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-hidden="true"
        />

        <p className="mt-2 text-sm">
          od <span className="font-bold text-neon-pink">{price}</span>
        </p>
        <h3 className="mt-2 text-sm font-semibold uppercase">{title}</h3>
      </Link>
    </li>
  );
};
