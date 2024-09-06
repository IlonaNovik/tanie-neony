"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
};
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
    <div className="flex h-screen items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Nasze <span className="text-white-glow uppercase">bestsellery</span>
          </h2>
        </div>
        <ul className="mx-auto mt-8 max-w-2xl auto-rows-fr sm:mt-20 lg:mx-0 lg:max-w-none">
          <Slider {...settings} className="w-full">
            {products.map((product) => (
              <li
                key={product.id}
                className="relative isolate flex cursor-pointer flex-col justify-end overflow-hidden p-4 transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <div
                  className="h-[300px] rounded-2xl object-cover"
                  style={{
                    backgroundImage: `url(${product.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                <div className="mt-2 flex flex-wrap items-center gap-y-1 overflow-hidden text-base leading-6">
                  <p className="mr-8">
                    od{" "}
                    <span className="font-bold text-neon-pink">
                      {product.price}
                    </span>
                  </p>
                </div>
                <h3 className="mt-2 text-lg font-semibold uppercase leading-6 text-white">
                  {product.title}
                </h3>
              </li>
            ))}
          </Slider>
        </ul>
        <div className="mt-14 flex justify-around">
          <button className="neon-button">Sprawdź sklep</button>
        </div>
      </div>
    </div>
  );
};
