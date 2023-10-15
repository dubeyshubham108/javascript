// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2345234234234234435324324325435;
console.log(bigNumber);

// javascript is dynamically type language

// Reference Type(Non Primitive)

// Array, Objects, Functions, 

const heros = ["Shaktiman", "Naagraj", "Doga"]
console.log(heros);

let myObj = {
    name: "Shubham",
    city: "Akola",
}

console.log(myObj);

const myFunction = function() {
    console.log("Hello World!");
}

console.log(typeof bigNumber);