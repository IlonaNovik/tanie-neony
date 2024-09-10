import { ProductsSection } from "./sections/products-section";
import { StoreHeadingSection } from "./sections/store-heading-section";

export const metadata = {
  title: "Neony - Katalog produktów",
  description:
    "Szeroki wybór neonów. Znajdziesz tutaj różnorodne kształty i kolory, które można dostosować do własnych potrzeb. Wybierz idealny neon dla siebie.",
  keywords:
    "neony, katalog, produkty, neon, kształty, kolory, dostosowanie, wybór, idealny",
  openGraph: {
    type: "website",
    title: "Neony - Katalog produktów",
    description:
      "Szeroki wybór neonów. Znajdziesz tutaj różnorodne kształty i kolory, które można dostosować do własnych potrzeb. Wybierz idealny neon dla siebie.",
  },
};

export default function Store() {
  return (
    <div className="mx-auto mt-24 flex max-w-7xl flex-col gap-8 p-6 md:min-h-screen md:p-8">
      <StoreHeadingSection />
      <ProductsSection />
    </div>
  );
}
