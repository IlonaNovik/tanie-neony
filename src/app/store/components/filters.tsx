import { Badge } from "@/app/components/badge";
import { Dropdown } from "@/app/components/dropdown";

const sortVariants = [
  {
    name: "Price: Low to High",
    value: "price-asc",
  },
  {
    name: "Price: High to Low",
    value: "price-desc",
  },
  {
    name: "Newest Arrivals",
    value: "newest",
  },
  {
    name: "Best Sellers",
    value: "best-sellers",
  },
];

export const Filters: React.FC = () => {
  return (
    <section id="filters" aria-labelledby="filters-heading">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex items-center justify-between border-b border-lavender/70">
          <Dropdown
            title="Sortuj po"
            position="left"
            items={sortVariants}
            aria-labelledby="sort-dropdown"
          />
          <div className="flex gap-2">
            <Dropdown
              title={
                <>
                  Kategoria
                  <span className="text-neon-pink">(1)</span>
                </>
              }
              items={sortVariants}
              aria-labelledby="category-dropdown"
            />
            <Dropdown
              title="Kolor"
              items={sortVariants}
              aria-labelledby="color-dropdown"
            />
          </div>
        </div>
        <div className="flex items-center divide-x divide-lavender bg-neon-purple/50 px-3 py-4">
          <span className="pr-5">Filters</span>
          <div className="pl-5">
            <Badge label="Jedzenie" aria-label="Filter: Jedzenie" />
          </div>
        </div>
      </div>
    </section>
  );
};
