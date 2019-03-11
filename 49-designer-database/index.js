var classes = [{
      id: 0,
      name: '1a',
      teacher: 0,
   },
   {
      id: 1,
      name: '2a',
      teacher: 1
   },
   {
      id: 2,
      name: '3a',
      teacher: 2
   },
   {
      id: 3,
      name: '4a',
      teacher: 3
   },
   {
      id: 4,
      name: '5a',
      teacher: 4
   }
];
//-------------------
var teacher = [{
      id: 0,
      name: 'hang',
      age: 45,
   },
   {
      id: 1,
      name: 'nga',
      age: 22,
   },
   {
      id: 2,
      name: 'quynh',
      age: 42,
   },
   {
      id: 3,
      name: 'linh',
      age: 35,
   },
   {
      id: 4,
      name: 'lan',
      age: 50
   }

];
//---------------------------------------
var students = [
   { id: 0, name: 'nam', height: 169, class: 0 },
   { id: 1, name: 'viet', height: 170, class: 0 },
   { id: 2, name: 'khoi', height: 120, class: 0 },
   { id: 3, name: 'nga', height: 155, class: 1 },
]

// var classA1 = classes.find(function(item) {
//    return item.name === '1a';
// });
// console.log(classA1.students.length);

function getStudentsInClass(className) {
   var classA1 = classes.find(function(item) {
      return item.name === className;
   });

   var studentsInClass = students.filter(function(student) {
      return student.class === classA1.id;
   });
   return studentsInClass;
}
var result = getStudentsInClass('2a');
console.log(result);