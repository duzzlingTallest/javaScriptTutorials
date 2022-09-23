/* Converting Arrays to Strings:-
        The JavaScript method toString() converts an array to a string of (comma separated) array values.*/

        const fruits = ["Banana","Orang","Apple","Mango"];
        
        console.log(fruits.toString())

        /* The join() method also joins all array elements into a string.

        It behaves just like toString(), but in addition you can specify the separator:*/

    const fruits = ["Banana", "Orange","Apple","Mango"];

    console.log(fruits.join(" * "))


/* Popping and Pushing :-
        When you work with arrays, it is easy to remove elements and add new elements.

        This is what popping and pushing is:

        Popping items out of an array, or pushing items into an array.*/


// JavaScript Array pop() :-

// The pop() method removes the last element from an array:

    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    console.log(fruits.pop())

// The pop() method returns the value that was "popped out":


const fruits = ["Banana", "Orange", "Apple", "Mango"];
 
let fruit = fruits.pop();

console.log(fruits)

// JavaScript Array push()
//       The push() method adds a new element to an array (at the end):     

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push("Kiwi")

console.log(fruits)

// The push() method returns the new array length:

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let length = fruits.push("Kiwi");

console.log(length)
console.log(fruits)

/* Shifting Elements :-
        Shifting is equivalent to popping, but working on the first element instead of the last.*/


/*JavaScript Array shift() :-
        The shift() method removes the first array element and "shifts" all other elements to a lower index. */

        const fruits = ["Banana", "Orange", "Apple", "Mango"];

        console.log(fruits.shift())
        console.log(fruits.toString())

// The shift() method returns the value that was "shifted out":

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.shift())
console.log(fruits)

/*JavaScript Array unshift() :--
        The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements: */

// The unshift() method returns the new array length.


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon")

console.log(fruits)


/* Changing Elements :_
        Array elements are accessed using their index number:

Array indexes start with 0:

[0] is the first array element
[1] is the second
[2] is the third ...*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi"

console.log(fruits);


/* JavaScript Array length :-
        The length property provides an easy way to append a new element to an array:*/

        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits[fruits.length] = "Kiwi";

        console.log(fruits)

    /* JavaScript Array delete() :-
            Warning !
Array elements can be deleted using the JavaScript operator delete.

Using delete leaves undefined holes in the array.

Use pop() or shift() instead.*/    

const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];

console.log(fruits)





