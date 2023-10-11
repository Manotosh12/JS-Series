// in cor c++ we using function call after function definiton but in js we can write function call before definition
sayHello();
function sayHello(){
    console.log("say hello");
}

// Global context & execution context
// whenever we write the function that's the part of global context 
// when we call the function that's the part of execution context

//Execution context -->  Varible object , Scope Chain , this keyword
// Rule of context --> 1. function declarations are scanned and made available
                    //2. Variable declarations are scanned and made undefined
                                
tipper("80");
function tipper(a){
    var bill = parseInt(a);       //if you are giving a string value then as well it converts the value in integer
    console.log(bill + 5);
}

//we have seen earlier that we can use function call before definition but this code will give Error
//cause the function is like treated as variable so in context actually function are globally sccaned but when it variable it not scanned globally

//error:

// bigTipper("200");
// var bigTipper = function(a){
//     var bill = parseInt(a);
//     console.log(bill + 15);
// }

//2. Variable declarations are scanned and made undefined
// how the variable undefined


console.log(Name);
var Name = "mono";
