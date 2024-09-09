import { FC } from "react";

import { ProductItem } from "./product-item";
import { Product } from "../sections/products";

interface ProductListProps {
  products: Product[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <ul
      className="mb-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6"
      aria-live="polite"
      aria-label="Product List"
    >
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
