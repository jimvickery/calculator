console.log('inside calculator.js');

// Requirements

// Create an HTML file that has two input fields to accept the two numbers to perform operations on.
// Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
// In your JavaScript, put an event listener on each of the buttons.
// Copy the code below an implement a basic calculator.
// When the user performs one of the operations, output the result to another DOM element of your choice.

//palceholders for location of results
let sumPlaceholder = document.getElementById('sumNumber');
let subtPlaceholder = document.getElementById('subtrNumber');
let multiPlaceholder = document.getElementById('multNumber');
let divPlaceholder = document.getElementById('divNumber');

//placeholders for the buttons
let sumBtnPlaceHolder = document.getElementById('sumBtn');
let subtrBtnPlaceHolder = document.getElementById('subtrBtn');
let divBtnPlaceHolder = document.getElementById('divBtn');
let multiBtnPlaceHolder = document.getElementById('multiBtn');

//function to get input numbers
function getNumbers (){
numb1 = document.getElementById('number1').value;
numb2 = document.getElementById('number2').value;
}

/*

  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

 function calculatNumb(num1, numb2) {
   let product =  num1 * numb2;
   multiPlaceholder.innerHTML = product;
   return product;
 }

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function sumNumb(numb1, numb2) {
  let sum = parseFloat(numb1) + parseFloat(numb2);
  sumPlaceholder.innerHTML = sum;
      return sum;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtractNumb (numb1, numb2) {
  let difference =  numb1 - numb2;
  subtPlaceholder.innerHTML = difference;
  return difference;

}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divideNumb(numb1, numb2) {
  let division = numb1 / numb2;
  divPlaceholder.innerHTML = division;
  return division;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
// function runCalculator(numb1, numb2, event) {
//   if 
//   return  (numb1, numb2, event);
// }


//add event listeners on buttons and run appropiate function for each
sumBtnPlaceHolder.addEventListener('click', function(){
  getNumbers ();
  sumNumb(numb1, numb2);
}, false);

subtrBtnPlaceHolder.addEventListener('click', function(){
   getNumbers ();
  subtractNumb(numb1, numb2);
}, false);

divBtnPlaceHolder.addEventListener('click', function(){
  getNumbers ();
  divideNumb(numb1, numb2);
}, false);

multiBtnPlaceHolder.addEventListener('click', function() {
  getNumbers ();
  calculatNumb(numb1, numb2);
}, false);

