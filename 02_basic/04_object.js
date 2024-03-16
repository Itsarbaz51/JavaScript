// const tinderUser = new Object() //singleTan object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedin = false
// console.log(tinderUser);


const regularUser = {
    email: "ak@gmail.com",
    fullname: {
        userfullname:{
            firstname: "arbaz",
            lastname: 'khan',
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "ak@gmail.com",
    },
    {
        id: 1,
        email: "ak@gmail.com",
    },
    {
        id: 1,
        email: "ak@gmail.com",
    },
    {
        id: 1,
        email: "ak@gmail.com",
    }
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedin'));

const couse = {
    cousename: "js",
    price: "99",
    couseInstructor: "arbaz",
}

// couse.couseInstructor

const {couseInstructor: instructor} = couse
// console.log(couseInstructor);
console.log(instructor)

//json

// {
//     "name": "arbaz",
//     "cousename": "js in hindi",
//     "price": "free",
// }

// [
//     {},
//     {},
//     {},
// ]