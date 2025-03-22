# 디자인 패턴의 주요 3가지

- 7.5. 싱글톤 패턴
- 7.7. 팩토리 패턴
- 7.18. 옵저버 패턴

## 7.5 싱글톤 패턴

- **한 클래스의 인스턴스가 단 하나만 생성되도록 제한하는 패턴**

- 애플리케이션에서 **공유 리소스를 관리할 때 유용**

### 📌 **핵심 개념**

- **단일 인스턴스(Single Instance)**: 하나의 객체만 생성되어 모든 코드에서 공유
- **정적 변수(Static Instance)**: 클래스 내에서 유일한 인스턴스를 저장하는 정적 속성
- **전역 접근(Global Access)**: 어디서든 동일한 인스턴스에 접근 가능
- **게으른 초기화(Lazy Initialization)**: 필요할 때까지 인스턴스를 생성하지 않을 수도 있음

### 📌 **예제**

```jsx
// 싱글톤 클래스 (인스턴스를 하나만 유지)
class Singleton {
  static instance = null; // 단 하나의 인스턴스를 저장 // 외부에서 접근 가능

  constructor() {
    if (!Singleton.instance) {
      this.data = "공유 데이터"; // 전역에서 공유되는 데이터
      Singleton.instance = this; // 첫 번째 인스턴스를 저장
    }
    return Singleton.instance; // 기존 인스턴스를 반환
  }

  getData() {
    return this.data;
  }

  setData(newData) {
    this.data = newData;
  }
}

// 사용 예시 (싱글톤 객체 생성)
const singletonA = new Singleton();
console.log(singletonA.getData()); // "공유 데이터"

const singletonB = new Singleton();
singletonB.setData("변경된 데이터");

// 같은 인스턴스를 공유하므로 singletonA에서도 값이 변경됨
console.log(singletonA.getData()); // "변경된 데이터"

console.log(singletonA === singletonB); // true (같은 객체)
```

### 📌 **실행 결과**

싱글톤 패턴을 적용하면 `new Singleton()`을 여러 번 호출해도 **항상 같은 인스턴스를 반환**

```jsx
공유 데이터
변경된 데이터
true
```

## 7.7 팩토리 패턴

객체를 직접 생성하는 것이 아니라, **객체 생성을 위한 별도의 메서드를 제공하는 패턴**

클라이언트 코드가 특정 클래스의 인스턴스를 직접 생성하지 않고 **팩토리 메서드가 객체를 반환하는 방식**

- 객체 생성 로직을 캡슐화하여 유지보수가 쉬움
- 다형성을 적용하여 유연한 객체 생성 가능

### 📌 **핵심 개념**

- **팩토리(Factory)**: 객체를 생성하는 역할을 담당하는 클래스 또는 메서드 (ex: `CarFactory.createCar(type)`)
- **클라이언트(Client)**: 팩토리 메서드를 호출하여 객체를 생성하지만, 내부 생성 로직을 알 필요 없음
- **다형성(Polymorphism)**: 팩토리 메서드를 통해 다양한 하위 클래스를 반환할 수 있음
- **유연한 확장성**: 새로운 객체 유형이 추가되더라도 클라이언트 코드 변경 없이 팩토리만 수정하면 됨

### 📌 **예제**

```jsx
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
```

### 📌 **실행 결과**

팩토리 패턴을 사용하면 `new Sedan()`이나 `new SUV()`를 직접 호출하지 않고,

`CarFactory.createCar(type)`을 통해 객체를 생성할 수 있음

```jsx
Sedan를 운전 중입니다.
SUV를 운전 중입니다.
```

## 7.18 관찰자 패턴

: 한 객체의 상태가 변경될 때, 종속된 객체들(옵저버)에게 자동으로 알림을 보내는 패턴

- 객체 간의 결합도를 낮추면서도 이벤트 기반 프로그래밍을 구현할 수 있다.
- 이벤트 기반 프로그래밍을 할 수 있다.

### 📌 **핵심 개념**

- **주체(Subject)**: 상태를 관리하며 옵저버들에게 변경을 알림 (ex: 뉴스 발행자)
- **옵저버(Observer)**: 주체의 상태 변화를 감지하고 특정 동작을 수행 (ex: 구독자)
- **등록(Subscribe) & 해제(Unsubscribe)**: 옵저버는 주체에 등록할 수도, 해제할 수도 있음
- **알림(Notification)**: 주체의 상태가 변경되면 모든 옵저버에게 자동으로 알림이 전달됨

### 📌예제

```jsx
// 주체 (Subject) 클래스
class Subject {
  constructor() {
    this.observers = []; // 옵저버 목록
  }

  // 옵저버 등록 (구독)
  addObserver(observer) {
    this.observers.push(observer);
  }

  // 옵저버 제거 (구독 해지)
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // 상태 변경 시 모든 옵저버에게 알림
  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

// 옵저버 (Observer) 클래스
class Observer {
  constructor(name) {
    this.name = name;
  }

  // 업데이트 메서드 (주체가 notify를 호출할 때 실행됨)
  update(data) {
    console.log(`${this.name} received update: ${data}`);
  }
}

// 사용 예시
const newsPublisher = new Subject(); // 뉴스 발행자 생성

const subscriber1 = new Observer("Alice"); // 구독자1
const subscriber2 = new Observer("Bob"); // 구독자2

newsPublisher.addObserver(subscriber1);
newsPublisher.addObserver(subscriber2);

// 새로운 뉴스 발행 (옵저버들에게 알림)
newsPublisher.notify("Breaking News: New JavaScript update!");

console.log("--Subscriber2 is now not subscribed--");
// Bob이 구독 해지
newsPublisher.removeObserver(subscriber2);

// 새로운 뉴스 발행 (Bob은 알림을 받지 않음)
newsPublisher.notify("Another News: TypeScript is getting popular!");
```

### 📌실행 결과

`Alice`와 `Bob`은 처음에는 모두 알림을 받음

`Bob`이 구독 해지한 후에는 `Alice`만 알림을 받음

```jsx
Alice received update: Breaking News: New JavaScript update!
Bob received update: Breaking News: New JavaScript update!
--Subscriber2 is now not subscribed--
Alice received update: Another News: TypeScript is getting popular!
```
