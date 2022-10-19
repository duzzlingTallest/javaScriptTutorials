/* -->  String Length :- To find length of a string, use to built-in length property.

    --> It also calculate 'space' between word. 
*/

const text = "My Name Is kaushal Damani";

console.log(text.length);

/*  -->  Escaps Character :- Because sstring must be written within quotes, JavaScript will misunderstand this string.
 */

// this type of code create error.

const text = "We are the so-called "Viking" from the north.";

console.log(text);

// -----> but when use the '',\',\",",\\,\ this quotes so we can run easily.

const text = "We are the so-called 'Viking' from the north.";

console.log(text);

// --->  The sequence \' insert a single quote in a string :

const text= 'It\'s alright.';

console.log(text);

// ---> The sequence \\ insert a backlash in a string.

const text = 'The charecter \\ is called backslash.';

//   when you insert one backslash in string so it's create a ERROR. LIKE THUS ---> const text = 'The charecter \\ is called backslash.';

console.log(text);

/*Six other sequence are valid in javascript : */

// \b == Backspace
// \f == From Feed
// \n == New Line 
// \r == Carriage Return
// \t == Horizonal Tabulator
// \v == Vertical Tabulator