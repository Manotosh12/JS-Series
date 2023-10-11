// with you can check the properties of any element
//Grab what colour in this element
//Query selector
// we will target all the element 

const red = document.querySelector(".red"); // .operator -> is for class
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// how can we found each of this background colour
// console.log(window.getComputedStyle(red).background); // run it in console
// console.log(window.getComputedStyle(red).backgroundColor); 

// using function

const getBgColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}
// console.log(getBgColor(pink));


// Event-> like click event , mouseover, dbclick

// gothrough mozila documentation

// var orangeElementColor = getBgColor(orange);
// event syntax: .addEventListner("event_name", callback)

// orange.addEventListener("mouseenter", () => {
//     center.style.background = orangeElementColor;
// });


// var color = getBgColor(pink);
// pink.addEventListener("click", () => {
//     center.style.background = color;
// });

//another process
const magicColorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    });
};

magicColorChanger(red,getBgColor(red));
magicColorChanger(cyan,getBgColor(cyan));
magicColorChanger(orange,getBgColor(orange));
magicColorChanger(pink,getBgColor(pink));
magicColorChanger(violet,getBgColor(violet));