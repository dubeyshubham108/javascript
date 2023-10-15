const accountId = 1333232
let accountEmail = 'shubham@spacex.com'
var accountPassword = "12345"
accountCity = "Akola"
let accountState;

// accountId = 12 //Not allowed 
accountEmail = "sd@sd.com"
accountPassword = "12134"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])