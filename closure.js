function init(){
    var firstName = "Motu";
    console.log("i am init");
    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName();
}
var value = init();    // only first run it so we can see that only init comes in output where at init() holds the whole thing
value(); 



function doAddition(x){
    return function(y){
        return x+y;
    };
}

var add5 = doAddition(4);    //x=4 
console.log(add5(5)); //add5 holds reference of it and so on actually passes the value y=5

// no need to all time holds the reference
console.log(doAddition(5)(5));    //its called curring : ()()
