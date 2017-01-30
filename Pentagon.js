function Pentagon(side1, side2, side3, side4, side5){
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;
	};

Pentagon.prototype.printInfo = function(){
	console.log(this + "\n" + this.side1 + "\n" + this.side2 + "\n" + this.side3 + "\n" + this.side4 + "\n" + this.side5);
};

var pentagonOne = new Pentagon("side1", "side2", "side3", "side4", "side5");
console.log(pentagonOne);