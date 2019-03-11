var fs = require('fs');
var co = require('co');

function readFilePromise(path) {
   return new Promise(function(resolve, reject) {
      fs.readFile(path, { encoding: "utf8" }, function(err, data) {
         if (err) {
            reject(err);
         } else {
            resolve(data)
         }
      });
   });
}
// co(function*() {
//    // var song1 = yield readFilePromise('song1.txt');
//    // var song2 = yield readFilePromise('song2.txt');
//    // var song3 = yield readFilePromise('song3.txt');
//    var values = yield [
//       readFilePromise('song1.txt'),
//       readFilePromise('song2.txt'),
//       readFilePromise('song3.txt'),
//    ]
//    return values;

// }).then(function(values) {
//    console.log(values);
// }).catch(function(err) {
//    console.log(err)
// });

var readFlies = co.wrap(function*(files) {
   var values = yield files.map(function(files) {
      return readFilePromise(files);
   });
   return values;
});
readFlies(['song1.txt', 'song2.txt', 'song3.txt'])
   .then(function(data) {
      console.log(data);
   });