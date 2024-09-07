"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

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
  phoneNumber: yup.string().required("Numer telefonu jest wymagany."),
  message: yup.string().required("Wiadomość jest wymagana."),
});

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ContactForm) => {
    return data;
  };

  return (
    <form className="px-6 py-8 pt-32 lg:px-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
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
                {...register("email", { required: true })}
              />
            </FormField>
          </div>
          <div className="sm:col-span-2">
            <FormField
              name="phoneNumber"
              label="Numer telefonu"
              required
              error={errors.phoneNumber}
            >
              <Input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                placeholder="+48 123 456 789"
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
                placeholder="Your message..."
                {...register("message", { required: true })}
              />
            </FormField>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button type="submit" className="neon-button">
            Wyślij
          </button>
        </div>
      </div>
    </form>
  );
};
