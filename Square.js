function Square(side1, side2, side3, side4){
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	};

Square.prototype.printInfo = function(){
	console.log(this + "\n" + this.side1 + "\n" + this.side2 + "\n" + this.side3 + "\n" + this.side4);
};

var squareOne = new Square("side1", "side2", "side3", "side4");
console.log(squareOne);
