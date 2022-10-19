// --->  What is Array ?

/*   An array is a special variable, which can hold more than one value: */

//  Ex :-

const cars = ["Saab", "Volvo", "BMW"];

console.log(cars)

//  Why Use Arrays?

/*   If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:  */

const car1 = "Audi";
const car2 = "Volvo";
const car3 = "BMW";

/* However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300? */

// The solution is an array!

/*An array can hold many values under a single name, and you can access the values by referring to an index number.  */

// Creating an Array :-

// Using an array literal is the easiest way to create a JavaScript Array.

const cars = ["Saab", "Volvo", "BMW"];

console.log(cars)

/* It is a common practice to declare arrays with the const keyword.

Learn more about const with arrays in the chapter: JS Array Const. */

const cars = ["Saab", "Volvo", "BMW"];

console.log(cars)

// Spaces and line breaks are not important. A declaration can span multiple lines:

// EX :-

const cars = [
    "Saab",
    "Volvo",
    "BMW",
];

console.log(cars)


/* Using the JavaScript Keyword new :
           The following example also creates an Array, and assigns values to it:*/

const cars = new Array("Volvo","BMW","Skoda");

console.log(cars)

/*   --->  The two examples above do exactly the same.

      --->   There is no need to use new Array().

      --->  For simplicity, readability and execution speed, use the array literal method. */

      /* Accessing Array Elements : 
          You access an array element by referring to the index number:*/


          const cars =["Skoda","Volvo","BMW"]
          let car = cars[0];

          console.log(car)
    

        /*Note: Array indexes start with 0.

[0] is the first element. [1] is the second element. */


/* Changing an Array Element :- 
             This statement changes the value of the first element in cars:*/

             cars[0] = "ope1";

            // EX:-

            const cars = ["Skoda","Volvo","BMW"];
            cars[0] = "Opel";

            console.log(cars)

/*      Access the Full Array :-
            With JavaScript, the full array can be accessed by referring to the array name: */        
            
            const cars = ["Saab", "Volvo", "BMW"];

            console.log(cars)

            



