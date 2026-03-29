const accountId = 14453
let accountEmail = "arbab@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2   // not allowed to reassign the value

accountEmail = "arbab123@gmail.com"
accountPassword = "1212121"
accountCity = "Noida"

// prefer not to use var 
//  because of issue in block scope and functional scope

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
