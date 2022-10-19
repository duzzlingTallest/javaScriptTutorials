/*
        "I Promise a Result!"

"Producing code" is code that can take some time

"Consuming code" is code that must wait for the result

A Promise is a JavaScript object that links producing code and consuming code
*/

/*
    JavaScript Promise Object :-
A JavaScript Promise object contains both the producing code and calls to the consuming code:
*/

let myPromise = new Promise(function(resolve,reject){
    // "producing code"(May take some time)

    resolve(); // when successful
    reject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)

myPromise.then(
    function(value) {/* code if successful */},
    function(error) {/* code if some error */}
);

/*
    When the producing code obtains the result, it should call one of the two callbacks:

    Result  --->  Call
    Success	---> myResolve(result value)
    Error	---> myReject(error object)
 */

/*
    Promise Object Properties
A JavaScript Promise object can be:

- Pending
- Fulfilled
- Rejected

The Promise object supports two properties: state and result.

While a Promise object is "pending" 
(working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.

myPromise.state ---> myPromise.result
"pending"       ---> undefined
"fulfilled"	    ---> a result value
"rejected"	    ---> an error object
You cannot access the Promise properties state and result.

You must use a Promise method to handle promises.

Promise How To :-
Here is how to use a Promise:
*/

myPromise.then(
    function(value) {/* code if successful */},
    function(error) {/* code if some error */}
);

/*
    Promise.then() takes two arguments, a callback for success and another for failure.

    Both are optional, so you can add a callback for success or failure only.
*/

// Example :-

function disp(data) {
    console.log(data);
}

let mypromise = new Promise(function(res,rej){
    let x = 0;

    // The producing code (this may take some time)

    if(x == 0) {
        res("OK");
    }
    else {
        rej("Error");
    }
});

mypromise.then(
    function(value) {disp(value);},
    function(error) {disp(error);}
);

/*
    JavaScript Promise Examples:-
To demonstrate the use of promises, we will use the callback examples from the previous chapter:

    - Waiting for a Timeout
    - Waiting for a File
*/

// Waiting for a Timeout.

// Example Using Callback :-

setTimeout(function(){myFunction("I Love You!!!");},3000);

function myFunction(value) {
    console.log(value);
}

// Example Using Promise :-

let myPromise = new Promise(function(res,rej) {
    setTimeout(function() { res("Kaushal Damani....!")},3000);
});

myPromise.then(function(value) {
    console.log(value);
});

// Waiting for a file :-
  // Example using Callback :-

  // error avve chhe

  function getfile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "myfile_kkd.js");
    req.onload = function() {
        if (req.status == 200) {
            myCallback(req.responseText);
        }
        else {
            myCallback("Error: " + req.status);
          }
          req.send();
    }
  }

  getFile(myDisplayer);

  // Example using Promise :-

  let myPromise = new Promise(function (res,rej) {
    let req = new XMLHttpRequest();
    req.open('GET',"myfile_kkd.js");
    req.onload = function() {
        if (req.status == 200) {
            myResolve(req.response);
          } else {
            myReject("File not Found");
          }
        };
        req.send();
      });
      
      myPromise.then(
        function(value) {myDisplayer(value);},
        function(error) {myDisplayer(error);}
      );