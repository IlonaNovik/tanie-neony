"use client";

import { FC } from "react";
import { Controller, useForm } from "react-hook-form";

import { Chips } from "@/app/components/chips";
import { ColorChips } from "@/app/components/color-chips";
import { Select } from "@/app/components/select";
import { FormField } from "@/app/contact/components/form-field";

import { Product } from "./product-details-section";
import {
  ASSEMBLY_OPTIONS,
  COLOR_OPTIONS,
  CONTROL_OPTIONS,
  DIMENSION_OPTIONS,
  POWER_OPTIONS,
} from "../utils/constants";

interface ProductFormProps {
  product: Product;
}

interface ProductForm {
  control: string;
  assembly: string;
  power: string;
  color: string;
  dimensions: string;
}

export const ProductForm: FC<ProductFormProps> = ({ product }) => {
  const { control } = useForm<ProductForm>({
    defaultValues: {
      control: CONTROL_OPTIONS[0].id,
      assembly: ASSEMBLY_OPTIONS[0].id,
      power: POWER_OPTIONS[0].value,
      dimensions: DIMENSION_OPTIONS[0].value,
    },
  });
  return (
    <form className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4">
      <FormField
        label="Wymiary"
        name="dimensions"
        className="col-span-2 md:col-span-1"
      >
        <Controller
          name="dimensions"
          control={control}
          rules={{ required: "Podaj wymiary" }}
          render={({ field }) => (
            <Chips
              chips={DIMENSION_OPTIONS}
              value={DIMENSION_OPTIONS.find(
                (option) => option.value === field.value,
              )}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
      </FormField>
      <FormField
        label="Zasilanie"
        name="power"
        className="col-span-2 md:col-span-1"
      >
        <Controller
          name="power"
          control={control}
          rules={{ required: "Wybierz zasilanie" }}
          render={({ field }) => (
            <Chips
              chips={POWER_OPTIONS}
              value={POWER_OPTIONS.find(
                (option) => option.value === field.value,
              )}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
      </FormField>
      <FormField
        label="Sterowanie"
        name="control"
        className="col-span-2 md:col-span-1"
      >
        <Controller
          name="control"
          control={control}
          rules={{ required: "Wybierz sterowanie" }}
          render={({ field }) => (
            <Select
              options={CONTROL_OPTIONS}
              value={CONTROL_OPTIONS.find(
                (option) => option.id === field.value,
              )}
              onChange={(value) => field.onChange(value.id)}
            />
          )}
        />
      </FormField>

      <FormField
        label="Montaż"
        name="assembly"
        className="col-span-2 md:col-span-1"
      >
        <Controller
          name="assembly"
          control={control}
          rules={{ required: "Wybierz montaż" }}
          render={({ field }) => (
            <Select
              options={ASSEMBLY_OPTIONS}
              value={ASSEMBLY_OPTIONS.find(
                (option) => option.id === field.value,
              )}
              onChange={(value) => field.onChange(value.id)}
            />
          )}
        />
      </FormField>
      <FormField
        label="Kolor podświetlenia"
        name="color"
        className="col-span-2 place-self-start"
      >
        <Controller
          name="color"
          control={control}
          rules={{ required: "Wybierz kolor podświetlenia" }}
          render={({ field: { value, onChange } }) => (
            <ColorChips
              colors={COLOR_OPTIONS}
              value={value}
              onChange={onChange}
            />
          )}
        />
      </FormField>

      <div className="col-span-2 border-b border-lavender/50" />
      <div className="col-span-2 flex items-end justify-end font-bold uppercase text-[#ffb957]">
        Suma:{" "}
        <span className="ml-4 text-2xl font-semibold">{product.price} zł</span>
      </div>
      <button className="neon-button col-span-2 mt-4" type="submit">
        Zamów teraz
      </button>
    </form>
  );
};
