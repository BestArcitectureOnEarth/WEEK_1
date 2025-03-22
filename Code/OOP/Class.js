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
