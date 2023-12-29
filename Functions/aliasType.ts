type Point = {
    x: number;
    y: number;
};

function printCoord2(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ x: 100, y: 100 });