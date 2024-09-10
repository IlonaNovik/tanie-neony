"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { init, send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

import { Loader } from "@/app/components/loader";

import { FormField } from "./form-field";
import { Input } from "./input";
import { TextArea } from "./textarea";

const schema = yup.object().shape({
  firstName: yup.string().required("Imię jest wymagane."),
  lastName: yup.string().required("Nazwisko jest wymagane."),
  email: yup
    .string()
    .email("Niepoprawny adres email.")
    .required("Email jest wymagany."),
  phone: yup.string(),
  message: yup.string().required("Wiadomość jest wymagana."),
});

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({
    firstName,
    lastName,
    message,
    email,
    phone,
  }: ContactForm) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAIL_USER_ID;

    if (serviceId && templateId && userId) {
      try {
        init(userId);
        await send(serviceId, templateId, {
          from_name: `${firstName} ${lastName}`,
          message,
          phone,
          reply_to: email,
        });
      } catch (err) {
        toast.error(
          "Wystąpił błąd podczas wysyłania wiadomości, spróbuj ponownie.",
        );
      } finally {
        toast.info("Wiadość została wysłana!");
        reset();
      }
    }
  };

  return (
    <form
      className="w-full px-6 py-10 md:w-max md:pt-32 lg:px-8"
      onSubmit={handleSubmit(onSubmit)}
      aria-labelledby="contact-form-heading"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <h2 id="contact-form-heading" className="sr-only">
          Contact Form
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <FormField
            name="firstName"
            label="Imię"
            required
            error={errors.firstName}
          >
            <Input
              id="first-name"
              type="text"
              autoComplete="given-name"
              placeholder="Jan"
              aria-required="true"
              aria-invalid={errors.firstName ? "true" : "false"}
              {...register("firstName", { required: true })}
            />
          </FormField>
          <FormField
            name="lastName"
            label="Nazwisko"
            required
            error={errors.lastName}
          >
            <Input
              id="last-name"
              type="text"
              autoComplete="family-name"
              placeholder="Kowalski"
              aria-required="true"
              aria-invalid={errors.lastName ? "true" : "false"}
              {...register("lastName", { required: true })}
            />
          </FormField>
          <div className="sm:col-span-2">
            <FormField name="email" label="Email" required error={errors.email}>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="jan.kowalski@gmail.com"
                aria-required="true"
                aria-invalid={errors.email ? "true" : "false"}
                {...register("email", { required: true })}
              />
            </FormField>
          </div>
          <div className="sm:col-span-2">
            <FormField name="phone" label="Numer telefonu">
              <Input
                id="phone-number"
                type="tel"
                autoComplete="tel"
                placeholder="+48 123 456 789"
                aria-required="false"
                {...register("phone")}
              />
            </FormField>
          </div>
          <div className="sm:col-span-2">
            <FormField
              name="message"
              label="Wiadomość"
              required
              error={errors.message}
            >
              <TextArea
                id="message"
                rows={4}
                placeholder="Wpisz swoją wiadomość..."
                aria-required="true"
                aria-invalid={errors.message ? "true" : "false"}
                {...register("message", { required: true })}
              />
            </FormField>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="neon-button flex w-32 items-center justify-center"
            aria-label="Wyślij formularz"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader width="28" /> : "Wyślij"}
          </button>
        </div>
      </div>
    </form>
  );
};
