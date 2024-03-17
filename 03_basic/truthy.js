const userEmail = ""

if (userEmail) {
    // console.log("Got user email");
} else {
    // console.log("Don't have user email");
}

// false value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 


// ture values
// ture, "0", 'false', " ", [], {}, function(){}


if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish coalescing Operator (??) : null, undefined

let vali;
// vali = 5 ?? 10
// vali = null ?? 10
vali = undefined ?? 14

console.log(vali);