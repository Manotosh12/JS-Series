var User = function(firstName,courseCount){
    this.firstName = firstName;      
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    };
};
// if we wanted to create a new function for user like getfirstname 
//then we can create in above function but its not a good process
// so injecting a new prototype or unique function we use proto
User.prototype.getFirstname = function(){
    console.log(`first name is : ${this.firstName}`);      // if there is no firstName in the above user we get a error so for resolve this we use object chain
};  
var motu = new User("motu", 2);  
// console.log(motu);
motu.getCourseCount();
motu.getFirstname();  
var sam = new User("sam",1);
// console.log(sam);
sam.getCourseCount();
sam.getFirstname(); 


// object chain 
// if there is no firstName in the above user we get a error in created prototype so for resolve this we use object chain
// hasOwnProperty

if(motu.hasOwnProperty("firstName")){
    motu.getFirstname();
}



// run in window
// var x = {name: "ms"}
// x
//x.hasOwnProperty("name")    //check in proto -> hasOwnProperty()




// another style of create object
// var user ={
//     name: "",
//     getuserName: function(){
//         console.log(`user name : ${this.name} `);
//     }
// }
// var ms = Object.create(user);
// console.log(ms);
// ms.name = "ms";
// ms.getuserName();
