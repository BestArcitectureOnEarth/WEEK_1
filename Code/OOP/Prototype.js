// 프로토 타입을 가진 생성자
class Car {
  constructor(model, miles) {
    this.model = model;
    this.miles = miles;
  }
}

Car.prototype.toString = function () {
  return `${this.model} has done ${this.miles} miles`;
};

let civic = new Car("현대", 20000);
let mondeo = new Car("포르쉐", 40000);

console.log(civic.toString());
