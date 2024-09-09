"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import ImgOpenNeonSign from "../../assets/images/open-neon-sign.webp";

const CustomOrderImage: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
      <picture>
        <source srcSet={ImgOpenNeonSign.src} media="(min-width: 768px)" />
        <source srcSet={ImgOpenNeonSign.src} media="(min-width: 640px)" />

        <motion.img
          role="img"
          ref={ref}
          alt="A neon sign that says 'Open'"
          src={ImgOpenNeonSign.src}
          className="size-full object-cover object-left"
          width={700}
          height={700}
          initial={{ filter: "grayscale(100%)" }}
          animate={
            isInView
              ? { filter: "grayscale(0%)" }
              : { filter: "grayscale(100%)" }
          }
          transition={{ duration: 1 }}
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default CustomOrderImage;
