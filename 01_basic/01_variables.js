const accountId = 12345;
let accountEmail = "arbaz@gamil.com";
var accountPassword = "12345678";
accountCity = "jaipur";
let accountState;


//accountId = 2 //noy allowed


// accountId = 111111;
accountEmail = "babu@gmail.com";
accountPassword = "11122233";
accountCity = "sikar";

console.log(accountId);

/*
Prefer not to use var
becouse of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountState, accountCity])