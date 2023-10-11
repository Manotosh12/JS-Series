//...args: this also a spread & rest operator

var returnValue = Math.max(2,5,7,4,2,8,9);
console.log(returnValue);

var myObjeect = {};
Object.assign(myObjeect, {a:1, b:2,z:5, y:6});
console.log(myObjeect);


function sumOne(a,b){
    return a+b;
}
console.log(sumOne(5,4));
// if we want to pass the parameter through a array in the function it cant be possible
var myA = [5,4];
// console.log(sumOne(myA));  //it cant be work as its a array passes through the parameter

// spread operator will work witn array,object & many more
// to overcome this situation and to passes the array as parameter we use spread operator, syntax: ...name
console.log(sumOne(...myA));   // spread operator // it separates the array in individual  


// now if we want to passes a bunch of numbers through the parameter in a function
//rest operator
function sumTwo(...args){     //rest operator: ...args    // args may be any name
    console.log(args);  //in rest operator it combines them in a array
    let sum=0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}
console.log(sumTwo(2,3,4,5,6,7));

// actually we can pass them individual also to do other operation 
function sumthree(a,b,c,...args){     //a,b,c come individual
    console.log(args);  
    let sum=0;
    let multi = a*b*c;
    for (const arg of args) {
        sum += arg;
    }
    return [sum, multi];
}
console.log(sumthree(2,3,4,1,1,1));      // here a,b,c passes individual
