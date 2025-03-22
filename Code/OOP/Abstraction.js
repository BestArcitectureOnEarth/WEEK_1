// 추상화
class Shape {
  getArea() {
    throw new Error("getArea() must be implemented by subclass");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

let circle = new Circle(5);
console.log(circle.getArea()); // 78.5398...
