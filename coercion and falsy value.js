// falsy value's are : undefined, null, 0,'',  NaN
// this actually gave us false in ans


var user ;  //<-- undefined any value
var user = null;
user= '';
if (user){
    console.log("hello");
}


// coercion: for strict checking

var uid= "2";
if(2 == uid){            // here js treat the 2 as a string (convert 2 in string)cause it is compare with a string
    console.log("hiii");
}

// to overcome this mistake we use "Coercion: ==="
var uid= "2";
if(2 === uid){            // here js treat the 2 as a string cause it is compare with a string
    console.log("helloS");
}

