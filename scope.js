// let uses much in backend as much and gives the error not like var it gives the undefined & not var not gives the error
// so for requirement of error we use let keyword

// {}: this is not scope like other lang
// for JS function is a Scope 

console.log(name);
var name = "motu";
// let name = "motu";


if(true){
    var lastName = "chitial"
    // let lastName = "Tar Kata"   // solution for maintaing scoping is use let keyword then it gives the Error
    console.log(lastName);
}
console.log(lastName);   // in other lang it dont gives the value for scoping but for JS it gives as this is not a scope


// for (let index = 0; index < array.length; index++) {    // see that the Js gives the initializer as let not var or const
//     const element = array[index];
    
// }
