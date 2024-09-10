import { ContactDetails } from "./components/contact-details";
import { ContactForm } from "./components/contact-form";
import ImgNeonCityMob from "../assets/images/neon-city-mob.webp";
import ImgNeonCity from "../assets/images/neon-city.webp";

export const metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z nami, aby dowiedzieć się więcej o naszych produktach i usługach.",
  keywords: "kontakt, skontaktuj się, produkty, usługi, informacje, kontaktowe",
  openGraph: {
    type: "website",
    title: "Kontakt",
    description:
      "Skontaktuj się z nami, aby dowiedzieć się więcej o naszych produktach i usługach.",
  },
};

export default function Contact() {
  return (
    <section id="contact">
      <div className="relative h-[40rem] overflow-hidden md:absolute md:left-0 md:h-full md:w-2/5 lg:w-1/2">
        <picture>
          <source srcSet={ImgNeonCity.src} media="(min-width: 768px)" />
          <source srcSet={ImgNeonCityMob.src} media="(max-width: 767px)" />
          <img
            src={ImgNeonCity.src}
            alt="Background image of a neon city"
            className="size-full object-cover object-center blur"
          />
        </picture>
        <div className="absolute left-0 top-0 flex size-full items-center justify-center">
          <ContactDetails />
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-end md:min-h-screen">
        <ContactForm />
      </div>
    </section>
  );
}
