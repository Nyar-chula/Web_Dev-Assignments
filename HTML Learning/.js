x=10;

var y = 15; /// use of keywords (key variables)

let course = "Web Development" // for global variables, use variable name = variable value
console.log(course);

const pi = 3.1452; /// for variables that do not change

console.log(x); 

//operators =(assignment)
//addition +
console.log(x+y);
//mutltiplication *
console.log(x*y);
//comparison > < equal to ==  
// to check equal value and equal data types use ===, both conditions must be met to return true

//modulus/modulo % , gives remainder after division
// increment/decrement ==/-- before the variable
// tenary operator ? you need a condition and expression 

// condition ? expression 1: expression 2
console.log(x > y ? 'Yes' : 'No' );
console.log(++x);
console.log(x>y); // returns true or false
console.log(pi===x);

//numbers: whole integers or decimals
//strings: characters
//boolean: true or False
// arrray: collection of related items
let fruits = ["apples","oranges","berries"]
console.log(fruits);
//objects use name value pair
let person ={name:"Eddy", course:"web", organization:"plp"}
//undefined has no value. it is different from empty/null data type denoted by blank quotations.
let subject;
console.log(subject);

//function: block of code for a task, can take several parameters, applied within the brackets. 
//Use Return keyword to get the output of the function 
//check out types of functions e.g. arrow functions and their syntax
function functionName(){

}
function addition(a,b){
    return a+b; // instruction to be executed
}

console.log(addition(100,200));
console.log(addition(20,30));


///charts and graphs for data visualization using chart.js

paragraph = document.getElementById("p_benefits");
paragraph.innerHTML = "benefits altered by javascript.";
paragraph.style.color="white";

function changeColour(element){
    element.style.color ="yellow";

}