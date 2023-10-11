var users = ["ms","sb","mm", "ss","hh", "kk"];

// starting range are inclusive & ending range is exclusive
// slice syntax --> array.slice(start range, end range) : slicing mean tu sliced_in a number of values from array within a range(output values are outer the range)

console.log(users.slice(1,5));

// we can sliced_off a number of values(we actually cut that number of valuse when we pass only one number not the range in:  array.slice(number)

console.log(users.slice(1));
// console.log(users.slice(3));
console.log(users.slice(users.length - 1));



// splice syntax: array.splice(start_index, count(which will cut it off) , new value(which will replaced) )
// in splice actully we actually replacing new value with deleting a number of countable values 
 users.splice(1,3,"motu");
// users.splice(2,2,"motu");

// we can add desired values as much as we want
// users.splice(1,3,"motu","volu");
// users.splice(1,3,"motu","volu","tar kata");


//array.splice(number): mean that number of element will only exist other will deleted
users.splice(2);



console.log(users);