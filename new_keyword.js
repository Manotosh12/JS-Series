// buliding a prototype
// creating prototype use uppercase
var User = function(firstName,courseCount){
    this.firstName = firstName;      // here with this keyword we actually creating a object
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    };
};
var motu =new User("motu", 2);    // as soon as u use new its not regular function call its actually a pointed a object 
console.log(motu);
var sam =new User("sam",1);
console.log(sam);