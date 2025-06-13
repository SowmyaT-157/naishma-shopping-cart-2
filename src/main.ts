console.log("naishma cli application...")


import { User } from "./enums/role";

import promptSync from 'prompt-sync';
const prompt = promptSync();


export function UserRole() {
  console.log('\nSelect role:');
  console.log('1. Admin');
  console.log('2. Customer');

  const input = prompt('Enter 1 or 2: ').trim();

  if (input === User.Admin) {
    console.log('You selected: Admin');
    // adminMenu();
  } else if (input === User.Customer) {
    console.log('You selected: Customer');
    // customerMenu(products);
  } else {
    console.log('Invalid selection');
  }
}
UserRole()
