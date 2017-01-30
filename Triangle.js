
function Triangle(side1, side2, side3){
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	};

	Triangle.prototype.printInfo = function(){
	console.log(this + "\n" + this.side1 + "\n" + this.side2 + "\n" + this.side3);
};

var triangleOne = new Triangle("side1", "side2", "side3");
console.log(triangleOne);