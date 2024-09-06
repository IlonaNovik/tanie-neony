import { CustomOrderSection } from "./sections/custom-order-section";
import { FeatureSection } from "./sections/feature-section";
import { HeroSection } from "./sections/hero-section";
import { ProductSection } from "./sections/product-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <CustomOrderSection />
      <FeatureSection />
    </>
  );
}
