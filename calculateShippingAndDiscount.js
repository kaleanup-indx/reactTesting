const TAX_RATE = 1.1
const DEFAULT_SHIPPING_RATE = 5

function calculateTotal(items, { shipping = DEFAULT_SHIPPING_RATE, discount = 0 } = {}) {
    if(items == null || items.length === 0) return 0;

    const totalCost = items.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)

    const discountRate = 1 - discount

    return totalCost * discountRate * TAX_RATE + shipping
}

const testItems = [
    { price: 5, quantity: 10},
    { price: 20, quantity: 20},
    { price: 25, quantity: 5}
]

console.log(calculateTotal(testItems, {discount: 0.65, shipping: 5}))