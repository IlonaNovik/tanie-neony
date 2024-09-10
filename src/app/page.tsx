import dynamic from "next/dynamic";

import { LoadingScreen } from "./components/loader";

const CustomOrderSection = dynamic(
  () => import("./components/sections/custom-order-section"),
  { loading: () => <LoadingScreen /> },
);
const FeatureSection = dynamic(
  () => import("./components/sections/feature-section"),
  { loading: () => <LoadingScreen /> },
);
const HeroSection = dynamic(
  () => import("./components/sections/hero-section"),
  { loading: () => <LoadingScreen /> },
);
const ProductSection = dynamic(
  () => import("./components/sections/product-section"),
  { loading: () => <LoadingScreen /> },
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
