import { Product } from "../interface/productData";

export function searchProducts(products: Product[], keyword: string): Product[] {
  return products.filter(p =>
    p.title.toLowerCase().includes(keyword.toLowerCase())
  );
}