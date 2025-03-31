// 기존의 Factory는 새로운 차종이 생기면 CarFactory의 코드를 수정해야 함.
// 등록형 Factory로 CarFactory를 닫힌 상태로 유지하기

class Car {
  constructor(name) {
    this.name = name;
  }

  drive() {
    console.log(`${this.name}를 운전 중입니다.`);
  }
}

class Sedan extends Car {
  constructor() {
    super("Sedan");
  }
}

class SUV extends Car {
  constructor() {
    super("SUV");
  }
}

class CarFactory {
  static registry = {};

  static register(key, value) {
    this.registry[key] = value;
  }

  static createCar(key) {
    const CarClass = this.registry[key];
    if (!CarClass) {
      console.log("알 수 없는 자동차 타입입니다.");
    } else return new CarClass();
  }
}

CarFactory.register("sedan", Sedan);
CarFactory.register("suv", SUV);
const myCar = CarFactory.createCar("suv");
myCar.drive();
