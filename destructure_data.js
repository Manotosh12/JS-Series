// what ever datatype is in the right side same as should be in the left side
// destructuring happen with array, object and with many other

const user = ["ms" , 3 , "admin"];

// var role = user[2];
// var name = user[0];
// for separate storing value we can use the above one 
// but for the new concept we use destructuring data

var [name, courseCount, role] = user;
console.log(role);

//the commonly use of destructuring is use with object

const MyUser ={
    name: "motu",
    courseCount : 5,
    role : "admin",
};    
console.log(MyUser.courseCount);
//destructure object

const {name, courseCount, role} = MyUser;    //the destructure variable must be same with the object key otherwise it wont be work
console.log(role);