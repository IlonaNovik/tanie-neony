import { FC } from "react";

import { Tabs } from "@/app/components/tabs";

import { ProductForm } from "./product-form";
import { ProductImage } from "./product-image";
import YogaImg from "../../../../assets/images/yoga-3.webp";
import { Tag } from "../../../components/tag";
import { PRODUCT_DESCRIPTIONS } from "../utils/constants";

export interface Product {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  categories: string[];
  characteristics: { name: string; value: string }[];
}

const product: Product = {
  id: 1,
  slug: "joga-1",
  title: "Joga",
  description:
    "Neon w kształcie jogina w pozycji lotosu, stworzony, aby kreować relaksującą atmosferę w domu lub studiu jogi. Delikatne, świecące światło wprowadza spokój i równowagę, idealnie nadając się do miejsc sprzyjających medytacji i uważności.",
  price: 200,
  imageUrl: YogaImg.src,
  categories: ["sport", "zdrowie"],
  characteristics: [
    { name: "Kolor", value: "biały" },
    { name: "Materiał", value: "plastik" },
  ],
};

export const ProductDetailsSection: FC = () => {
  const { id, title, imageUrl, description } = product;

  return (
    <section className="col-span-5" aria-labelledby="product-details-heading">
      <h2 id="product-details-heading" className="sr-only">
        Szczegóły produktu
      </h2>
      <div className="mb-6 gap-12 md:grid md:grid-cols-3 md:p-4">
        <div className="relative hidden w-full md:block">
          <ProductImage imageUrl={imageUrl} productId={id} />
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <div className="mb-2 flex justify-between">
            <h1 className="text-3xl font-semibold uppercase">{title}</h1>
            <div className="flex gap-2">
              {product.categories.map((category) => (
                <Tag key={category} label={category} />
              ))}
            </div>
          </div>
          <div className="relative mb-6 mt-4 w-full md:hidden">
            <ProductImage imageUrl={imageUrl} productId={id} />
          </div>
          <p className="text-lg">{description}</p>
          <ProductForm product={product} />
        </div>
      </div>
      <Tabs tabs={PRODUCT_DESCRIPTIONS} />
    </section>
  );
};
