const accountId =852456
let accountEmail = "paresh@google.co.in"
var accountPassword = "123456"
accountCity = "Nagpur"

// accountID = 6 //not allowed

accountEmail = "qwerty@co.in"
accountPassword = "7789645"
accountCity = "Burhanpur"

console.log(accountId);

/*
Prefer not to use var 
bcoz of issue with block scope and functional scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity])
