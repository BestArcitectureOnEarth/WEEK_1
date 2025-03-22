// 상속 - extends 키워드

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
