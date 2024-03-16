// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


// let myCreateDate = new Date(2024, 1, 21);
// let myCreateDate = new Date(2024, 1, 21, 5, 30);
// let myCreateDate = new Date("2024-01-21");
let myCreateDate = new Date("01-21-2024");
console.log(myCreateDate.toLocaleString());



let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getFullYear()} and the year`

console.log(newDate.toLocaleString('default', {
    calendar:"long",
    timeZone: ""
}));