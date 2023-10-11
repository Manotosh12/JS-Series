// for of --> uses for arrays
// syntax: for (const any_name of array_name) {}


const names = ["youtube", " facebook", "instagram", " netflix"," amazon"];
for (const n of names){
    console.log(n);
}


// for in --> uses for object
// accessing the "key of the object" we use for in

const symbols = {
    yt: "you",
    fc: "face",
    ig: "insta",
    in: "link",
};

for (const n in symbols){
    console.log(n);    // accessing key
    console.log(symbols[n]);  // accesing values
    // console.log(`key is: ${n} and value is: ${symbols[n]}`);
}