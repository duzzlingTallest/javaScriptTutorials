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