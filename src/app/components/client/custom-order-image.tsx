"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CustomOrderImage: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
      <picture>
        <source
          srcSet="https://t4.ftcdn.net/jpg/07/33/37/07/360_F_733370709_JdsBj6orta0yPKL1fLVGU4UdYdotUWOI.jpg"
          media="(min-width: 768px)"
        />
        <source
          srcSet="https://t4.ftcdn.net/jpg/07/33/37/07/360_F_733370709_JdsBj6orta0yPKL1fLVGU4UdYdotUWOI.jpg"
          media="(min-width: 640px)"
        />

        <motion.img
          ref={ref}
          alt="Neon sign"
          src="https://t4.ftcdn.net/jpg/07/33/37/07/360_F_733370709_JdsBj6orta0yPKL1fLVGU4UdYdotUWOI.jpg"
          className="size-full object-cover object-left"
          width={700}
          height={700}
          initial={{ filter: "grayscale(100%)" }}
          animate={
            isInView
              ? { filter: "grayscale(0%)" }
              : { filter: "grayscale(100%)" }
          }
          transition={{ duration: 1, delay: 0.5 }}
        />
      </picture>
    </div>
  );
};
