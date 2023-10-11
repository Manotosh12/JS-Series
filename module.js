// import User from " ./class";     //it actually use in modern framework but wont work for it 

//below syntax is for  import the module form the file class.js
const User = require("./class.js");

const motu = new User("motu","motu@mail");
console.log(motu.getInfo());
motu.enrollCourse("React");
motu.enrollCourse("Angular");
console.log(motu.getCourseList());

// print courses individually
let courses = motu.getCourseList();
courses.forEach((c) => console.log(c));



