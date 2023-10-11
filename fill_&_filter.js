var testArray = [2,3,4,5,6,7,8,9];
// .fill --> actually fills the value with a new value with the existance value in array

// syntax --> .fill(new value, starting index, ending index)

// start range are inclusive & end range is exclusive
// console.log(testArray.fill(0));
console.log(testArray.fill("motu", 2, 6));   // end index is exclusive (it end on before that index) // inclusive(end on that index which is defined in code)

// we can use filter to delete or filterd the number in a certain range from an array & a lot of operation

const myNumber = [2,5,8,9,10,25,6,20,4];
// const result = myNumber.filter((num) => num !=10);
const result = myNumber.filter((num) => num>10);

console.log(result);