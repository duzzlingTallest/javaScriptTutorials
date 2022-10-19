// ---> JavaScript String concat().  <---

// 1} MATHODE

// concat() joins two or more string : 

// EX:-

  const text1 = "Hello";
  const text2 = "World";

  console.log(text1.concat("",text2))

// 2} MATHODE

// The concat() method can be used instead of the plus operator. These two lines do the same:

//EX:-

   text ="Hello" + " " + "World!";

    console.log("Hello".concat(" ","World!"));

// NOTE:-  

/* All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced.
*/

// ---> JavaScript String trim(). <---

// --> The trim() method removes whitespace from both sides of a string:

let text1 = "     Hello World!!       ";

console.log(text1.trim())


// --->  JavaScript String trimStart() :-

/*   --->ECMAScript 2019 added the String method trimStart() to JavaScript.

   --->  The trimStart() method works like trim(), but removes whitespace only from the start of a string. */

   const text1 = "            Hello World!     ";
   console.log(text1.trimStart())


   // ---> JavaScript String trimStart() is supported in all browsers since January 2020:

