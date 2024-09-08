import dynamic from "next/dynamic";

const CustomOrderSection = dynamic(
  () => import("./components/sections/custom-order-section"),
);
const FeatureSection = dynamic(
  () => import("./components/sections/feature-section"),
);
const HeroSection = dynamic(() => import("./components/sections/hero-section"));
const ProductSection = dynamic(
  () => import("./components/sections/product-section"),
);

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
