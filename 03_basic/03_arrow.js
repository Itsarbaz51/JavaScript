const user ={
    username: "arbaz",
    price: 199,

    welcomeMessage: function() {
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai() {
//     console.log(this.username);
// }
// chai()


// const chai = function () {
//     const username = "arbaz"
//     console.log(this.username)
// }

// chai()


const chai = () => {
    let username= "arbaz"
    console.log(this);
}

// chai()


// const addtwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addtwo(2, 4))


//implisit
// const addtwo = (num1, num2) => num1+num2
// const addtwo = (num1, num2) => (num1+num2)
const addtwo = (num1, num2) => ({username: "arbaz"})
console.log(addtwo(2, 4))