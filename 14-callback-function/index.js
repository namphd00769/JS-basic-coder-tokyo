/**
 * Callback function la truyền vào tên của 1 hàm, hoặc biến chứa 1 hàm. hoặc function anymous ==> làm tham số
 * Muốn thực hiện công việc nào đó sau khi thực hiện 1 công việc chính của hàm
 */

//Cách 1. khai  tên báo hàm , rồi chuyền hàm vào
var coffeMachine = {
	makeCoffe: function(onFinish, onWarning){
		console.log('Making Coffe.....');
		onFinish(); // goi ham
		onWarning();
	}
}

var beep = function(){
	console.log("Tit tit.....")
}

var warning = function(){
	console.log("To te , to te.....")
}

// function warning(){
// 	console.log("To te , to te.....")
// }

coffeMachine.makeCoffe(beep, warning);

//Cách 2: Dùng Anymous Function

coffeMachine.makeCoffe(function(){
	console.log('=====> Way 2: using Anymous Function')
});

