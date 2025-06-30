class Student {
  constructor(name, roll, marks) {
    this.name = name;
    this.roll = roll;
    this.marks = marks;
  }

  getGrade() {
    return this.marks >= 90 ? "A" :
           this.marks >= 75 ? "B" :
           this.marks >= 50 ? "C" : "F";
  }
}

const s1 = new Student("Aman", 1, 82);
console.log(`${s1.name} Grade:`, s1.getGrade());


class BankAccount {
  #balance = 0;

  constructor(accountHolder) {
    this.accountHolder = accountHolder;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount("Jigar");
acc.deposit(500);
acc.withdraw(200);
console.log("Balance:", acc.getBalance());

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class Cart {
  constructor() {
    this.items = [];
  }

  addProduct(product) {
    this.items.push(product);
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

const cart = new Cart();
cart.addProduct(new Product(1, "Shirt", 499));
cart.addProduct(new Product(2, "Shoes", 999));

console.log("Cart Total:", cart.getTotal());

class Vehicle {
  constructor(brand, pricePerDay) {
    this.brand = brand;
    this.pricePerDay = pricePerDay;
  }

  rent(days) {
    return this.pricePerDay * days;
  }
}

class Car extends Vehicle {
  constructor(brand) {
    super(brand, 1000);
  }
}

const car1 = new Car("Honda");
console.log("Rent:", car1.rent(3));
