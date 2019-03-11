var readlineSync = require('readline-sync');
var fs = require('fs');
var students = [];

function loadData() {
   var fileContent = fs.readFileSync('./data.json', { encoding: "utf8" });
   console.log(fileContent);
   students = JSON.parse(fileContent);
}

function showStudent() {
   for (var student of students) {
      console.log(student.name + " ; " + student.age + " ; " + student.gender + " ; " + student.address);
   }
}

function createStudent() {
   var student = {};
   student.name = readlineSync.question("Nhap ten sinh vien : ");
   student.age = parseInt(readlineSync.question("Nhap tuoi sinh vien: "));
   student.gender = readlineSync.question("Nhap gioi tinh sinh vien: ");
   student.address = readlineSync.question("Nhap dia chi sinh vien: ");

   students.push(student);
}

function saveAndExit() {
   var content = JSON.stringify(students);
   console.log(content);
   fs.writeFileSync('./data.json', content);
}

function main() {
   loadData();
   showMenu();
   var option = parseInt(readlineSync.question('Nhap lua tron cua ban >>> :  '));
   switch (option) {
      case 1:
         showStudent();
         showMenu();
         break;
      case 2:
         createStudent();
         console.log(students);
         showMenu();
         break;
      case 3:
         saveAndExit();
         showMenu();
         break;

      default:
         console.log('Sai ! Vui long nhập lại thông tin sinh viên');
         break;
   }

}
main();

function showMenu() {
   console.log('1. Hiển thị thông tin của tất cả sinh viên: ');
   console.log('2. Tạo mới sinh viên: ');
   console.log('3. Lưu và thoát');
}