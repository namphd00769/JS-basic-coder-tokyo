// function tossCoin() {
//    var value = Math.random();
//    if (value < 0.5) {
//       console.log("Mat ngua");
//    } else {
//       console.log("mat up");
//    }
// }
// tossCoin();

//-----------------------------------------------------
// function countBills(tiens) {
//    var total = 0;
//    for (var tien of tiens) {
//       if (!tien.fake == true) {
//          total += tien.value;
//       } else {
//          console.log("Co tien gia", tien);
//          break;
//       }
//    }
//    //    for (var i = 0; i < tiens.length; i++) {
//    //       total += tiens[i].value;
//    //    }
//    return total;
// }
// var bills = [
//    { value: 11 },
//    { value: 7 },
//    { value: 2018, fake: true },
//    { value: 1997 },
//    { value: 22 },
//    { value: 2019, fake: true },
// ];

// var total = countBills(bills);
// console.log(total);

//--------------------------------------------------------------
// function redAndBlack() {
//    var value = Math.random();
//    var result = (value < 0.5) ? "Do" : "Den";
//    console.log(result);

// }
// redAndBlack();
//-------------------------------------------------------------------

function getTicket(nguoi) {
   var basePrice = 7000;
   if (nguoi.age < 18) {
      return basePrice * 0.7
   } else if (nguoi.age > 60) {
      return basePrice * 0.5
   } else {
      return basePrice;
   }
}

var person = {
   age: 95
}
var result = getTicket(person);
console.log(result);