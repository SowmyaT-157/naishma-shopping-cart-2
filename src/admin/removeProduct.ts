
import { products } from "../main"; 

import promptSync from 'prompt-sync';
const prompt = promptSync();

export function removeProduct(): void {
  console.log("Remove function ")
  if (products.length === 0) {
    console.log("No products to remove.");
    return;
  }

  console.log("\n--- Products Available for Removal ---");
  products.forEach((product, index) => {
    console.log(`${index + 1}. ID: ${product.id} | Title: ${product.title}`);
  });
  while(true){
  const input = prompt('Enter product  title to remove (or type "back" to cancel): ').trim();
  if (input.toLowerCase() === 'back') return;

  const isNumeric = !isNaN(Number(input));
  const identifier = isNumeric ? Number(input) : input.toLowerCase();

  const index = products.findIndex(p =>
    isNumeric ? p.id === identifier : p.title.toLowerCase().trim() === identifier
  );


  if (index !== -1) {
    const removed = products.splice(index, 1)[0];
    console.log(` Product "${removed.title}" removed.`);
    return
  } else {
    console.log(' Product not found.');
  }
}
}


