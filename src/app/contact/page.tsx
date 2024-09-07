import { ContactDetails } from "./components/contact-details";
import { ContactForm } from "./components/contact-form";
import NeonCityImage from "../assets/images/neon-city.webp";

export default function Contact() {
  return (
    <section id="custom-order" aria-labelledby="custom-order">
      <div className="relative h-[40rem] overflow-hidden md:absolute md:left-0 md:h-full md:w-2/5 lg:w-1/2">
        <div
          className="absolute left-0 top-0 size-full bg-cover bg-center bg-no-repeat blur"
          style={{
            backgroundImage: `url(${NeonCityImage.src})`,
          }}
        />
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
