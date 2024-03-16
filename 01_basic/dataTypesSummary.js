//  primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outSideTemp = null;
let userEmainl;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 222222222222222222222222220000000000000n

// Referencce (Non primitive)

// Array, Objects, Function

const heros = ["shaktiman","ironman","naagraj"]

let myObj = {
    name: "arbaz",
    age: 18,

}

let myFunction = function () {
    console.log("hello world");
}

// console.log(typeof myFunction);


// ****************************** memory ****************************

// Stack (Primitive), Heap (Non primitive)

let firstname = "arbaz"
let lastname = firstname;
lastname = "khan"

// console.log(firstname);
// console.log(lastname);


let user1 = {
    name: "arbaz khan",
    age: 18,
}

let user2 = user1;

user2.age = 22;

console.log(user1);
console.log(user2);
