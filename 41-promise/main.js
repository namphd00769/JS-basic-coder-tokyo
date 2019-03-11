var fs = require('fs');



function countFrom(a, b) {
   return new Promise(function(resolve, reject) {
      if (a > b) {
         reject('err');
      } else {
         var intervalId = setInterval(function() {
            ++a;
            console.log(a);
            if (a === b) {
               clearInterval(intervalId);
               resolve();
            }
         }, 1000);
      }
   });

}

countFrom(1, 10).then(function() {
   console.log('Ok Done');
});