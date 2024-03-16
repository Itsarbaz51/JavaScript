const name = "arbaz"
const repoCount = 10;

// console.log(name + repoCount);

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('arbaz');

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('b'));

const newString = gameName.substring(0 ,3);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   arbaz khan        "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://arbaz.com/arbaz%20khan"
console.log(url.replace('%20', '_'));
console.log(url.includes('arbaz'));

const nameOne = 'arbaz-khan-com'
console.log(nameOne.split('-'));

console.log(nameOne.at(3));
console.log(nameOne.anchor(nameOne));
console.log(nameOne.bold());


const number1 = new String('123')
console.log(number1);
console.log(number1.valueOf());