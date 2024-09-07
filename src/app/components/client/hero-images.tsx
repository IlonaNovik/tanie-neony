import ImgBalloonDog from "../../assets/images/balloon-dog.webp";
import ImgDj from "../../assets/images/dj.webp";
import ImgMexicanFood from "../../assets/images/mexican-food.webp";
import ImgPurpleSkullHead from "../../assets/images/purple-skull-head.webp";
import ImgUfo from "../../assets/images/ufo.webp";
import { HeroImage } from "../hero-image";

export const HeroImages: React.FC = () => {
  return (
    <div className="flex justify-end gap-8">
      <div className="w-20 flex-none space-y-8 pt-80 md:w-28 lg:w-40">
        <HeroImage
          image={{
            src: ImgBalloonDog.src,
            alt: "balloon-dog-neon-sign",
          }}
        />
      </div>
      <div className="w-20 flex-none space-y-8 pt-36 md:w-28 lg:w-40">
        <HeroImage
          image={{
            src: ImgDj.src,
            alt: "dj-girl-neon-sign",
          }}
        />

        <HeroImage
          image={{
            src: ImgPurpleSkullHead.src,
            alt: "purple-skull-head-neon-sign",
          }}
        />
      </div>

      <div className="w-20 flex-none space-y-8 sm:pt-0 md:w-28 lg:w-40">
        <HeroImage
          image={{
            src: ImgUfo.src,
            alt: "ufo-neon-sign",
          }}
        />

        <HeroImage
          image={{
            src: ImgMexicanFood.src,
            alt: "mexican-food-neon-sign",
          }}
        />
      </div>
    </div>
  );
};
