// ----> JavaScript Arrow Function :-

/* 
 Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:  
*/

let myFunction = (a,b) => a*b;

console.log(myFunction(4,5))

// Before Arrow :-

hello = function () {
    return "Hello World!"
}

console.log(hello())

// With Arrow function :-

hello = () => {
    return "Hello World!"
}

console.log(hello())

/*
It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword
*/

// Arrow Function Return Value by default :-

hello = () => "Hello World!";

console.log(hello())

/*
    Note: This works only if the function has only one statement.
*/

/*
If you have parameters, you pass them inside the parentheses:
*/

// Arrow function With parameters :-

hello = (val) => "Hello " + val;

console.log(hello("Univers!!"))

//  In fact, if you have only one parameter, you can skip the parentheses as well:

hello = val => "Hello " + val;

console.log(hello())


