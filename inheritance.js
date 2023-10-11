class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    #courseList = [];
    getInfo(){
        return {name: this.name, email: this.email };
    }
    enrollCourse(name){       
        this.#courseList.push(name);
    }
    getCourseList(){      
        return this.#courseList;
    }
     // using static keyword we make method private
    // static login(){}
    login(){      
        return "You are logged in"
    }
}

//extends keyword is use for inheritance
class SubAdmin extends User{
    constructor(name,email){
        super(name,email);              //super keyword is used to invoke data memebers of super class
    }
    getAdminInfo(){
        return "I am subadmin"
    }
    login(){     // js gives the opportunity to ovveride it so this login method will work no the parent classes login method 
        return "login for admin only"
    }
}

const rock = new User("rock", "rock@gmail.com");
rock.enrollCourse("Angular");


const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());

