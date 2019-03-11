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