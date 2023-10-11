class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    courseList = [];
    getInfo(){
        return {name: this.name, email: this.email };
    }
    enrollCourse(name){
        this.courseList.push(name);
    }
    getCourseList(){
        return this.courseList;
    }
}

// Object creation 
const ms = new User("motu", "motu@gmail.com");
console.log(ms.getInfo());
ms.enrollCourse("React");
ms.enrollCourse("Angular");
console.log(ms.getCourseList());

// print courses individually
let courses = ms.getCourseList();
courses.forEach((c) => console.log(c));


//export Module , we can create a class in one file and can fetch that in other file 
// see module.js file for the code
module.exports = User;


