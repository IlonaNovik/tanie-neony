import { HeroImage } from "../hero-image";

export const HeroImages: React.FC = () => {
  return (
    <div className="flex justify-end gap-8">
      <div className="w-20 flex-none space-y-8 pt-80 md:w-28 lg:w-40">
        <HeroImage
          image={{
            src: "https://i.ebayimg.com/images/g/EHoAAOSwfZtbAODL/s-l1200.jpg",
            alt: "balloon-dog-neon-sign",
          }}
        />
      </div>
      <div className="w-20 flex-none space-y-8 pt-36 md:w-28 lg:w-40">
        <HeroImage
          image={{
            src: "https://www.oohneon.com/cdn/shop/files/rn-image_picker_lib_temp_0296581a-562d-44ea-ae48-f781ecbc1ac4_2048x.jpg?v=1719956810",
            alt: "dj-girl-neon-sign",
          }}
        />

        <HeroImage
          image={{
            src: "https://www.echoneon.com/wp-content/uploads/2022/12/purple-Aesthetic-Skull-Head-Neon-Sign.webp",
            alt: "purple-skull-head-neon-sign",
          }}
        />
      </div>

      <div className="w-20 flex-none space-y-8 sm:pt-0 md:w-28 lg:w-40">
        <HeroImage
          image={{
            src: "https://neongrand.com/cdn/shop/products/2_2_1080x.jpg?v=1719821989",
            alt: "ufo-neon-sign",
          }}
        />

        <HeroImage
          image={{
            src: "https://static.vecteezy.com/system/resources/previews/004/997/349/original/mexican-food-neon-sign-vector.jpg",
            alt: "mexican-food-neon-sign",
          }}
        />
      </div>
    </div>
  );
};
