/* Arrays are Objects :
        Arrays are a specia type of objects. The typeof operator in JavaScript returns "object" for arrays.

        But, JavaScript arrays are best described as arrays.

        Arrays use numbers to access its "elements". In this example, person[0] returns John:*/

const person = ['John', 'Doe', '46'];

console.log(person);

// Objects use names to access its "members". In this example, person.firstName returns John:

//---  Object :

const person = { firstName: 'Kaushal', lastName: 'Damani', Age: '19' };

console.log(person.Age);

/* Array Elements Can Be Objects :-

        JavaScript variables can be objects. Arrays are special kinds of objects.

        Because of this, you can have variables of different types in the same Array.

        You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
        */

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

/* Array Properties and Methods :-
            The real strength of JavaScript arrays are the built-in array properties and methods:
            
            cars.length   // Returns the number of elements
            cars.sort()   // Sorts the array

            // Array methods are covered in the next chapters.


            
            */
