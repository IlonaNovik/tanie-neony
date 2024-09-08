import { Filters } from "./components/filters";

export default function Store() {
  return (
    <section
      id="store"
      aria-labelledby="store-heading"
      className="md:min-h-screen"
    >
      <div className="mx-auto mt-20 max-w-7xl p-6 md:p-8">
        <h1 id="store-heading" className="text-3xl font-bold tracking-tight">
          Katalog produktów
        </h1>
        <p className="mt-6 w-2/3 text-lg">
          Szeroki wybór <span className="text-white-glow">neonów</span> na
          zamówienie. Znajdziesz tutaj różnorodne kształty i kolory, które można
          dostosować do własnych potrzeb. Przeglądaj naszą ofertę i wybierz
          idealny <span className="text-white-glow">neon </span>
          dla siebie.
        </p>
      </div>
      <section
        id="products"
        aria-labelledby="products-heading"
        aria-live="polite"
        role="region"
      >
        <h2 id="products-heading" className="sr-only">
          Lista produktów
        </h2>
        <Filters />
      </section>
    </section>
  );
}
