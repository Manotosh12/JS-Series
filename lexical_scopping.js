//init(): is a shortcut for initialization

function init(){
    // var firstName = "Motu";
    function sayFirstName(){
        console.log(firstName);
        // console.log(this.firstName);
    }
    sayFirstName();
}
init();
