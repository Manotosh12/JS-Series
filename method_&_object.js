var user = {
    firstName: "mono",
    lastName: "saha",
    role: "admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName){        //method inside between objects              // Syntax: method_name: function() {}
        this.courseList.push(courseName);                                     // here this actually refers the same (user)object in which it exist
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} `
    },
};

var courseList = true;      // this no relatio with the line no: 7
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React js course");
console.log(user.getCourseCount());