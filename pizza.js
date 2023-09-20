// Write code which models a pizza as a class.
// Pizza has at least following properties:
// name, toppings, base price for a small pizza.
// Pizza has also a function, which calculates
// it’s price.

const extraToppingPrice = 50;
const numberOfFreeToppings = 4;

class Pizza {
    name;
    toppings = [];
    basePrice = 0; // in cents
    size = 'S';

    constructor(name, toppings, basePrice) {
        this.name = name;
        this.toppings = toppings;
        this.basePrice = basePrice
    }

    getPrice() {
        let extraToppings = this.toppings.length - numberOfFreeToppings;
        if (extraToppings < 0) {
            extraToppings = 0;
        }

        return this.basePrice + extraToppings * extraToppingPrice;
    }
}

// Write code which models an order to a pizza place as a class.
// The order has a customer name, delivery type,
// and there can be several pizzas in one order.
// Order can be updated by adding pizzas to it with a method of the order class.

class PizzaOrder {
    customerName = '';
    deliveryType = 'EAT_IN'; // other values TAKE_OUT, DELIVERY
    pizzas = [];

    addPizza(pizza) {
        this.pizzas.push(pizza);
    }

    getPrice() {
        let totalPrice = 0;
        // 1) check delivery type and add delivery fee if needed
        // 2) loop over the pizzas and sum up their prices
        return totalPrice;
    }
}