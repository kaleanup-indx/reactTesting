function calculateTotal(items, options) {
    let total = 0;

    items.forEach(element => {
        total += element.price * element.quantity
    });

    total = total - total * (options.discount || 0)
    total = total * 1.1
    total = total + (options.shipping || 5)

    return total
}

const testItems = [
    { price: 5, quantity: 10},
    { price: 20, quantity: 20},
    { price: 25, quantity: 5}
]

console.log(calculateTotal(testItems, {discount: 0.65, shipping: 5}))