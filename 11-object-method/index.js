var myDod = {
	weight:5,
	name:'gau me',
	eat: function(bone){
		this.weight = this.weight + bone.weight;
	}			
};

var xuong = {weight: 0.5, name:"Bone"}

console.log('truoc khi an:' , myDod.weight);

myDod.eat(xuong);
console.log('sau khi an:',myDod.weight)