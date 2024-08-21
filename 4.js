// The Decorator is a programming pattern that adds new functionality to existing objects without changing their structure.
// In other words, it allows extending the functionality of an object without modifying the object itself.

// The Drink class represents the base drink that can be prepared.
class Drink {
  price = 10;
  name = "Tea";
  prepare(){
    console.log(`Preparing ${this.name}`);
  }
}

// The HoneyDecorator class is a decorator that adds honey to a drink.
class HoneyDecorator {
  constructor(drink, amount){
    this.drink = drink;
    this.amount = amount;
  }
  get name(){
    return `${this.drink.name} with ${this.amount}g of honey`;
  }
  get price(){
    const honeyPrice = 0.5;
    return this.drink.price + honeyPrice * this.amount;
  }
  prepare(){
    console.log(`Preparing ${this.name} with honey`);
  }
}
console.log("Task 4 ====================================");

// Creating a base drink object (tea)
let tea = new Drink();
console.log(tea.name); // Outputs the name of the drink
console.log(tea.price); // Outputs the price of the drink
tea.prepare(); // Prepares the drink

// Adding a honey decorator to the tea
let honeyTea = new HoneyDecorator(tea, 2); // Adds 2 grams of honey
console.log(honeyTea.name); // Outputs the new name of the drink
console.log(honeyTea.price); // Outputs the new price of the drink
honeyTea.prepare(); // Prepares the drink with honey
