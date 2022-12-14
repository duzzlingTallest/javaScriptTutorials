// JavaScript Callbacks :-

/* 
   "I will call back later!"

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished

Function Sequence
JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

This example will end up displaying "Goodbye":
*/

function myFirst() {
  console.log('Hello');
}

function mySecond() {
  console.log('Goodbye');
}

myFirst();
mySecond();

// This example will end up displayimg "Hello";

function myFirst() {
  console.log('Hello');
}

function mySecond() {
  console.log('Goodbye');
}

mySecond();
myFirst();

/*
    Sequence Control
Sometimes you would like to have better control over when to execute a function.

Suppose you want to do a calculation, and then display the result.

You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:
*/

function myDisplayer(some) {
  // document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
console.log(result);

/* 
  Or, you could call a calculator function (myCalculator), and let the calculator function call the display function (myDisplayer):
*/

function myDisplayer(some) {}
function myCalculator(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
}

myCalculator(5, 5);

/*
  The problem with the first example above, is that you have to call two functions to display the result.

The problem with the second example, is that you cannot prevent the calculator function from displaying the result.

Now it is time to bring in a callback.
*/

// JavaScript Callbacks :-

/*
  A callback is a function passed as an argument to another function.
*/

/* 
  Using a callback, you could call the calculator function (myCalculator) with a callback, and let the calculator function run the callback after the calculation is finished:
*/

function myDisplayer(data) {
  console.log(data);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

/*
    In the example above, myDisplayer is the name of a function.

    It is passed to myCalculator() as an argument.
*/

/*
When you pass a function as an argument, remember not to use parenthesis.

Right: myCalculator(5, 5, myDisplayer);

Wrong: myCalculator(5, 5, myDisplayer());
*/

/*
  When to Use a Callback?
The examples above are not very exciting.

They are simplified to teach you the callback syntax.

Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

Asynchronous functions are covered in the next chapter.
*/