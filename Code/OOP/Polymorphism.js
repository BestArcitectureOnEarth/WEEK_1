// 다형성
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
