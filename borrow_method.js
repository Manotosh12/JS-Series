const ms = {
    firstName : "Motu",
    lastName : "banurjee",
    role : "Admin",
    courseCount : 3,
    getInfo : function() {
        console.log(`
        First name is ${this.firstName}  // this keyword is pointed to ms object
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    },
};  // run it in window and type ms then enter
// you can see there is prototype which is for the whole object and another one getinfo proto which is the functions proto attached in object
const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "Sub-Admin",
    courseCount : 4,
};
ms.getInfo();

// Borrow a method from another method using bind keyword

ms.getInfo.bind(dj)();  // here actually this keyword pointed to the dj object using bind keyword
// another way we can execute above one using reference
var djInfo = ms.getInfo.bind(dj);
djInfo();

// call actually directly call not required of reference
ms.getInfo.call(dj);   //call keyword