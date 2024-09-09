import { products } from "./products";
import { Filters } from "../components/filters";
import { Pagination } from "../components/pagination";
import ProductList from "../components/product-list";

const pagination = {
  total: 10,
  current: 1,
  hasPrevious: true,
  hasNext: true,
};

export const ProductsSection = () => {
  return (
    <>
      <section
        id="product-filters"
        aria-labelledby="products-filters-heading"
        aria-live="polite"
        role="region"
      >
        <h2 id="products-filters-heading" className="sr-only">
          Filtry produktów
        </h2>
        <Filters />
      </section>
      <section
        id="product-list"
        aria-labelledby="products-list-heading"
        aria-live="polite"
        role="region"
      >
        <h2 id="products-list-heading" className="sr-only">
          Lista produktów
        </h2>
        <ProductList products={products} />
        <Pagination pagination={pagination} />
      </section>
    </>
  );
};
