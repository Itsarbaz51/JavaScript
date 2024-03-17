const arr = [1, 2, 3, 4, 5]
// const total = arr.reduce((acc, curr) => {
//     console.log(`acc: ${acc} curr: ${curr}`);
//     return acc + curr
// },0)

const total = arr.reduce((acc, curr) => (acc + curr),0)

// console.log(total);


const shoppingCrad = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 2999
    },
    {
        itemName: "dataScience",
        price: 5999
    }
]

const priceToPay = shoppingCrad.reduce((acc, item) => (acc + item.price),0)
console.log(priceToPay);