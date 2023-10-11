const uno = () => {
    return "I am one";
};
// const dos = () => {
//     setTimeout(() => {
//         return "i am two";
//     }, 3000);
// };

// promises are used in time of api call or when it request to any call to the browser

const dos = () => {    
    return new Promise((resolve,reject) => {                   //resolve: you getting an response from the web, reject:its like an error part
        setTimeout(() => {
            resolve("i am two");           // resolve & reject is like a method // resolve can return string,array,object
            //reject("i am two");
        },3000);
    });           
};


const tres = () => {
    return "I am three";
};

const callMe = async() => {
    let valOne = uno();
    console.log(valOne);

    let valTwo =await dos();            //awit: use for wait until this function call executed fully
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callMe();


