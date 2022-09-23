// JavaScript new Array() :--

/* javaScript has a built-in array constructor new Array().

But you can safely use [] instead.

These two different statements both create a new empty array named points:*/

const points = new Array();
const points = [];

// These two different statements both create a new array containing 6 numbers:

 const points = new Array(40, 100, 1, 5, 25, 10); //do not run togather cons
const points = [40, 100, 1, 5, 25, 10];

console.log(points[0])

// The new keyword can produce some unexpected results:\

// Create an array with three elements:
const points = new Array(40, 100, 1);

console.log(points)

// Create an array with two elements:
const points = new Array(40, 100);

console.log(points)

// Create an array with one element ???
const points = new Array(40); 

console.log(points)

/* A Common Error
        const points = [40];

        is not the same as:
    const points = new Array(40);*/

// Create an array with one element:
const points = [40];


/* How to Recognize an Array :-
        A common question is: How do I know if a variable is an array?

        The prob lem is that the JavaScript operator typeof returns "object":*/


        const fruits = ["Banana", "Orange", "Apple"];
        let type = typeof fruits;

        console.log(type)
    


