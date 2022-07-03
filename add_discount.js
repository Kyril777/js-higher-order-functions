const cart = [
  { name: 'purse', price: 699 },
  { name: 'watch', price: 599 },
  { name: 'dress', price: 1099 }
];


function addToCart(clothing) {
  cart.push(clothing);
}


function addToCartWithDiscount(amount) {
  return function(clothing) {
    const price = clothing.price * amount;
    addToCart({... clothing, price });
  };
}

const addToCartWith20Discount = addToCartWithDiscount(0.8); // 20%
const addToCartWith40Discount = addToCartWithDiscount(0.6); // 40%
const addToCartWith60Discount = addToCartWithDiscount(0.4); // 60%
const addToCartWith80Discount = addToCartWithDiscount(0.2); // 80%
