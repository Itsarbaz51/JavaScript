const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 8
// console.log(Math.PI);

const course = {
    name: "JavaScript",
    price: 4999,
    isAvailable: true,

    order: function() {
        console.log("course is not available");
    }
}

console.log(Object.getOwnPropertyDescriptor(course, "name"));

Object.defineProperty(course, "name", {
    // writable: false,
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(course, "name"));

for (let [key, value] of Object.entries(course)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);   
    }
}