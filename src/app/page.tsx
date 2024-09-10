import dynamic from "next/dynamic";

const CustomOrderSection = dynamic(
  () => import("./components/sections/custom-order-section"),
  { loading: () => <>loading</> },
);
const FeatureSection = dynamic(
  () => import("./components/sections/feature-section"),
  { loading: () => <>loading</> },
);
const HeroSection = dynamic(
  () => import("./components/sections/hero-section"),
  { loading: () => <>loading</> },
);
const ProductSection = dynamic(
  () => import("./components/sections/product-section"),
  { loading: () => <>loading</> },
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
