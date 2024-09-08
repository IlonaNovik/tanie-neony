import { Badge } from "@/app/components/badge";
import { Dropdown } from "@/app/components/dropdown";

const sortVariants = [
  {
    name: "Cena: Od najniższej",
    value: "price-asc",
  },
  {
    name: "Cena: Od najwyższej",
    value: "price-desc",
  },
  {
    name: "Nowości",
    value: "newest",
  },
  {
    name: "Bestsellery",
    value: "best-sellers",
  },
];

export const Filters: React.FC = () => {
  return (
    <section id="filters" aria-labelledby="filters-heading">
      <div className="flex items-center justify-between border-b border-lavender/70">
        <Dropdown
          title="Sortuj"
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
        <span className="pr-5">Filtry</span>
        <div className="pl-5">
          <Badge label="Jedzenie" aria-label="Filter: Jedzenie" />
        </div>
      </div>
    </section>
  );
};
