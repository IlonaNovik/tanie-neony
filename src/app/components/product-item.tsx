import { FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProductItemProps {
  product: {
    id: number;
    title: string;
    imageUrl: string;
    price: string;
    href: string;
  };
}

export const ProductItem: FC<ProductItemProps> = ({
  product: { title, imageUrl, price },
}) => {
  return (
    <li
      className="cursor-pointer p-4 transition-transform duration-300 ease-in-out hover:scale-105"
      aria-label={`Product: ${title}, Price: ${price}`}
    >
      <div
        className="h-80 rounded-2xl bg-cover bg-center bg-no-repeat object-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-hidden="true"
      />

      <p className="mt-2 text-base">
        od <span className="font-bold text-neon-pink">{price}</span>
      </p>
      <h3 className="mt-2 text-lg font-semibold uppercase">{title}</h3>
    </li>
  );
};
