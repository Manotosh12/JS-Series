function sayHello(name){
    console.log("hello");
    console.log(`Hello, ${name}. how are u?`);
}

sayHello("ms");
sayHello("mmmm");


// Functions in Variable

function namstey(){
    return "hello in india";
}

var greeting = namstey();
console.log(greeting);
console.log(namstey());



// Functions in Variable
var getUserRole = function (name,role){          //here actually we store the function in a variable
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break;  //this not neccessary
        case "subadmin":
            return `${name} is subadmin with access`;
            break;
        case "testprep":
            return `${name} is testprep with access`;
            break;    
        case "user":
            return `${name} is user to consume`;
            break;     
        default:
        return `${name} is user to consume `;
        break;
    }
}

console.log(getUserRole("ms", "testprep"));
