// --->  JavaScript String Padding :-

//  ECMAScript 2017 added two String methods: padStart() and padEnd() to support padding at the beginning and at the end of a string.

//   ---> JavaScript String padStart() :-

// --->  The padStart() method pads a string with another string:

let text = "5";

console.log(text.padStart(4,"x"))

//  2).  code

    let text = "7";
    console.log(text.padStart(4,"0"))

      /*  ===> Note
The padStart() method is a string method.

To pad a number, convert the number to a string first.

See the example below.*/


  const numb = " 5";
  //const text = numb.toString();

  console.log((numb.padStart(4,"0")))