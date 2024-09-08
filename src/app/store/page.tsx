import { ProductsSection } from "./sections/products-section";
import { StoreHeadingSection } from "./sections/store-heading-section";

export default function Store() {
  return (
    <div className="mx-auto mt-24 flex max-w-7xl flex-col gap-8 p-6 md:min-h-screen md:p-8">
      <StoreHeadingSection />
      <ProductsSection />
    </div>
  );
}
