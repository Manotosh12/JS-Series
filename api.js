//https://api.chucknorris.io/ ->url of chuknories site
// // fetch used to fatching data from api and itself its a promise
// fetch()    return data responses goes to the fetch lower then one after one in hirerchical order
// .then()   handled positive responses
// .then()  as many want to use .then()
// .catch()  for error

fetch('https://api.chucknorris.io/jokes/random')
.then(response => {          //response name may be anything
    // console.log("APi: ",response.json());
    return response.json();
})
.then((data) => {
    // console.log("data is: ", data);
    var joke = data.value;
    console.log("joke: ", joke);
})
.catch();

// run it in console