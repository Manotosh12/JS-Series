// its like a constructional property like of prototype
// recently intro in js , its uses in looping concept
// map are not object its fully different

var myMap = new Map();
myMap.set(1, "Uno");                    // maps are not object but work like object
myMap.set(2, "dos");
myMap.set(3, "Trea");
myMap.set(4, "Cuatro");


console.log(myMap);

// in for_of key is first
for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}

for(let value of myMap.values()){
    console.log(`Value is ${value}`);
}

for(let [key,value] of myMap){
    console.log(`key is : ${key} and Value is ${value}`);
}

// in forEach value is first
myMap.forEach ((value) => console.log(`value is: ${value}`));

myMap.forEach((value, key) => console.log(`value is : ${value} and key is : ${key}`));

// delete value
myMap.delete(2);
console.log(myMap);





