var i = 0;
var idInterVal = setInterval(function() {
   i++;
   console.log(i);
   if (i == 60) {
      clearInterval(idInterVal);
   }
}, 1000);