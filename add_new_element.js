/* Use flatmap method to add new element in an existing object. */

let cart = [{
        name: 'Smartphone',
        qty: 2,
        price: 500
    },
    {
        name: 'Laptop',
        qty: 1,
        price: 1000
    }
];

let newCart = cart.flatMap(
    (item) => {
        if (item.name === 'Smartphone') {
            return [item, {
                name: 'Earbuds',
                qty: item.qty,
                price: 5
            }]
        } else {
            return [item];
        }
    }
);

console.log(newCart);
