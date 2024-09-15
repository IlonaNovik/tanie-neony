import { ProductDetailsSection } from "./components/product-details-section";
import { SimilarProductSection } from "./components/similar-products-section";

export default function ProductDetailsPage() {
  return (
    <div className="mx-auto mt-24 max-w-7xl gap-8 divide-x divide-lavender p-6 md:min-h-screen md:p-8 lg:grid lg:grid-cols-7">
      <ProductDetailsSection />
      <SimilarProductSection />
    </div>
  );
}
