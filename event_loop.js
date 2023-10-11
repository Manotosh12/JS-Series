// in the web page some things are thier who takes a bit of time to load where some others are thier
//who dosen't take much time to load at the time EVENT LOOP cames in
// it says who takes less time they load at first the rest who takes much time they load after that like in a Queue formation

const uno = () => {
    console.log("I am one");
};
const dos = () => {
    setTimeout(() => {
        console.log("Wohooo");
    }, 3000);
    console.log("I am two");
};
const tres = () => {
    console.log("I am three");
};

uno();
dos();
tres();


