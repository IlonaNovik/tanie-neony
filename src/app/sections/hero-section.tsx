import * as motion from "framer-motion/client";

import { HeroImages } from "../components/client/hero-images";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" aria-labelledby="hero">
      <div className="relative isolate">
        <div className="overflow-hidden">
          <div className="mx-auto flex h-screen max-w-7xl items-center px-6">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <motion.h1
                  className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <span className="text-white-glow">Neony</span> na zamówienie w
                  przystępnej cenie
                </motion.h1>
                <motion.p
                  className="mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in
                  quis cupidatat mollit aute velit. Et labore commodo nulla
                  aliqua proident mollit ullamco exercitation tempor. Sint
                  aliqua anim nulla sunt mollit id pariatur in voluptate cillum.
                </motion.p>
                <div className="mt-10 flex items-center gap-x-6">
                  <motion.a
                    href="#"
                    className="neon-button-shade"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 3 }}
                  >
                    Sprawdź nasze produkty
                  </motion.a>
                </div>
              </div>
              <HeroImages />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
