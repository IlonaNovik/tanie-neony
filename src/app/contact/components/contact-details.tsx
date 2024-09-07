import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

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
          <dl className="mt-10 space-y-4 text-base" role="list">
            <div className="flex gap-x-4" role="listitem">
              <dt className="flex-none">
                <span className="sr-only">Telefon</span>
                <PhoneIcon
                  aria-hidden="true"
                  className="h-7 w-6 text-neon-pink"
                />
              </dt>
              <dd>
                <a
                  href="tel:+1 (555) 234-5678"
                  className="hover:text-neon-pink"
                  aria-label="Call +1 (555) 234-5678"
                >
                  +1 (555) 234-5678
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4" role="listitem">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <EnvelopeIcon
                  aria-hidden="true"
                  className="h-7 w-6 text-neon-pink"
                />
              </dt>
              <dd>
                <a
                  href="mailto:hello@example.com"
                  className="hover:text-neon-pink"
                  aria-label="Send email to hello@example.com"
                >
                  hello@example.com
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};
