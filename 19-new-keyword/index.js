//Contructor Function 

function Mouse(name , weight , color){
	this.type = "mouse";
	this.name = name;
	this.weight = weight;
	this.color = color;

}

var micky = new Mouse( "micky", 0.5, 'red');
var jerry = new Mouse( "jerry", 0.2, 'yellow');

console.log(micky);
console.log(jerry);


var tom = {
	name: 'tom',
	stomach: [],
	eat: function(mouse){
		this.stomach.push(mouse);
		return this; // tra ve this => nen goi duoc nhieu method
	}
};

var m1 = new Mouse('m1', 0.1 , 'blue')
var m2 = new Mouse('m2', 0.5 , 'green')


tom.eat(m1).eat(m2);
console.log(tom);

console.log('-------------------------------------------------------------------------------------')
// Prototypes in JavaScript')

function Person(firstname, lastname, age, weight){
	this.firstname = firstname;
	this.lastname = lastname;
	this.age = age;
	this.weight = weight;
	this.country = 'Viet Nam'
}

console.log(Person.prototype.constructor === Person);
/**
 * Prototype là 1 object được chia sẻ chung cho tất cả các Object được tạo bởi New Keyword
 * ---> tất cả các object được tạo bởi New KeyWord đều có thê truy cập được vào 1 Prototype nào đó
 * 
 */

Person.prototype.sleep = function(){ //=> Prototype cua Person function contructor
	console.log(this.firstname + this.lastname + " is Sleeping..........zzz")
}
 var me = new Person('Phan', 'Nam', 22, 65);
 console.log(me.sleep());

 var nga = new Person('Phuong', 'Nga', 22, 55);
 console.log(nga.sleep());

 Person.prototype.name = function(){ // => Prototype cua Person function contructor
 	return this.firstname + " " +this.lastname
 }
console.log(nga.name() + " is crush belong to " + me.name());

console.log(nga.name() + " " + me.name()) + "From to " + name.country;

/**
 * git checkout --filename (Xóa  thay đổi mà chưa cho vào git add )
 */

/**
 * git reset  là:  loại bỏ  thay đổi mà khi đã git add rồi mà chưa cho vào git commit -m
 */

/**
 *  git diff chỉ được sử dụng khi người dùng chưa gõ lệnh git add 
 */