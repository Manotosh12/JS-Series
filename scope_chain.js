// you can ask for help from the bigger one not taking from the smaller one than you 
// you can take from your supirior but can't take from junior(except pakhi)
var name = "mono";
console.log("line no 4", name);

function sayName(){
    var name = "ms";
    console.log("line no 7", name);
    SayNameTwo();
    function SayNameTwo(){
        var name = "mm";
        console.log("line no 10", name);
    }
}
sayName();