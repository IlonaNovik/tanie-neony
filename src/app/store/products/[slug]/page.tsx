import { ProductDetailsSection } from "./components/product-details-section";
import { SimilarProductSection } from "./components/similar-products-section";


export default function ProductDetailsPage() {
  return (
    <div className="mx-auto mt-24 grid max-w-7xl grid-cols-6 gap-8 divide-x divide-lavender p-6 md:min-h-screen md:p-8">
      <ProductDetailsSection />
      <SimilarProductSection />
    </div>
  );
}
