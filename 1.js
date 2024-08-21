// Singleton — this is a programming pattern that ensures
// that a class has only one instance and provides a global access point to this instance.

// The OrderTracker class is responsible for tracking orders
class OrderTracker {
  static #instance = null;
  static #orders = [];

  static create() {
    if (!this.#instance) {
      this.#instance = new OrderTracker();
    }
    return this.#instance;
  }

  static add(item) {
    this.#orders.push(item);
  }

  static get() {
    return this.#orders;
  }
}

console.log("Task 1 ====================================");

// Create the single instance of the OrderTracker class
const tracker = OrderTracker.create();

// Add orders to the list
OrderTracker.add("Phone");
OrderTracker.add("Laptop");

// Get the list of orders
const orders = OrderTracker.get();

// Output the list of orders to the console
console.log(orders);
