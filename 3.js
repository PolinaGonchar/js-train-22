// The Observer is a programming pattern that defines a "one-to-many" dependency between objects so that when one object's state changes, all dependent objects are automatically updated.
/**
 * The Customer class represents a customer who can receive notifications via email.
 * A customer is identified by their email address, which is used for sending messages.
 */
class Customer {
  constructor(email) {
    this.email = email;
  }

  /**
   * Method for sending an email notification to the customer. It accepts a message and prints to the console `${this.email} ${message}`.
   */
  sendEmail(message) {
    console.log(`${this.email} ${message}`);
  }
}

/**
 * The Product class represents a product that can be created.
 */
class Product {
  constructor(name) {
    this.name = name;
  }
}

/**
 * The Store class represents a store that can have subscribers and create new products.
 * The store has a name and a list of subscribers who receive notifications about new products.
 */
class Store {
  constructor(name) {
    this.name = name;
    this.customers = [];
  }

  /**
   * The subscribe method allows a customer to subscribe to the store. It accepts a customer who is subscribing.
   * After calling this method, the customer will receive notifications about new products by being added to the array via push.
   */
  subscribe(customer) {
    this.customers.push(customer);
  }

  /**
   * The unsubscribe method allows a customer to unsubscribe from the store. It accepts a customer who is unsubscribing.
   * After calling this method, the customer will no longer receive notifications about new products by being removed from the array using filter.
   */
  unsubscribe(customer) {
    this.customers = this.customers.filter((c) => c !== customer);
  }

  /**
   * The createProduct method is used to create a new product in the store. It accepts a name for the new product.
   * After calling this method, a new product will be created, and all subscribers will be notified via sendNotify.
   */
  createProduct(name) {
    const product = new Product(name);
    this.sendNotify(product);
  }

  /**
   * Method for sending notifications to all subscribers about a new product. It accepts a product that the notification is about.
   * It sends a message "New product '${product.name}' in store ${this.name}!" using sendEmail.
   */
  sendNotify(product) {
    this.customers.forEach((customer) => {
      customer.sendEmail(
        `New product "${product.name}" in store ${this.name}!`
      );
    });
  }
}

console.log("Task 3 ====================================");

const store = new Store("IT Supermarket");

const customer1 = new Customer("john@example.com");
const customer2 = new Customer("jane@example.com");
const customer3 = new Customer("alice@example.com");

store.subscribe(customer1);
store.subscribe(customer2);
store.subscribe(customer3);

store.createProduct("New Laptop");

store.unsubscribe(customer1);

store.createProduct("Wireless Headphones");
