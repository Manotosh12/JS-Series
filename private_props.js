class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    //using # we make private
    #courseList = [];
    getInfo(){
        return {name: this.name, email: this.email };
    }
    enrollCourse(name){       // setter ,needs a parameter
        this.#courseList.push(name);
    }
    getCourseList(){      // its a getter ,dont require parameter & just return the value
        return this.#courseList;
    }
}

const rock = new User("rock", "rock@gmail.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular");
console.log(rock.getCourseList());
console.log(rock.courseList);
