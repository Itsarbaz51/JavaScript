// singleton 
// Object literals

// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "arbaz",
    "full name": "arbazkhan",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "arbaz@gamil.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Saturday"],
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);


Jsuser.email = "ak@gamil.com";
// Object.freeze(Jsuser);
Jsuser.email = "khan@gamil.com"
// console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("hello JS user");
}


Jsuser.greetin2 = function(){
    console.log(`hello JS user ${this.name}`);
}

console.log(Jsuser.greetin2());
console.log(Jsuser.greeting());