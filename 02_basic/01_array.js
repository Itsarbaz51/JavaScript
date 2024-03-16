// array 

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["naagraj", "shaktiman"];

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[3]);

// array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();


// myArr.unshift(0);
// myArr.shift(0);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)


// slice, splice

console.log("A", myArr);

//slice array
const myyn1 = myArr.slice(1, 3)
console.log(`this is slice: ${myyn1}`);
console.log(myArr);
console.log("B", myArr);

//splice array 
const myyn2 = myArr.splice(1, 3)
console.log("C",myArr);
console.log(`this is splice : ${myyn2}`);