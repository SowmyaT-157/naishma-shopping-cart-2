import { Product } from "../interface/productData";
import { products,printProducts } from "../main"; 
import { removeProduct } from "./removeProduct";
import { UserRole } from "../main";

import promptSync from 'prompt-sync';
const prompt = promptSync();



export function adminMenu() {
 
    console.log("\n--- Admin Menu ---");
    console.log("1. Add a Product");
    console.log("2. Remove a Product");
    console.log("3. Display Products");
    console.log("4. Exit Admin Menu");
    const choice = prompt("Select an option: ");

  if (choice === "1") {
    addProduct();
    adminMenu()
    } else if (choice === "2") {
      removeProduct();
      adminMenu();
    } else if (choice === "3") {
       printProducts(products);
       adminMenu()
    } else if (choice === "4") {
      console.log("sowmya...")
       UserRole();

    } else {
    console.log("Invalid option, try again.");
    }
      } 



// adminMenu();

function addProduct(): void {
  const title = prompt('Enter product title: ');
  const priceStr = prompt('Enter product price: ');
  const category = prompt('Enter category (optional): ');
  const ratingStr = prompt('Enter rating (optional): ');

  const price = parseFloat(priceStr); 
  const rating = ratingStr ? { rate: parseFloat(ratingStr), count: 0 } : undefined;

  if (!title || isNaN(price)) {
    console.log('1Invalid title or price.');
    return;
  }
  
  const nextId = products.length > 0
    ? Math.max(...products.map((p: Product) => p.id))
    :0;
  
  const newProduct: Product = {
    id: nextId + 1,
    title,
    price,
    category: category || undefined,
    rating,
  };

  products.push(newProduct); 
  console.log(`Product "${title}" added successfully.`);
}




