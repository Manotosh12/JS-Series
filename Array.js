// array syntax

var countries = ["india","usa","japan"];
console.log(countries);

// syntax with new 
var states = new Array("mp","up","jp");

console.log(states);
console.log(states[1]);

console.log(states.length);  // array length

// replace 
states[0] = "sampuri";
console.log(states);

//we can store multiple datatypes of value in an array
var user = ["ms","ms@gmail",3,34,true];
console.log(user);

//pop
user.pop();
console.log(user);
//push
user.push("motu");

// add value in front of array
user.unshift("new value");    //it's expensive to use
console.log(user);

//remove element from front
user.shift();
console.log(user);

//searching elements are in which index
console.log(user.indexOf(3));

//if the elements are not in the array then it returns -1
console.log(user.indexOf("new"));


//if we want convert a string in array that can be possible with using " .from"
console.log(Array.from("manotosh"));

