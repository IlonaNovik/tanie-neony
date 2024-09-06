import Link from "next/link";

import { CustomOrderImage } from "../components/client/custom-order-image";

export const CustomOrderSection: React.FC = () => {
  return (
    <section id="custom-order" aria-labelledby="custom-order">
      <div className="relative flex min-h-screen flex-1">
        <CustomOrderImage />
        <div className="mx-auto flex h-full max-w-7xl items-center">
          <div className="px-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="text-base font-semibold leading-7 text-neon-pink">
              Personalizowany produkt
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stwórz swój własny <span className="text-white-glow">neon</span>
            </p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              Jeśli nie znalazłeś produktu, który spełnia Twoje oczekiwania,
              możesz zamówić u nas neon spersonalizowany. Wystarczy, że wyślesz
              nam swoją koncepcję, a my przygotujemy dla Ciebie ofertę.
            </p>
            <div className="relative mt-8">
              <Link href="#" className="neon-button">
                Przejdź do formularza
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
