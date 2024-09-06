"use client";

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];
export const FeatureSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section id="features" aria-labelledby="features">
      <div className="flex min-h-screen justify-center px-6 py-8 md:items-center lg:px-8">
        <div className="flex max-w-7xl flex-col items-center justify-center">
          <h2 className="text-base font-semibold text-neon-pink">
            Cechy produktu
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            W pełni dostosowany do{" "}
            <span className="text-white-glow">Twoich</span> potrzeb
          </p>
          <p className="mt-6 text-lg">
            Różne możliwości konfiguracji sterowania neonem
          </p>
          <div
            ref={ref}
            className="mt-10 max-w-2xl sm:mt-20 md:mt-16 lg:mt-24 lg:max-w-4xl"
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  className="relative pl-16"
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                  }
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <dt className="text-base font-semibold">
                    <div className="neon-button absolute left-0 top-0 flex size-10 items-center justify-center p-0">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 drop-shadow-[0_0_0.5em_rgb(255_255_255)]"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
