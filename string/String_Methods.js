// --->  String Methods : it helps you to work with string.

/*String Methods and Properties :--
        Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).

        But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.

*/

    // ---> JavaScript String Length : The length property returns the length of a string :

    let txt ='abcdefghijklmnopqrstuvwxyz';
    let length =txt.length;

    console.log(txt.length);



    // Extracting String Parts :--

    // There are 3 methods for extracting a part of a string :


      // --> slice(start, end)
      // --> substring(start, end)
      // --> substr(start, Length)

        //  JavaScript String slice()\

// slice()  extract part of a string and return the extracted part in a new string. 


// Example :- 

/*Slice out a portion of a string from position 7 position 13 (13 not included) */


const fruites = ['Applm', 'Pitch', 'Waterrmalon', 'Banana', 'Kiwi'];


console.log(fruites.slice(1,4))

// ----> JavaScript String substring()

// -->  substring() is similar to slice().

// --> The difference is that start and end values less than 0 are treated as 0 in substring().

