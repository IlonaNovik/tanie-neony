import dynamic from "next/dynamic";

const CustomOrderSection = dynamic(
  () => import("./sections/custom-order-section"),
);
// const FeatureSection = dynamic(() => import("./sections/feature-section"));
const HeroSection = dynamic(() => import("./sections/hero-section"));
const ProductSection = dynamic(() => import("./sections/product-section"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <CustomOrderSection />
      {/* <FeatureSection /> */}
    </>
  );
}
