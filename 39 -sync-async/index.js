var fs = require('fs');

// console.log('Start......');
// var song1 = fs.readFileSync('./song-1.txt', { encoding: "utf8" });
// console.log(song1);
// var song2 = fs.readFileSync('./song-2.txt', { encoding: "utf8" });
// console.log(song2)
// console.log('.......End');
/** 
 * =========================================>
 *  two arguments (err, data)
 * 1: where data is the contents of the file.
 * 
 */

console.log('Start......');
fs.readFile('./song-1.txt', { encoding: "utf8" }, (err, dataContent) => {
   console.log(dataContent);
});
console.log('..........End')