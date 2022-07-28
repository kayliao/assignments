function calculate(data) {
  let total = 0;
  for (let i = 0; i < data.products.length; i++) {
    total += data.products[i].price;
  }
  return (1 - data.discount) * total;
}

const discountedPrice = calculate({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});

console.log(discountedPrice);
