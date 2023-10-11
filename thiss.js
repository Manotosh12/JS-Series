// in vs code this keyword only gives a empty scope:{}   but in console it gives the window object


console.log(this);

// function sayName(){              // run it in window console
//     var name = "ms";
//     console.log(this);
// }
// sayName();

// For all regular function function calls, this points to window object (Global Object)

var user = {               // run it in console also to see that output 
    firstName: "Mono",
    courseCount: 4,
    getCourseCount : function (){
        console.log("Line 18", this);         // this is a object call that's why it's give the entire object according to the definition
        function sayHello(){
            console.log("Hi");
            console.log("Line 21", this);         // here it not actually maintain the definition in this situation its not holding any object ,so it's return the global object
        }
        sayHello(); 
    }
};

user.getCourseCount(); 