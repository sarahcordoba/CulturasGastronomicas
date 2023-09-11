import { Producto } from "./producto";
import { Receta } from "./receta";
import { Restaurante } from "./restaurante";

export interface Cultura {
    id: number;
    name: string;
    photo: string;
    description: string;
    countries: string[];
    products: Producto[];
    recipes: Receta[];
    restaurants: Restaurante[];
  }