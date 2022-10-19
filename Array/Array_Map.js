/*
    JavaScript Array map() :-
The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.

This example multiplies each array value by 2:
*/

const num1 = [45, 4, 9, 16, 25];
const num2 = num1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

console.log(num2);

/*
Note that the function takes 3 arguments:

    The item value
    The item index
    The array itself
When a callback function uses only the value parameter, the index and array parameters can be omitted:
*/

const num1 = [45, 4, 9, 16, 25];
const num2 = num1.map(myFunction);

function myFunction(value) {
  return value * 2;
}

console.log(num2);

/* 
   JavaScript Array filter() :-
        The filter() method creates a new array with array elements that pass a test.

        This example creates a new array from elements with a value larger than 18:
*/

const num = [45, 4, 9, 16, 25];
const over18 = num.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(over18);

/*
    Note that the function takes 3 arguments:

    The item value
    The item index
    The array itself

In the example above, the callback function does not use the index and array parameters, so they can be omitted:
*/

const num = [45, 4, 9, 16, 25];
const over18 = num.filter(myFunction);

function myFunction(value) {
  return value > 18;
}

console.log(over18);

/* 
    -->JavaScript Array reduce()   
The reduce() method runs a function on each array element to produce (reduce it to) a single value.

The reduce() method works from left-to-right in the array. See also reduceRight().
*/

//  The reduce() method does not reduce the original array.

// This example finds the sum of all numbers in an array:

const num = [45, 4, 9, 16, 25];
let sum = num.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

console.log(sum);

/*
Note that the function takes 4 arguments:

The total (the initial value / previously returned value)
    - The item value
    - The item index
    - The array itself
The example above does not use the index and array parameters. It can be rewritten to:
*/

const num = [45, 4, 9, 16, 25];
let sum = num.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}

console.log(sum);

// The reduce() method can accept an initial value:

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}

console.log(sum)

/*
  --->  JavaScript Array reduceRight() :-
            The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

            The reduceRight() works from right-to-left in the array. See also reduce().
*/

//   The reduceRight() method does not reduce the original array.

//  This example finds the sum of all numbers in an array:

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

console.log(sum)
 
/* 
Note that the function takes 4 arguments:

    - The total (the initial value / previously returned value)
    - The item value
    - The item index
    - The array itself
The example above does not use the index and array parameters. It can be rewritten to:
*/

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}

console.log(sum)

/* 
    JavaScript Array every() :-
        The every() method checks if all array values pass a test.

        This example checks if all array values are larger than 18:
*/

const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value,index,array) {
    return value > 18;
}

console.log(allOver18)






