
import promptSync from 'prompt-sync';
import { Product } from '../../interface/productData';
import { searchProducts } from '../searchProduct/searchProducts';
import { filterPrice,filterCategory,filterRating } from '../filterProduct/filter';
import { addToCart,viewCart} from '../addToCart/cart';
import { UserRole } from '../../main';

const prompt = promptSync();

export function displayProducts(products: Product[]) {
  if (products.length === 0) {
    console.log("No products found.");
    return;
  }
  products.forEach(p => {
    console.log(`ID: ${p.id}, Title: ${p.title}, Price: $${p.price}`);
  });
}

export function customerMenu(products: Product[]) {
  while (true) {
    console.log("\n--- Customer Menu ---");
    console.log("1. Search Product");
    console.log("2. Filter Products");
    console.log("3. Add to Cart");
    console.log("4. View Cart");
    console.log("5. Back");
  
    const choice = prompt("Enter choice: ").trim();

    switch (choice) {
      case "1": {
        const keyword = prompt("Enter keyword (or 'Back'): ").trim();
        if (keyword.toLowerCase() === "back") break;

        const results = searchProducts(products, keyword);
        displayProducts(results);
        break;
      }
      case "2": {
        // Filter submenu
        console.log("\n-- Filter Options --");
        console.log("1. By Category");
        console.log("2. By Price");
        console.log("3. By Rating");
        console.log("4. Back");

        const filterChoice = prompt("Choose filter: ").trim();

        switch (filterChoice) {
          case "1": {
            const category = prompt("Enter category: ").trim();
            const results = filterCategory(products, category);
            displayProducts(results);
            break;
          }
          case "2": {
            const priceStr = prompt("Enter max price: ").trim();
            const maxPrice = parseFloat(priceStr);
            if (isNaN(maxPrice)) {
              console.log("Invalid price.");
              break;
            }
            const results = filterPrice(products, maxPrice);
            displayProducts(results);
            break;
          }
          case "3": {
            const ratingStr = prompt("Enter minimum rating: ").trim();
            const minRating = parseFloat(ratingStr);
            if (isNaN(minRating)) {
              console.log("Invalid rating.");
              break;
            }
            const results = filterRating(products, minRating);
            displayProducts(results);
            break;
          }
          case "4":
            break; // back to main menu
          default:
            console.log("Invalid filter option.");
        }
        break;
      }

      case "3": {
        const name = prompt("Enter product name to add to cart (or 'Back'): ").trim();
        if (name.toLowerCase() === "back") break;

        addToCart(products, name);
        break;
      }
      case "4":
        viewCart();
        break;

      case "5":
        UserRole();
        return;  
     
      default:
        console.log("Invalid option.");
      }
    }
    }
  
  