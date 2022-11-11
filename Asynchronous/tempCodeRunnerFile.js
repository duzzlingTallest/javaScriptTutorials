
function myDisplayer(some) {
    console.log(some);
}

function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET',"mycar.js");
    req.onload= function() {
        if(req.status == 200) {
            myCallback(this.responseText)
        } else {
         myCallback("ERROR: " + req.status);
        }
    }
    req.send();
}
getFile(myDisplayer);