// JavaScript Classes :-

/*
    ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

    JavaScript Classes are templates for JavaScript Objects
*/

/*
    JavaScript Class Syntax :-
        Use the keyword class to create a class.

        Always add a method named constructor():
*/

// Syntax :-

class ClassName {
    constructor() { ... }
  }

  // Example :-

  class car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
  }

/*
    The example above creates a class named "Car".

    The class has two initial properties: "name" and "year".

    A JavaScript class is not an object.

    It is a template for JavaScript objects.
  */

/*
    Using a Class :-
        When you have a class, you can use the class to create objects:    
*/

class car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
 const myCar = new car("Ford",2014);

 console.log(myCar.name, myCar.year);

/*
    The example above uses the Car class to create two Car objects.

    The constructor method is called automatically when a new object is created.
*/

/*
    The Constructor Method :-
The constructor method is a special method:

It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties
If you do not define a constructor method, JavaScript will add an empty constructor method.
*/

/*
    Class Methods :- 
Class methods are created with the same syntax as object methods.

Use the keyword class to create a class.

Always add a constructor() method.

Then add any number of methods.
*/

// syntax :-

class ClassName {
    constructor() { ... }
    method_1() { ... }
    method_2() { ... }
    method_3() { ... }
  }

  //  Create a Class method named "age", that returns the Car age:

  class car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myCar = new car("Ford", 2014);
console.log("My car is " + myCar.age() + " years old.");


// You can send parameters to Class methods: 

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
        return x - this.year;
    }                                             
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);

console.log("My car is " + myCar.age(year) + " years old.");