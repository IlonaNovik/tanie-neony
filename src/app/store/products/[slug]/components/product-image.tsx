"use client";

import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { FC, useCallback, useEffect, useState } from "react";

interface ProductImageProps {
  imageUrl: string;
  productId: number;
}

export const ProductImage: FC<ProductImageProps> = ({
  imageUrl,
  productId,
}) => {
  const [favorite, setFavorite] = useState(false);

  const addToFavorites = useCallback(() => {
    setFavorite((prev) => !prev);

    const favorites = localStorage.getItem("favorites");
    const result = [];
    if (favorites && favorites !== "[]") {
      const parsedFavorites = JSON.parse(favorites).map((id: number) => id);
      if (!parsedFavorites.includes(productId)) result.push(...parsedFavorites);
      else
        result.push(
          ...parsedFavorites.filter(
            (favorite: number) => favorite !== productId,
          ),
        );
    } else {
      result.push(productId);
    }
  }, [productId]);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites && favorites !== "[]") {
      const parsedFavorites = JSON.parse(favorites).map((id: number) => id);
      setFavorite(parsedFavorites.includes(productId));
    }
  }, [productId]);
  return (
    <div
      className="h-[350px] w-full rounded-2xl bg-cover bg-center bg-no-repeat object-cover shadow-[0px_0px_20px_rgba(255,255,255,0.5)] md:block"
      style={{ backgroundImage: `url(${imageUrl})` }}
      role="img"
      aria-label="product image"
    >
      <button
        className="absolute right-2 top-2 size-10 cursor-pointer text-favorite"
        onClick={addToFavorites}
      >
        {favorite ? (
          <HeartIconSolid className="size-8" />
        ) : (
          <HeartIconOutline className="size-8" />
        )}
      </button>
    </div>
  );
};
