# 객체 지향

## **1. 객체와 클래스와 인스턴스**

객체지향에 대해서 설명해보자:

- 절차지향 ⇒ 함수 기반 ⇒ 주체 + 동작을 같이 함
- 객체지향 ⇒ 개발자가 작성하는 데 있어서 모델링과 연결에 편하다

### 🔹 객체(Object)**: 속성(데이터)과 행동(메서드)을 가지는 독립적인 개체**

- 소프트웨어적으로 구현할 대상

→ `클래스(설계도)의 인스턴스(실체)`

- 모든 인스턴스를 대표하는 포괄적 의미

### 🔹 클래스(Class) **: 객체를 만들기 위한 설계도**

- 연관되어 있는 변수와 메서드의 집합

### 🔹 인스턴스 (Instance): 설계도로 만들어진 실제 객체

- 인스턴스는 객체에 포함된다.
- **클래스**로부터 만들어진 실제 객체
- 객체가 메모리에 할당되어서 **실제로 사용**될 때를 인스턴스라고 부른다.

🔸 **예제**

```jsx
// 클래스
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

// Person 클래스의 인스턴스 생성
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person2.name); // Bob
person1.greet(); // Hello, my name is Alice
```

- `constructor()`
  - 클래스는 새 객체를 초기화하는 생성자 메서드를 갖는다.
- `new`
  - 생성자를 호출하는 역할
- `this`
  - 새로 생성된 해당 객체를 가리킨다.
    → `this.name`은 **새로 만들어진 객체**의 name으로, `person1.name`이다.

### 프로토타입을 가진 생성자

- 객체가 프로토타입을 공통으로 공유한다.
- 메모리 낭비를 방지

```jsx
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
```

---

## **2. 캡슐화(Encapsulation)**

🔹 **캡슐화는 객체의 내부 데이터를 외부에서 직접 접근하지 못하도록 보호하는 것**

🔹 `private` 필드를 사용하거나, `getter/setter` 메서드를 통해 데이터를 안전하게 다룰 수 있다.

🔸 **예제 (JavaScript `#`를 사용한 private 필드)**

```jsx
class BankAccount {
  #balance = 0; // private 필드 선언

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let account = new BankAccount("Alice");
account.deposit(100);
console.log(account.getBalance()); // 100
console.log(account.#balance); // 오류: Private 필드는 외부에서 접근 불가
```

---

## **3. 상속(Inheritance)**

🔹 **부모 클래스의 속성과 메서드를 자식 클래스가 물려받아 사용할 수 있도록 하는 개념**

🔹 코드 재사용성을 높이고, 공통 기능을 부모 클래스에 정의하여 유지보수를 쉽게 한다.

🔸 **예제 (JavaScript `extends` 사용)**

```jsx
// 부모 클래스 (SuperClass)
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic animal sound");
  }
}

// 자식 클래스 (SubClass) - Animal 클래스를 상속
class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

// 객체 생성
const dog = new Dog("Buddy");
console.log(dog.name); // "Buddy"  (부모 클래스의 생성자 사용)
dog.makeSound(); // "Some generic animal sound" (부모 클래스의 메서드 호출)
dog.bark();
```

---

## **4. 다형성(Polymorphism)**

🔹 **같은 인터페이스를 가진 메서드가 서로 다른 클래스에서 다르게 동작할 수 있도록 하는 개념**

🔹 같은 `speak()` 메서드라도 `Dog`과 `Cat` 클래스에서 다른 동작을 할 수 있다.

🔸 **예제 (메서드 오버라이딩)**

```jsx
class Animal {
  speak() {
    console.log("This animal makes a sound.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow!");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}

let animals = [new Cat(), new Dog()];
animals.forEach((animal) => animal.speak());
// Meow!
// Woof!
```

- 만약 부모클래스의 같은 인터페이스도 호출하고 싶다면? → `super()`메서드

```jsx
class Animal {
    void makeSound() {
        System.out.println("Some sound...");
        }
    }
class Dog extends Animal {
   // @Override
    void makeSound() {
         super.makeSound(); // 부모 클래스의 makeSound() 호출
         System.out.println("Bark!");
    }
}
public class Main {
    public static void main(String[] args) {
         Dog myDog = new Dog();
         myDog.makeSound();
    }
}
// Some sound...
// Bark!
```

---

## **5. 추상화(Abstraction)**

🔹 **객체의 핵심 기능만 공개하고, 불필요한 세부 사항은 숨기는 개념**

🔹 인터페이스 또는 추상 클래스를 사용하여 설계를 때 유용하다.

🔸 **예제 (JavaScript에서 추상 개념은 직접 지원되지 않지만, 인터페이스처럼 사용할 수 있음)**

```jsx
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
```
