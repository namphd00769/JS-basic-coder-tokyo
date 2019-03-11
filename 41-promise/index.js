// var fs = require('promise-fs');

// function onDone(song) {
//    console.log(song)
// }

// function onErr(err) {
//    console.log(err)
// }

// function readFile(path) {
//    return fs.readFile(path, { encoding: "utf8" });
// }
// readFile('./song1.txt')
//    .then(onDone)
//    .then(function() {
//       return readFile('./song2.txt');
//    })
//    .then(onDone)
//    .catch(onErr);

var fs = require('fs');

function readFilePromise(path) {
   return new Promise(function(resolve, reject) {
      fs.readFile(path, { encoding: "utf8" }, (err, data) => {
         if (err) {
            reject(err);
         } else {
            resolve(data)
         }
      });
   });
}
readFilePromise('song1.txt')
   .then(function(song1) {
      console.log(song1);
   })
   .catch(function(err) {
      console.log(err)
   });

readFilePromise('song2.txt')
   .then(function(song2) {
      console.log(song2);
   })
   .catch(function(err) {
      console.log(err)
   });