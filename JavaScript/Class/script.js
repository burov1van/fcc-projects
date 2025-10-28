class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() { 
   return `Hi my name is ${this.name}, i am a ${this.age} years old`;
  }
}

const secondUser = new User("Ivan", 34)

console.log(secondUser)
console.log(secondUser.sayHello())
console.log(secondUser.name)

class Dessert {
  class = "sugar free";
  size = "normal"
  constructor(hasPeanuts) {
    this.hasPeanuts = hasPeanuts;
  }
}

const cake = new Dessert("cake")

console.log(cake);

const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");

const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total ");




const products = [
  {
    id: 1,
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },

    {
    id: 2,
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
    {
    id: 3,
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
    {
    id: 4,
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
    {
    id: 5,
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
    {
    id: 6,
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
    {
    id: 7,
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
    {
    id: 8,
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },





]

function integrier (n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
      result += i;
  }
  return result

}

console.log(integrier(5))