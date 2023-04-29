/* Use map() method to change item details within an object. */

const myItems = [
  { id: 1, item: "Vitamin C", price: 7.99, quantity: 25},
  { id: 2, item: "Cough/Cold/Allergy", price: 8.99, quantity: 20},
  { id: 3, item: "Aspirin", price: 4.99, quantity: 30},
  { id: 4, item: "Dramamine", price: 6.99, quantity: 15}
];

const reducePrice = (id, newPrice) => {
  return items.map((item) => {
    return item.id === id ? { ...item, age: newPrice } : item;
  });
};

const updateItems = reducePrice(1, 5.99);

/* Item 1, Vitamin, has its price changed from 7.99 to 5.99.
[{
  id: 1,
  item: "Vitamin",
  price: 5.99,
  quantity: 25
}, [object Object] {
  id: 2,
  item: "Allergy",
  price: 8.99,
  quantity: 20
}, [object Object] {
  id: 3,
  item: "Aspirin",
  price: 4.99,
  quantity: 30
}, [object Object] {
  id: 4,
  item: "Dramamine",
  price: 6.99,
  quantity: 15
}]
*/
