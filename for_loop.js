// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

const mystates = [
    "mp",
    "up",
    "mm",
    1947,
    "tamil",
    "nadu",
];

for(let i= 0; i<mystates.length; i++){
    if(typeof mystates[i]!== "string"){     // we only want to print string value using continue
       continue;
    }
    console.log(mystates[i]);
}