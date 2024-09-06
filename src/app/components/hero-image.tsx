"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface HeroImageProps {
  image: {
    src: string;
    alt: string;
  };
}

export const HeroImage: React.FC<HeroImageProps> = ({ image }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const opacityDelay = Math.random() * 1.5;
  const filterDelay = opacityDelay + 0.5;
  return (
    <motion.img
      ref={ref}
      alt={image.alt}
      src={image.src}
      className="aspect-[2/3] rounded-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-[0px_0px_40px_rgb(255,16,240)]"
      initial={{ opacity: 0, filter: "brightness(0.5)" }}
      animate={
        isInView
          ? { opacity: 1, filter: "brightness(1.2)" }
          : { opacity: 0, filter: "brightness(0.5)" }
      }
      transition={{
        opacity: { duration: 1, delay: opacityDelay },
        filter: { duration: 1, delay: filterDelay, type: "spring" },
      }}
    />
  );
};
