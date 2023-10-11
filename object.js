// Object suntax:
// var ob_name = {
//     key(name): value (string,int,boolean);
// }



var user = {
    firstName: "mono",
    lastName: "saha",
    role: "admin",
    loginCount: 32,
    facebookSignedIn: true,
};

console.log(user);
console.log(user.firstName);    // we accessing object members with .operator
console.log(user["lastName"]);        //this also a method but we can access the members with[" member "]

// we can replace the member values
user.loginCount = 44;
console.log(user.loginCount);

console.table(user);