//  Replacing String Content :--
//        The replace() method replaces a specified value with another value in a string.....

    const text = "Please vist Microsoft";
    
    console.log(text.replace("Microsoft","Google"));

    /* Note :--  
        --->  The replace() method does not change the string it is called on.
        --->  The replace() method returns a new string.
        --->   The replace() method replaces only the first match
        --->   If you want to replace all matches, use a regular expression with the /g flag set. See examples below.*/

        // By default,the replace() method replaces only the first match :


        const text = "Please vist Microsoft";
    
    console.log(text.replace("Microsoft","Google"));

// ---> NOTE:-- By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

// --->  To replace case insensitive, use a regular expression with an /i flag (insensitive):

let text = "Please visit Microsoft!";

console.log(text.replace(/MICROSOFT/i,"Google"))


//  Note:-

//    Regular expressions are written without quotes.

// expressoins means ? :-/i, /g

// to replace all matches, use a regular expression with a /g flag(global match) :

let text ="please visit Microsoft and Microsoft!";

console.log(text.replace(/Microsoft/g,"Google"))

// NOTE :- 

//  You will learn a lot more about regular expressions in the chapter JavaScript Regular Expressions.





