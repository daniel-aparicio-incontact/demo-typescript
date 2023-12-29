class Point {
    // Normal signature with defaults
    constructor(x = 0, y = 0) {
        this.pointName = "principal";
        this.x = x;
        this.y = y;
    }
    get name() {
        return this.pointName;
    }
    set setX(value) {
        this.x = value;
    }
    set setY(value) {
        this.y = value;
    }
    printCoords() {
        console.log(this.x, this.y);
    }
}
const point = new Point();
point.printCoords();
console.log(point.pointName);
//point.pointName = "Other";
point.setX(4);
point.setY(3);
point.printCoords();
console.log(point.name);
