import { CustomOrderSection } from "./sections/custom-order-section";
import { FeatureSection } from "./sections/feature-section";
import { HeroSection } from "./sections/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CustomOrderSection />
      <FeatureSection />
    </>
  );
}
