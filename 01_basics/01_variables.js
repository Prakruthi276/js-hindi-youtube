const accountId=144553
let accountEmail="prakruthi@google.com"
var accountPassword="12345"
accountCity="Jaipur"
//accountId=2// not allowed
accountEmail="hc@ff.com"
accountPassword="2335367"
accountCity="taaa"
console.log(accountId);
/*
prefer not to use var
beacuse of issue in block scope and functionms 
*/
console.table([accountId,accountEmail,accountPassword,accountCity])