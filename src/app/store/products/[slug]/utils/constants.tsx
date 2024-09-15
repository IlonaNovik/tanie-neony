export const POWER_OPTIONS = [{ name: "z sieci", value: "network" }];

export const DIMENSION_OPTIONS = [
  { name: "22cm x 22cm", value: "22x22" },
  { name: "44cm x 44cm", value: "44x44" },
];

export const COLOR_OPTIONS = ["white", "yellow", "blue", "green", "red"];

export const ASSEMBLY_OPTIONS = [
  { id: "screws", name: "Wkręty" },
  { id: "tape", name: "Taśma dwustronna" },
  { id: "link", name: "Linka" },
];

export const CONTROL_OPTIONS = [
  { id: "manual", name: "Ręczne" },
  { id: "app", name: "Aplikacja" },
];

export const PRODUCT_DESCRIPTIONS = [
  {
    name: "Rozmiary",
    content: (
      <div className="p-4">
        <ul className="mt-2 flex flex-col gap-4 lg:lg:w-2/3">
          <li>
            <span className="font-bold">22 cm x 22 cm</span> – Idealne dla
            mniejszych przestrzeni, subtelna ozdoba, która doda klimatu, nie
            zajmując dużo miejsca.
          </li>
          <li>
            <span className="font-bold">44 cm x 44 cm</span> – Większy neon,
            doskonały do wyraźnego zaakcentowania dekoracji w przestrzeni.
            Świetnie nadaje się do większych ścian, jako centralny element
            wystroju.
          </li>
        </ul>
      </div>
    ),
  },
  {
    name: "Sterowanie",
    content: (
      <div className="p-4">
        <ul className="mt-2 flex flex-col gap-4 lg:w-2/3">
          <li>
            <span className="font-bold">Ręczne sterowanie</span> – Proste i
            wygodne. Neon wyposażony jest w przełącznik, który pozwala łatwo
            włączać i wyłączać światło. Idealne rozwiązanie dla osób ceniących
            klasyczne i bezproblemowe rozwiązania.
          </li>
          <li>
            <span className="font-bold">Sterowanie za pomocą aplikacji</span> –
            Nowoczesna opcja, która pozwala sterować neonem za pomocą
            dedykowanej aplikacji na smartfonie. Możliwość dostosowania
            jasności, zmiany trybów świecenia oraz włączania i wyłączania neonu
            z dowolnego miejsca w domu. Doskonała opcja dla tych, którzy lubią
            technologię i elastyczność w kontrolowaniu oświetlenia.
          </li>
        </ul>
      </div>
    ),
  },
  {
    name: "Montaż",
    content: (
      <div className="p-4">
        <ul className="mt-2 flex flex-col gap-4 lg:w-2/3">
          <li>
            <span className="font-bold">Wkręty</span> – Tradycyjny sposób
            montażu, który zapewnia stabilność i trwałość. Idealny dla osób,
            które chcą, aby neon był trwale zamocowany na ścianie.
          </li>
          <li>
            <span className="font-bold">Taśma dwustronna</span> – Szybki i
            prosty sposób na zamocowanie neonu, bez konieczności wiercenia w
            ścianie. Doskonałe rozwiązanie dla osób, które chcą, aby neon był
            łatwo przenośny i można go było łatwo zamontować w dowolnym miejscu.
          </li>
          <li>
            <span className="font-bold">Linka</span> – Nietypowy sposób montażu,
            który pozwala na zawieszenie neonu w dowolnym miejscu. Idealny dla
            osób, które cenią oryginalne i kreatywne rozwiązania.
          </li>
        </ul>
      </div>
    ),
  },
  {
    name: "Zasilanie",
    content: (
      <div className="p-4">
        <p className="mt-2 lg:w-2/3">
          Neon zasilany jest z sieci, co pozwala na stałe podłączenie do prądu i
          niezależne działanie. Dzięki temu nie musisz martwić się o wymianę
          baterii czy konieczność ładowania neonu. Po podłączeniu do gniazdka
          neon działa bez przerwy, zapewniając stałe i niezawodne oświetlenie.
        </p>
      </div>
    ),
  },
];
