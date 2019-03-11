var readlineSync = require('readline-sync');
var languages = [];
var language = readlineSync.question('What is your mother Languages ?');
languages.push(language);
console.log(languages);

console.log('=======================================================================');

var myCrush = {};
var name = readlineSync.question("What is your crush name ?");
var age = readlineSync.question("How old is she ?");
var adress = readlineSync.question("Where is she from ?");
myCrush.name = name;
myCrush.age = parseInt(age);
myCrush.adress = adress;
console.log(myCrush);