/* 
--->  Sorting an Array :-
The sort() method sorts an array alphabetically:
*/


const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.sort())

/*
--->  Reversing an Array :-
The reverse() method reverses the elements in an array.

You can use it to sort an array in descending order:
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.sort())
console.log(fruits.reverse())

/* 
--->  Numeric Sort :-
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:
*/

const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});

console.log(points.sort(function(a, b){return a - b}))

// Use the same trick to sort an array descending:

const points =[40,100,1,5,25,10];

console.log(points.sort(function(a,b){return(b-a)}))

/* 
---> The Compare Function:-
The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:
*/

function(a, b){return a - b}

/* 
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative a is sorted before b.

If the result is positive b is sorted before a.

If the result is 0 no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

You can use this code snippet to experiment with numerically and alphabetically sorting:

<button onclick="myFunction1()">Sort
*/



const points = [40, 100, 1, 5, 25, 10];
    
    function myFunction1() {
            points.sort(function(a,b){return a-b});
            console.log(points)
        }   

    function myFunction2() {
        points.sort(function(a,b){return b-a})
        console.log(points)
    }    

    console.log(points)
    // console.log(myFunction2)


    //  Sorting an Array in Random Order :-

const points = [40, 100, 1, 5, 25, 10];

console.log(points.sort(function(){return 0.5-Math.random()}))
