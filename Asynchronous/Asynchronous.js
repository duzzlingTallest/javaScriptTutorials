/*
    "I will finish later!"

Functions running in parallel with other functions are called asynchronous

A good example is JavaScript setTimeout()
*/

/*
    Asynchronous JavaScript:-
        The examples used in the previous chapter, was very simplified.

        The purpose of the examples was to demonstrate the syntax of callback functions:
*/

function myDisplayer(somthing) {
    console.log(somthing);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

/*
    In the example above, myDisplayer is the name of a function.

    It is passed to myCalculator() as an argument.

    In the real world, callbacks are most often used with asynchronous functions.

    A typical example is JavaScript setTimeout().
*/

/*
Waiting for a Timeout :-
    When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:
*/

setTimeout(myFunction, 3000)

function myFunction() {
    console.log("Heyy Buddy !!")
}

/*
In the example above, myFunction is used as a callback.

myFunction is passed to setTimeout() as an argument.

3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds.

When you pass a function as an argument, remember not to use parenthesis.

Right: setTimeout(myFunction, 3000);

Wrong: setTimeout(myFunction(), 3000);

Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:
*/

setTimeout(function() {myFunction("Hey Buddy !!");}, 3000);

function myFunction(value) {
    console.log(value);
}

/*
    In the example above, function(){ myFunction("I love You !!!"); } is used as a callback. It is a complete function. The complete function is passed to setTimeout() as an argument.

    3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds.

    Waiting for Intervals:
When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:
*/

setInterval(myFunction, 1000);
 // upper code in Livetimehtml

/*
    In the example above, myFunction is used as a callback.

myFunction is passed to setInterval() as an argument.

1000 is the number of milliseconds between intervals, so myFunction() will be called every second.

    Waiting for Files:-
If you create a function to load an external resource (like a script or a file), you cannot use the content before it is fully loaded.

This is the perfect time to use a callback.

This example loads an HTML file (mycar.html), and displays the HTML file in a web page, after the file is fully loaded:

Waiting for a File:
*/

function myDisplayer(some) {
    console.log(some);
}

function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET',"mycar.js");
    req.onload= function() {
        if(req.status == 200) {
            myCallback(this.responseText)
        } else {
         myCallback("ERROR: " + req.status);
        }
    }
    req.send();
}
getFile(myDisplayer);