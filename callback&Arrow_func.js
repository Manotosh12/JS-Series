// function in variable
var isEven = function(element){
    return element % 2 === 0;
}
console.log(isEven(2));


// replave this function in variable with the arrow function
// arrow function must have a return value

var isEven = (element) =>{
    return element % 2 === 0;
}
console.log(isEven(2));



// callback fn---> ".every"
// [2,4,6,8].every()
var result = [2,4,6,8].every(isEven);
console.log(result);

var result = [2,3,6,8].every(isEven);
console.log(result);

//callback syntax
// var result = array.operation((any_name) => { return   ______} );

var result = [2,4,6,8].every((e) => {
     return e % 2 ==0;
});
console.log(result);

// shortcut ---> whenever you not use the return then you remove the " {} "
// var result = array.operation((any_name) => () );

var result = [2,3,6,8].every((e) => (e % 2 == 0));
console.log(result);