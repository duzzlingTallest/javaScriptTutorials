// Merging (Concatenating) Arrays :- 

// The concat() mmethod creates a new array by merging (concatenating) existing arrays :

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["E-mail", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren)

//  The concat() method does not change the existing arrays. It always returns a new array.

// The concat() method can take any number of array arguments:

// Example (Merging Three Arrays) :

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);

console.log(myChildren)

// The concat() method can also take strings as arguments:


// Example (Merging an Array with Values) :

const arr1 = ["E-mail", "Tobias", "Linus"];
const myChildren = arr1.concat("peter");

console.log(myChildren)

// Splicing and Slicing Arrays :=

/* --->  The splice() method adds new items to an array.

   ---> The slice() method slices out a piece of an array.*/


   /* JavaScript Array splice() :-
        The splice() method can be used to add new items to an array:*/

        const fruits = ["Banana", "Orange", "Apple", "Mango"];

        fruits.splice(2, 0, "Lemon", "Kiwi");

        console.log(fruits)

        // OutPut :-

        //[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

/*
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 2, "Lemon", "Kiwi");

console.log(fruits)

// Using splice() to Remove Elements :-
/*     With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(0,1);

console.log(fruits)


/* 
The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added.
*/


/* 
~~~>   JavaScript Array slice() :-
        The slice() method slices out a piece of an array into a new array.

        This example slices out a part of an array starting from array element 1 ("Orange"):
*/


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

console.log(fruits.slice(1))


/* Note :-
The slice() method creates a new array.

The slice() method does not remove any elements from the source array.*/

// This example slices out a part of an array starting from array element 3 ("Apple"):


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

console.log(fruits.slice(3))

/* 
The slice() method can take two arguments like slice(1, 3).

The method then selects elements from the start argument, and up to (but not including) the end argument.
*/

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

console.log(fruits.slice(1,3))

/* 
If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
*/

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

console.log(fruits.slice(2))


/* 
JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

This is always the case when you try to output an array.

These two examples will produce the same result:
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.toString())


/* 
Note
All JavaScript objects have a toString() method.

Finding Max and Min Values in an Array
There are no built-in functions for finding the highest or lowest value in a JavaScript array.

You will learn how you solve this problem in the next chapter of this tutorial.

Sorting Arrays
Sorting arrays are covered in the next chapter of this tutorial.
*/








