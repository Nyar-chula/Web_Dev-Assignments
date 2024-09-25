/// js for HTML DOM

paragraph = document.getElementById("p_benefits");
paragraph.innerHTML = "benefits altered by javascript.";
paragraph.style.color="white";

///read up on the other ways to fetch elements using  getElement keyword 
///e.g. tag name, class name, etc
// use React and js:advanced libraries to manipulate HTML DOMs

/// events: actions on webpage, clicks, cursor movement, keyboard movement. They are captured and manipulated i.e.react
/// used to modify searches on browsers...marketing thingy: data analytics
/// onclick, onkeypress, onmousemove, oninput used on any element to enhance interactivity with the user

function changeColour(element){
    element.style.color ="yellow";

}