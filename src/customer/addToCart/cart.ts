import promptSync from 'prompt-sync';
import { Product } from '../../interface/productData';


const prompt = promptSync();
export const cart: Product[] = [];

export function addToCart(products: Product[], name: string): void {
  const product = products.find(
    p => p.title.toLowerCase().includes(name.toLowerCase())
  );
  if (product) {
    cart.push(product);
    console.log(`Added to cart: ${product.title}`);
  } else {
    console.log(`Product not found: ${name}`);
  }
}

// // View Cart
// export function viewCart(): void {
//   if (cart.length === 0) {
//     console.log("Cart is empty.");
//     return;
//   }

//   console.log("\nYour Cart:");
//   cart.forEach(p => {
//     console.log(`- ${p.title} ($${p.price})`);
//   });
// }
