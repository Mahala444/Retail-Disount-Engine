// Step 2: Create 5 different products
const inventory = [
  { name: "Smartphone", category: "electronics", price: 600, inventory: 4 },
  { name: "Jeans", category: "apparel", price: 40, inventory: 7 },
  { name: "Milk", category: "groceries", price: 4, inventory: 10 },
  { name: "Toilet Paper", category: "household", price: 10, inventory: 12 },
  { name: "Board Game", category: "toys", price: 35, inventory: 5 }
];

// Step 3: Apply category-based discount using for...of and switch
for (const item of inventory) {
  switch (item.category) {
    case "electronics":
      item.discounted = item.price * 0.8; // 20% off
      break;
    case "apparel":
      item.discounted = item.price * 0.85; // 15% off
      break;
    case "groceries":
    case "household":
      item.discounted = item.price * 0.9; // 10% off
      break;
    default:
      item.discounted = item.price; // no discount
  }
}

// Step 4: Customer discount function
function getCustomerDiscount(type) {
  if (type === "student") return 0.05;
  else if (type === "senior") return 0.07;
  else return 0;
}

// Step 5: Simulate checkout for 3 customers
const customerTypes = ["senior", "student", "regular"];

for (let customerNum = 0; customerNum < 3; customerNum++) {
  const custType = customerTypes[customerNum];
  let subtotal = 0;

  for (const item of inventory) {
    if (item.inventory > 0) {
      subtotal += item.discounted;
      item.inventory--; // reduce inventory after purchase
    }
  }

  const extra = getCustomerDiscount(custType);
  const total = subtotal * (1 - extra);

  console.log(`Customer ${customerNum + 1} (${custType}) paid: $${total.toFixed(2)}`);
}

// Step 6: Log keys and values of one product using for...in
console.log("\nProduct details after discounts (1st product):");
const firstItem = inventory[0];
for (const key in firstItem) {
  console.log(`${key}: ${firstItem[key]}`);
}

// Step 7: Use Object.entries() and destructuring to log all products
console.log("\nUpdated product inventory:");
for (const item of inventory) {
  for (const [key, value] of Object.entries(item)) {
    console.log(`${key}: ${value}`);
  }
  console.log("---");
}
