
let myPromise = new Promise(function(res,rej) {
    setTimeout(function() { res("Kaushal Damani....!")},4000);
});

myPromise.then(function(value) {
    console.log(value);
});