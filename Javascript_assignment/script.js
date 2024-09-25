// Declare variables of different data types
let Name = "John"; // String
let age = 25;      // Number
let isStudent = true;  // Boolean

// Log variable values to the console
console.log(Name);        
console.log(age);          
console.log(isStudent); 

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to divide two numbers
function divide(a, b) {
        return a / b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Test the functions and log the results
console.log(add(5, 3));          
console.log(subtract(10, 4)); 
console.log(divide(20, 4));     
console.log(multiply(7, 6));  

heading=document.getElementById('head_1');
heading.innerHTML = "Now adjusted by DOM.js";
heading.style.color ="purple";

function changeColour(element){
    element.style.color ="yellow";

}

buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightblue';
    });
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
});

// Initialize the Chart using Chart.js
ctx = document.getElementById('myChart').getContext('2d');
myChart = new Chart(ctx, {
    type: 'bar', 
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
