import * as motion from "framer-motion/client";

import { HeroImages } from "../components/client/hero-images";

export default function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-title">
      <div className="isolate mx-auto flex min-h-screen max-w-7xl flex-row px-6 py-36 md:items-center md:pb-0 md:pt-16">
        <div className="lg:max-w-2xl">
          <motion.h1
            id="hero-title"
            className="text-4xl font-bold tracking-tight lg:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-white-glow">Neony</span> na zamówienie w
            przystępnej cenie
          </motion.h1>
          <motion.p
            className="mt-6 max-w-none text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Stwórz swój własny neon lub wybierz z naszej kolekcji gotowych
            neonów. Dostępne w różnych kształtach, kolorach i rozmiarach.
          </motion.p>
          <div className="mt-10 flex items-center gap-x-6">
            <motion.a
              aria-label="Sprawdź nasze produkty"
              href="#bestsellers"
              className="neon-button-shade"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              Sprawdź nasze produkty
            </motion.a>
          </div>
        </div>
        <div className="hidden md:block">
          <HeroImages />
        </div>
      </div>
    </section>
  );
}
