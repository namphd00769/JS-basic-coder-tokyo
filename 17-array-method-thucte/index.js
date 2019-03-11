var users = [
  {name: "Phan Hai Nam", gender: 'male'},
  {name: "Phan Tuan Viet", gender: 'male'},
  {name: "Phan Dang Khoi", gender: 'male'},
  {name: "Phan Dang Khoi", gender: 'male'},
  {name: "Dang Phuong Dung", gender: 'female'},
  {name: "Trinh Phuong Nga", gender: 'female'}
];

var userList = document.getElementById("userList");
var genderFilter = document.getElementById("genderFilter");

render(userList , users); // Hiển thị mặc định , khi chưa slection

function myFilter(){
  var value_after_filter = genderFilter.value; // female or fale
    var filteredUser = users.filter(function(user){
      return user.gender === value_after_filter;
    });

   //=> filteredUser là 1 mảng chứa các giá trị mà đã được lọc male or female
   
  render(userList , filteredUser);
}

function render(content, items){
  var htmlItems = items.map(function(item){
    return '<li class="list-item">'+ item.name +'</li>';
  });
  // => htmlItems là 1 array chứa các phần tử, phải dùng join() để nối thành 1 string
  var html = htmlItems.join("");
  content.innerHTML = html;
}
