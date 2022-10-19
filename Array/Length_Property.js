/* The length Property :-

            The length property of an array returns the length of an array (the number of array elements).*/

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

console.log(fruits.length);

// ---> The length property is always one more than the highest array index.

// Accessing the First Array Element :-

onst fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

console.log(fruits[0]);

//  Accessing the Last Array Element :-

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

console.log(fruits[fruits.length - 1]);

// Looping Array Elements :-
//          One way to loop through an array, is using a for loop:

// For loop :-

// program to display text 5 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
  console.log('Hii I Am Kaushal Damani');
}

// 2.

// program to display numbers from 1 to 5

const n = 5;

// looping from i = 1 to 5
// in each iteration, i is increased by 1
for (let i = 1; i<=n; i++){
   console.log(i);  // // printing the value of i
}

 // 3.

 // program to display the sum of natural numbers
let sum = 0;
const n = 100

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i;  // sum = sum + i
}

console.log('sum:', sum);


// 4.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

for (let i = 0; i < fLen; i++) {
      i +=fruits[i];
}

console.log(fruits)

// Adding Array Elements :- 

// The easiest way to add a new element to an array is using the push() method:

const fruits = ["Banana","Orange","Apple"];
const add = fruits.push('Lemon')

console.log(fruits,add)   // Adds a new element (Lemon) to fruits

// New element can also be added to an array using the length property:


/* WARNING !

      Adding elements with high indexes can create undefined "holes" in an array:
      */

      const fruits = ["Banana", "Orange", "Apple"];
      //fruits[6] = "Lemon"; 

      console.log(fruits,fruits[6] = "Lemon");
      
   /* Associative Arrays
         Many programming languages support arrays with named indexes.

         Arrays with named indexes are called associative arrays (or hashes).

         JavaScript does not support arrays with named indexes.

         In JavaScript, arrays always use numbered indexes.*/

const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;

   console.log(person.length); // Will return 3
   console.log(person[0]); // Will return "John"

/* WARNING !!
If you use named indexes, JavaScript will redefine the array to an object.

After that, some array methods and properties will produce incorrect results.*/

const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;

console.log(person.length); // will return 0
console.log(person[0]);  // Will return undefined  create ERROR

/* The Difference Between Arrays and Objects :- 
      In JavaScript, arrays use numbered indexes.  

      In JavaScript, objects use named indexes.

      Arrays are a special kind of objects, with numbered indexes.*/


/* When to Use Arrays. When to use Objects.
   JavaScript does not support associative arrays. 

   You should use objects when you want the element names to be strings (text).

   You should use arrays when you want the element names to be numbers.*/

   





