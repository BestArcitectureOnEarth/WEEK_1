// 자동차 클래스 (부모 클래스)
class Car {
  constructor(name) {
    this.name = name;
  }

  drive() {
    console.log(`${this.name}를 운전 중입니다.`);
  }
}

// Sedan 클래스 (Car를 상속, 하위(자식)클래스)
class Sedan extends Car {
  constructor() {
    super("Sedan");
  }
}

// SUV 클래스 (Car를 상속, 하위(자식)클래스)
class SUV extends Car {
  constructor() {
    super("SUV");
  }
}

// 자동차 팩토리 (객체 생성을 담당)
class CarFactory {
  static createCar(type) {
    if (type === "sedan") {
      return new Sedan();
    } else if (type === "suv") {
      return new SUV();
    } else {
      throw new Error("알 수 없는 자동차 타입입니다.");
    }
  }
}

// 사용 예시 (팩토리 메서드를 통해 자동차 객체 생성)
const myCar = CarFactory.createCar("sedan");
myCar.drive(); // "Sedan를 운전 중입니다."

const yourCar = CarFactory.createCar("suv");
yourCar.drive(); // "SUV를 운전 중입니다."
