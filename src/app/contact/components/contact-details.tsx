import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

import { WhatsAppIcon } from "@/app/components/icons";

export const ContactDetails = () => {
  return (
    <section id="contact-details" aria-labelledby="contact-details-heading">
      <div className="relative flex justify-center px-6 pb-8 pt-24 sm:pt-32 md:px-8 lg:static lg:py-32">
        <div className="max-w-xl lg:mx-0 lg:max-w-lg">
          <h2
            id="contact-details-heading"
            className="text-3xl font-bold tracking-tight"
          >
            Skontaktuj się z nami
          </h2>
          <p className="mt-6 text-lg">
            Jeśli masz pytania, sugestie lub chcesz złożyć zamówienie,
            skontaktuj się z nami. Jesteśmy dostępni od poniedziałku do piątku w
            godzinach 9:00-17:00.
          </p>
          <dl className="mt-10 grid grid-cols-12 items-center gap-4  text-base">
            <dt className="col-span-1 flex-none">
              <span className="sr-only">Telefon</span>
              <PhoneIcon
                aria-hidden="true"
                className="h-7 w-6 text-neon-pink"
              />
            </dt>
            <dd className="col-span-11">
              <a
                href="tel:+48 501 762 076"
                className="hover:text-neon-pink"
                aria-label="Call +48 501 762 076"
              >
                +48 501 762 076
              </a>
            </dd>
            <dt className="col-span-1 flex-none">
              <span className="sr-only">Whatsapp</span>
              <WhatsAppIcon
                aria-hidden="true"
                className="h-7 w-6 text-neon-pink"
              />
            </dt>
            <dd className="col-span-11">
              <a
                href="https://wa.me/48501762076"
                className="hover:text-neon-pink"
                aria-label="Chat on WhatsApp"
              >
                +48 501 762 076
              </a>
            </dd>
            <dt className="col-span-1 flex-none">
              <span className="sr-only">Email</span>
              <EnvelopeIcon
                aria-hidden="true"
                className="h-7 w-6 text-neon-pink"
              />
            </dt>
            <dd className="col-span-11">
              <a
                href="mailto:sprzedaz@futurumrk.pl"
                className="hover:text-neon-pink"
                aria-label="Send email to sprzedaz@futurumrk.pl"
              >
                sprzedaz@futurumrk.pl
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </section>
  );
};
