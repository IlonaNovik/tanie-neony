import dynamic from "next/dynamic";
import Link from "next/link";

const CustomOrderImage = dynamic(
  () => import("../components/client/custom-order-image"),
  { ssr: false },
);

export default function CustomOrderSection() {
  return (
    <section id="custom-order" aria-labelledby="custom-order-heading">
      <CustomOrderImage />
      <div className="mx-auto flex max-w-7xl items-center justify-center md:min-h-screen">
        <div className="px-6 py-10 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <p className="text-base font-semibold text-neon-pink">
            Personalizowany produkt
          </p>
          <h2
            id="custom-order-heading"
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Stwórz swój własny <span className="text-white-glow">neon</span>
          </h2>
          <p className="mt-6 text-base">
            Jeśli nie znalazłeś produktu, który spełnia Twoje oczekiwania,
            możesz zamówić u nas neon spersonalizowany. Wystarczy, że wyślesz
            nam swoją koncepcję, a my przygotujemy dla Ciebie ofertę.
          </p>
          <div className="relative mt-8">
            <Link
              href="#"
              className="neon-button"
              aria-label="Przejdź do formularza zamówienia niestandardowego"
            >
              Przejdź do formularza
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
