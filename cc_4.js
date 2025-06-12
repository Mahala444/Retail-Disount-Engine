
const inventory = [
  { name: "Smartphone", category: "electronics", price: 600, inventory: 4 },
  { name: "Jeans", category: "apparel", price: 40, inventory: 7 },
  { name: "Milk", category: "groceries", price: 4, inventory: 10 },
  { name: "Toilet Paper", category: "household", price: 10, inventory: 12 },
  { name: "Board Game", category: "toys", price: 35, inventory: 5 }
];

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

function getCustomerDiscount(type) {
  if (type === "student") return 0.05;
  else if (type === "senior") return 0.07;
  else return 0;
}

const customerTypes = ["senior", "student", "regular"];

for (let customerNum = 0; customerNum < 3; customerNum++) {
  const custType = customerTypes[customerNum];
  let subtotal = 0;

  for (const item of inventory) {
    if (item.inventory > 0) {
      subtotal += item.discounted;
      item.inventory--; // Reduce inventory after purchase
    }
  }

  const extraDiscount = getCustomerDiscount(custType);
  const total = subtotal * (1 - extraDiscount);

  console.log(`Customer ${customerNum + 1} (${custType}) paid: $${total.toFixed(2)}`);
}
