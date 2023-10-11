var sellingPrice= 199;
var listingPrice = 799;
var discountPercent = ((listingPrice- sellingPrice)/ listingPrice)*100;

console.log("Discount percentage:" + discountPercent);

displayDiscountPercentage= Math.round(discountPercent);
console.log(displayDiscountPercentage + "% off");



//type of operator check
console.log(typeof sellingPrice);

// conditional ternary operator
//syntax [ condition ? true/if : flase/else ]

var authenticated = true;

authenticated ? console.log("signout") : console.log("login");

// switch case

var a = 1;
switch (a) {
    case 1:
        console.log("hi");
        break;

    default:
        console.log("hello");
        break;
}