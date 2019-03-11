// var myDog = { //Object
//    name: 'gau me',
//    age: 2,
//    isDead: false
// }
// var myDogString = JSON.stringify(myDog);
// console.log('This is string JSON: ', myDogString);
// console.log(myDog);

// var myCatString = '{"name": "bo sua" , "age": 2, "isDead": true}'; //string JSON
// var myCatObject = JSON.parse(myCatString);
// console.log(myCatObject);

// var readlineSync = require('readline-sync');
// var students = [];
// var fullName = readlineSync.question('What is your your name? ');
// var age = readlineSync.question('What is your age? ');
// var age = parseInt(age);
// var className = readlineSync.question('What is your class name? ');
// students.push(fullName, age, className);
// console.log(students);




var readlineSync = require('readline-sync');
var fs = require('fs');
var data = {}; //dinh dang JSON
data.students = []; // Tao 1 mang students de luu 1 danh sach object student

function createStudent() {
   var student = {};
   // nhap thong tin sinh vien
   student.name = readlineSync.question('name: ?');
   student.gender = readlineSync.question('gender: ?');
   student.age = parseInt(readlineSync.question('age: ?'));
   student.address = readlineSync.question('address: ?');
   // luu thong tin sinh vien:
   // 1: Push giu lieu vua nhap vao mang empty data.students = []
   data.students.push(student);
   /** console.log('du lieu cua ban la', data); */
   // 2: luu du lieu vao flie data.json
   fs.writeFileSync('./data.json', JSON.stringify(data));
}

function showStudent() {
   console.log('Thong tin sinh vien vua nhap la : ');
   var fileContent = fs.readFileSync('./data.json', { encoding: 'utf8' });
   var contents = JSON.parse(fileContent);
   //console.log(contents);
   for (var key in contents) {
      for (var content of contents[key]) {
         console.log(content.name + " ; " + content.age + " ; " + content.gender + " ; " + content.address);
      }
   }
}

do {
   showMenu();
   var choose = parseInt(readlineSync.question('Nhap lua chon cua ban: '));
   switch (choose) {
      case 1:
         createStudent();
         break;
      case 2:
         showStudent();
         break;
      case 3:
         console.log('<=============== Thoat truong trinh =================>')
         break;
      default:
         console.log('Nhap sai vui long nhap lai: ');
         break;
   }
} while (choose !== 3)

function showMenu() {
   console.log('1. Nhap thong tin sinh vinh vien va luu ket qua');
   console.log('2. Hien thi thong tin sinh vien');
   console.log('3. Thoat truong trinh');
}