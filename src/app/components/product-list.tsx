"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import Slider from "react-slick";

import { ProductItem } from "./product-item";

interface ProductListProps {
  products: {
    id: number;
    title: string;
    imageUrl: string;
    price: string;
    href: string;
  }[];
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  centerMode: true,
  nextArrow: <ChevronRightIcon />,
  prevArrow: <ChevronLeftIcon />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <ul className="mt-8 sm:mt-12">
      <Slider {...settings}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Slider>
    </ul>
  );
};

export default ProductList;
