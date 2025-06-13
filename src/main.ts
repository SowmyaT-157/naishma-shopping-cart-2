console.log("naishma cli application...")


import axios from 'axios';
import promptSync from 'prompt-sync';
import { Product } from './interface/productData';
const prompt = promptSync();

export let products: Product[] = [];

async function fetchProducts(): Promise<Product[]> {
  return axios.get<Product[]>('https://fakestoreapi.com/products')
    .then(response => {
      products = response.data;
      console.log(" Products fetched and stored.");
      return products;
    })
    .catch(error => {
      console.error("Failed to fetch products:", error);
      return products;
    });
}

export function printProducts(products: Product[]) {
  console.log('\n Product List:\n');

  products.forEach((product) => {
    console.log(`ID: ${product.id}`);
    console.log(`Title: ${product.title}`);
    console.log(`Price: $${product.price}`);
    if (product.category) {
      console.log(`Category: ${product.category}`);
    }
    if (product.rating) {
      console.log(`Rating: ${product.rating.rate} (${product.rating.count} reviews)`);
    }
    console.log('------------------------------------');
  });
}


async function main() {
  await fetchProducts();         
  printProducts(products);       
                    
}
main();
