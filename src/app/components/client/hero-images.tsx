"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const HeroImages: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-10 lg:pl-0"
    >
      <div className="ml-auto w-40 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
        <div className="relative">
          <motion.img
            alt=""
            src="https://i.ebayimg.com/images/g/EHoAAOSwfZtbAODL/s-l1200.jpg"
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-[0px_0px_40px_rgb(255,16,240)]"
            initial={{ opacity: 0, filter: "brightness(0.5)" }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    filter: "brightness(1.2)",
                  }
                : { opacity: 0, filter: "brightness(0.5)" }
            }
            transition={{
              opacity: { duration: 1, delay: 1 },
              filter: { duration: 1, delay: 1.5, type: "spring" },
            }}
          />
        </div>
      </div>
      <div className="mr-auto w-40 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
        <div className="relative">
          <motion.img
            alt=""
            src="https://www.oohneon.com/cdn/shop/files/rn-image_picker_lib_temp_0296581a-562d-44ea-ae48-f781ecbc1ac4_2048x.jpg?v=1719956810"
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-[0px_0px_40px_rgb(255,16,240)]"
            initial={{ opacity: 0, filter: "brightness(0.5)" }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    filter: "brightness(1.2)",
                  }
                : { opacity: 0, filter: "brightness(0.5)" }
            }
            transition={{
              opacity: { duration: 1, delay: 0.5 },
              filter: { duration: 1, delay: 1, type: "spring" },
            }}
          />
        </div>
        <div className="relative">
          <motion.img
            alt=""
            src="https://www.echoneon.com/wp-content/uploads/2022/12/purple-Aesthetic-Skull-Head-Neon-Sign.webp"
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-[0px_0px_40px_rgb(255,16,240)]"
            initial={{ opacity: 0, filter: "brightness(0.5)" }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    filter: "brightness(1.2)",
                  }
                : { opacity: 0, filter: "brightness(0.5)" }
            }
            transition={{
              opacity: { duration: 1, delay: 1.5 },
              filter: { duration: 1, delay: 2, type: "spring" },
            }}
          />
        </div>
      </div>
      <div className="w-40 flex-none space-y-8 pt-32 sm:pt-0">
        <div className="relative">
          <motion.img
            alt=""
            src="https://neongrand.com/cdn/shop/products/2_2_1080x.jpg?v=1719821989"
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-[0px_0px_40px_rgb(255,16,240)]"
            initial={{ opacity: 0, filter: "brightness(0.5)" }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    filter: "brightness(1.2)",
                  }
                : { opacity: 0, filter: "brightness(0.5)" }
            }
            transition={{
              opacity: { duration: 1, delay: 2.5 },
              filter: { duration: 1, delay: 3, type: "spring" },
            }}
          />
        </div>
        <div className="relative">
          <motion.img
            alt=""
            src="https://static.vecteezy.com/system/resources/previews/004/997/349/original/mexican-food-neon-sign-vector.jpg"
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-[0px_0px_40px_rgb(255,16,240)]"
            initial={{ opacity: 0, filter: "brightness(0.5)" }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    filter: "brightness(1.2)",
                  }
                : { opacity: 0, filter: "brightness(0.5)" }
            }
            transition={{
              opacity: { duration: 1, delay: 0.7 },
              filter: { duration: 1, delay: 1.2, type: "spring" },
            }}
          />
        </div>
      </div>
    </div>
  );
};
