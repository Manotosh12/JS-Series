const courses = [
    {
        name : "Complete ReactJS course",
        price :  "2.3",
    },
    {
        name : "Complete Angular course",
        price :  "2.1",
    },
    {
        name : "Complete MERN course",
        price :  "2.7",
    },
    {
        name : "Complete C++ course",
        price :  "2.8",
    }
];

// we just make the below html code with JS and then inject in the html code at line no:16
{/* <ul class="list-group">
        <li class="list-group-item">
          Javascript course<span class="float-right">$2.1</span>    
        </li>
      </ul> */}


function generateLIST(){
    const ul = document.querySelector(".list-group");       // through queryselector(".class_name") we select ul tag with call name: .list-group
    ul.innerHTML = "";      // without using this we cant remove the repiteting statement
    courses.forEach((course) => {       // for each use to traverse in every array element
        const li = document.createElement("li");            // .createElement(tag_name) just create a <tag_name></tag_name>
        li.classList.add("list-group-item");     // to add the li const in html we use .classList.add(class_name)

        const name = document.createTextNode(course.name);    // as per we know course-name is textnode to create it we use .createTextNode(array.element)
        li.appendChild(name);     // to add or append it in the li tag we use .apppendChild

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span)
        ul.appendChild(li)
    }); 
}

// generateLIST();    // like the below one is also same
// if someone wants that the elements should visible when the browser is load then we execute with EventListner
// since its work on window so we use window keyword
window.addEventListener("load", generateLIST);


// if we want to sorted the courses according their pricing
const button = document.querySelector(".sort-btn")
button.addEventListener("click", () => {
    courses.sort((a,b) => a.price - b.price)    //sort is a inbuilt method by JS (a-b) in acsending order take a look on sort method 
    generateLIST();
});

