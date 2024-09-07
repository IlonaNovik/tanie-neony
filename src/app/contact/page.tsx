import { ContactDetails } from "./components/contact-details";
import { ContactForm } from "./components/contact-form";

export default function Contact() {
  return (
    <section id="contact">
      <div className="relative h-[40rem] overflow-hidden md:absolute md:left-0 md:h-full md:w-2/5 lg:w-1/2">
        <div
          id="contact-background"
          className="absolute left-0 top-0 size-full bg-cover bg-center bg-no-repeat blur"
          role="img"
          aria-label="Background image of a neon city"
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
