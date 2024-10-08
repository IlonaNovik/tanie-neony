import ImgBottle1 from "../../assets/images/bottle-1.webp";
import ImgBottle2 from "../../assets/images/bottle-2.webp";
import ImgBottle3 from "../../assets/images/bottle-3.webp";
import ImgBottle4 from "../../assets/images/bottle-4.webp";
import ImgBurger1 from "../../assets/images/burger-1.webp";
import ImgBurger2 from "../../assets/images/burger-2.webp";
import ImgBurger3 from "../../assets/images/burger-3.webp";
import ImgBurger4 from "../../assets/images/burger-4.webp";
import ImgCocktail2 from "../../assets/images/coctail-2.webp";
import ImgCocktail3 from "../../assets/images/coctail-3.webp";
import ImgCocktail4 from "../../assets/images/coctail-4.webp";
import ImgCocktail5 from "../../assets/images/coctail-5.webp";
import ImgCola1 from "../../assets/images/cola-1.webp";
import ImgCola2 from "../../assets/images/cola-2.webp";
import ImgCola3 from "../../assets/images/cola-3.webp";
import ImgCola4 from "../../assets/images/cola-4.webp";
import ImgCupcake1 from "../../assets/images/cupcake-1.webp";
import ImgDragon1 from "../../assets/images/dragon-1.webp";
import ImgDragon2 from "../../assets/images/dragon-2.webp";
import ImgDragon3 from "../../assets/images/dragon-3.webp";
import ImgFruit1 from "../../assets/images/fruit-1.webp";
import ImgFruit2 from "../../assets/images/fruit-2.webp";
import ImgGlass1 from "../../assets/images/glass-1.webp";
import ImgGlass2 from "../../assets/images/glass-2.webp";
import ImgGlass3 from "../../assets/images/glass-3.webp";
import ImgMushroom3 from "../../assets/images/muchroom-3.webp";
import ImgMushroom1 from "../../assets/images/mushroom-1.webp";
import ImgMushroom2 from "../../assets/images/mushroom-2.webp";
import ImgPalmTree1 from "../../assets/images/palm-tree-1.webp";
import ImgPalmTree2 from "../../assets/images/palm-tree-2.webp";
import ImgPalmTree3 from "../../assets/images/palm-tree-3.webp";
import ImgPineapple1 from "../../assets/images/pineapple-1.webp";
import ImgPineapple2 from "../../assets/images/pineapple-2.webp";
import ImgPineapple3 from "../../assets/images/pineapple-3.webp";
import ImgPineapple4 from "../../assets/images/pineapple-4.webp";
import ImgPizza1 from "../../assets/images/pizza-1.webp";
import ImgPizza2 from "../../assets/images/pizza-2.webp";
import ImgPizzaTime from "../../assets/images/pizza-time.webp";
import ImgShape1 from "../../assets/images/shape-1.webp";
import ImgShape2 from "../../assets/images/shape-2.webp";
import ImgShape3 from "../../assets/images/shape-3.webp";
import ImgShape4 from "../../assets/images/shape-4.webp";
import ImgShape5 from "../../assets/images/shape-5.webp";
import ImgShell1 from "../../assets/images/shell-1.webp";
import ImgShell2 from "../../assets/images/shell-2.webp";
import ImgTv1 from "../../assets/images/tv-1.webp";
import ImgTv2 from "../../assets/images/tv-2.webp";
import ImgYoga1 from "../../assets/images/yoga-1.webp";
import ImgYoga2 from "../../assets/images/yoga-2.webp";
import ImgYoga3 from "../../assets/images/yoga-3.webp";

export interface Product {
  id: number;
  slug: string;
  title: string;
  imageUrl: string;
  price: string;
  href: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "bottle-1",
    title: "Bottle 1",
    href: "#",
    imageUrl: ImgBottle1.src,
    price: "200 zł",
  },
  {
    id: 2,
    slug: "bottle-2",
    title: "Bottle 2",
    href: "#",
    imageUrl: ImgBottle2.src,
    price: "200 zł",
  },
  {
    id: 3,
    slug: "bottle-3",
    title: "Bottle 3",
    href: "#",
    imageUrl: ImgBottle3.src,
    price: "200 zł",
  },
  {
    id: 4,
    slug: "bottle-4",
    title: "Bottle 4",
    href: "#",
    imageUrl: ImgBottle4.src,
    price: "200 zł",
  },
  {
    id: 5,
    slug: "cola-1",
    title: "Cola 1",
    href: "#",
    imageUrl: ImgCola1.src,
    price: "200 zł",
  },
  {
    id: 6,
    slug: "cola-2",
    title: "Cola 2",
    href: "#",
    imageUrl: ImgCola2.src,
    price: "200 zł",
  },
  {
    id: 7,
    slug: "cola-3",
    title: "Cola 3",
    href: "#",
    imageUrl: ImgCola3.src,
    price: "200 zł",
  },
  {
    id: 8,
    slug: "cola-4",
    title: "Cola 4",
    href: "#",
    imageUrl: ImgCola4.src,
    price: "200 zł",
  },
  {
    id: 9,
    slug: "glass-1",
    title: "Glass 1",
    href: "#",
    imageUrl: ImgGlass1.src,
    price: "200 zł",
  },
  {
    id: 10,
    slug: "glass-2",
    title: "Glass 2",
    href: "#",
    imageUrl: ImgGlass2.src,
    price: "200 zł",
  },
  {
    id: 11,
    slug: "glass-3",
    title: "Glass 3",
    href: "#",
    imageUrl: ImgGlass3.src,
    price: "200 zł",
  },
  {
    id: 13,
    slug: "shape-1",
    title: "Shape 1",
    href: "#",
    imageUrl: ImgShape1.src,
    price: "200 zł",
  },
  {
    id: 14,
    slug: "shape-2",
    title: "Shape 2",
    href: "#",
    imageUrl: ImgShape2.src,
    price: "200 zł",
  },
  {
    id: 15,
    slug: "shape-3",
    title: "Shape 3",
    href: "#",
    imageUrl: ImgShape3.src,
    price: "200 zł",
  },
  {
    id: 16,
    slug: "shape-4",
    title: "Shape 4",
    href: "#",
    imageUrl: ImgShape4.src,
    price: "200 zł",
  },
  {
    id: 17,
    slug: "shape-5",
    title: "Shape 5",
    href: "#",
    imageUrl: ImgShape5.src,
    price: "200 zł",
  },
  {
    id: 18,
    slug: "shell-1",
    title: "Shell 1",
    href: "#",
    imageUrl: ImgShell1.src,
    price: "200 zł",
  },
  {
    id: 19,
    slug: "shell-2",
    title: "Shell 2",
    href: "#",
    imageUrl: ImgShell2.src,
    price: "200 zł",
  },
  {
    id: 20,
    slug: "tv-1",
    title: "TV 1",
    href: "#",
    imageUrl: ImgTv1.src,
    price: "200 zł",
  },
  {
    id: 21,
    slug: "tv-2",
    title: "TV 2",
    href: "#",
    imageUrl: ImgTv2.src,
    price: "200 zł",
  },
  {
    id: 22,
    slug: "cupcake-1",
    title: "Cupcake 1",
    href: "#",
    imageUrl: ImgCupcake1.src,
    price: "200 zł",
  },
  {
    id: 23,
    slug: "dragon-1",
    title: "Dragon 1",
    href: "#",
    imageUrl: ImgDragon1.src,
    price: "200 zł",
  },
  {
    id: 24,
    slug: "dragon-2",
    title: "Dragon 2",
    href: "#",
    imageUrl: ImgDragon2.src,
    price: "200 zł",
  },
  {
    id: 25,
    slug: "dragon-3",
    title: "Dragon 3",
    href: "#",
    imageUrl: ImgDragon3.src,
    price: "200 zł",
  },
  {
    id: 26,
    slug: "mushroom-1",
    title: "Mushroom 1",
    href: "#",
    imageUrl: ImgMushroom1.src,
    price: "200 zł",
  },
  {
    id: 27,
    slug: "mushroom-2",
    title: "Mushroom 2",
    href: "#",
    imageUrl: ImgMushroom2.src,
    price: "200 zł",
  },
  {
    id: 28,
    slug: "mushroom-3",
    title: "Mushroom 3",
    href: "#",
    imageUrl: ImgMushroom3.src,
    price: "200 zł",
  },
  {
    id: 29,
    slug: "palm-tree-1",
    title: "Palm Tree 1",
    href: "#",
    imageUrl: ImgPalmTree1.src,
    price: "200 zł",
  },
  {
    id: 30,
    slug: "palm-tree-2",
    title: "Palm Tree 2",
    href: "#",
    imageUrl: ImgPalmTree2.src,
    price: "200 zł",
  },
  {
    id: 31,
    slug: "palm-tree-3",
    title: "Palm Tree 3",
    href: "#",
    imageUrl: ImgPalmTree3.src,
    price: "200 zł",
  },
  {
    id: 32,
    slug: "yoga-1",
    title: "Yoga 1",
    href: "#",
    imageUrl: ImgYoga1.src,
    price: "200 zł",
  },
  {
    id: 33,
    slug: "yoga-2",
    title: "Yoga 2",
    href: "#",
    imageUrl: ImgYoga2.src,
    price: "200 zł",
  },
  {
    id: 34,
    slug: "yoga-3",
    title: "Yoga 3",
    href: "#",
    imageUrl: ImgYoga3.src,
    price: "200 zł",
  },
  {
    id: 35,
    slug: "burger-1",
    title: "Burger 1",
    href: "#",
    imageUrl: ImgBurger1.src,
    price: "200 zł",
  },
  {
    id: 36,
    slug: "burger-2",
    title: "Burger 2",
    href: "#",
    imageUrl: ImgBurger2.src,
    price: "200 zł",
  },
  {
    id: 37,
    slug: "burger-3",
    title: "Burger 3",
    href: "#",
    imageUrl: ImgBurger3.src,
    price: "200 zł",
  },
  {
    id: 38,
    slug: "burger-4",
    title: "Burger 4",
    href: "#",
    imageUrl: ImgBurger4.src,
    price: "200 zł",
  },
  {
    id: 39,
    slug: "cocktail-2",
    title: "Cocktail 2",
    href: "#",
    imageUrl: ImgCocktail2.src,
    price: "200 zł",
  },
  {
    id: 40,
    slug: "cocktail-3",
    title: "Cocktail 3",
    href: "#",
    imageUrl: ImgCocktail3.src,
    price: "200 zł",
  },
  {
    id: 41,
    slug: "cocktail-4",
    title: "Cocktail 4",
    href: "#",
    imageUrl: ImgCocktail4.src,
    price: "200 zł",
  },
  {
    id: 42,
    slug: "cocktail-5",
    title: "Cocktail 5",
    href: "#",
    imageUrl: ImgCocktail5.src,
    price: "200 zł",
  },
  {
    id: 43,
    slug: "fruit-1",
    title: "Fruit 1",
    href: "#",
    imageUrl: ImgFruit1.src,
    price: "200 zł",
  },
  {
    id: 44,
    slug: "fruit-2",
    title: "Fruit 2",
    href: "#",
    imageUrl: ImgFruit2.src,
    price: "200 zł",
  },
  {
    id: 45,
    slug: "pineapple-1",
    title: "Pineapple 1",
    href: "#",
    imageUrl: ImgPineapple1.src,
    price: "200 zł",
  },
  {
    id: 46,
    slug: "pineapple-2",
    title: "Pineapple 2",
    href: "#",
    imageUrl: ImgPineapple2.src,
    price: "200 zł",
  },
  {
    id: 47,
    slug: "pineapple-3",
    title: "Pineapple 3",
    href: "#",
    imageUrl: ImgPineapple3.src,
    price: "200 zł",
  },
  {
    id: 48,
    slug: "pineapple-4",
    title: "Pineapple 4",
    href: "#",
    imageUrl: ImgPineapple4.src,
    price: "200 zł",
  },
  {
    id: 49,
    slug: "pizza-1",
    title: "Pizza 1",
    href: "#",
    imageUrl: ImgPizza1.src,
    price: "200 zł",
  },
  {
    id: 50,
    slug: "pizza-2",
    title: "Pizza 2",
    href: "#",
    imageUrl: ImgPizza2.src,
    price: "200 zł",
  },
  {
    id: 51,
    slug: "pizza-time",
    title: "Pizza Time",
    href: "#",
    imageUrl: ImgPizzaTime.src,
    price: "200 zł",
  },
].reverse();
