var moment = require('moment');
// var now = new Date();
// console.log(now.getTime());
// var myBirthday = new Date('1997, 7, 11');
// console.log(myBirthday.getTime());

console.log('====================================');

var now = moment('1997-07-11 04:00');
console.log(now.fromNow());