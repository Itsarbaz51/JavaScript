// for of

const arr =  [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const gree of greetings) {
    // console.log(gree);
}

//map

const map = new Map()
map.set('IN', 'India')
map.set('IN', 'India')
map.set('USA', 'United State of America')


// console.log(map);

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}


const myOBj = {
    'game1': 'NFS',
    'game2': 'Spiderman',
}

// for (const [key, value] of myOBj) {
//     console.log(key, ':-', value);
// }


