function sayMyName() {
    console.log("a");
    console.log("r");
    console.log("b");
    console.log("a");
    console.log("z");
}

// sayMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    
    return num1+num2
}

// console.log(res)
// console.log(addTwoNumbers(3, 3));


function loginUserMessage(username) {
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("arbaz"));
// console.log(loginUserMessage());

function calcualteCardPrice(val1, val2, ...number1) {
    return number1
}

// console.log(calcualteCardPrice(200, 300, 400, 2000))

const user = {
    username: "arbaz",
    price: 199,
}
function handleObj(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObj(user)
handleObj({
    username: "sam",
    price: 399,
});


const myNewArray = [200, 300, 400]
function returnSecoundvalue(getArray) {
    return getArray[2]
}

console.log(returnSecoundvalue(myNewArray))