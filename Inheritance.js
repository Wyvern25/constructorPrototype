function Shape(n, s) {
    this.name = n;
    this.sides = n;
}

function Rectangle(h, w) {
    this.height = h;
    this.width = w;
    Shape.call(this, name, sides);
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.area = function () {
    console.log(this.height * this.width);
}

function Square(height, name, sides) {
    Rectangle.call(this, height, height, name, sides);
}

Square.prototype = Object.create(Rectangle.prototype);